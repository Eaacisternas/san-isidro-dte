import { TestBed } from '@automock/jest';
import { createMock } from '@golevelup/ts-jest';
import { ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { HttpExceptionFilter } from './http-exception.filter';
import { objectToSnake } from 'ts-case-convert';

describe('HttpExceptionFilter', () => {
  let underTest: HttpExceptionFilter<HttpException>;

  beforeEach(() => {
    const { unit } = TestBed.create(HttpExceptionFilter).compile();

    underTest = unit;
  });

  describe('catch', () => {
    let responseMock: Response;
    let exceptionMock: HttpException;
    let argumentsHostMock: ArgumentsHost;

    beforeEach(() => {
      exceptionMock = createMock<HttpException>();

      responseMock = createMock<Response>({
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      });

      argumentsHostMock = createMock<ArgumentsHost>({
        switchToHttp: () => ({ getResponse: () => responseMock }),
      });
    });

    describe.each(['string', {}, { unknown: 'any value' }])(
      'when exception response is %p',
      (exceptionResponse) => {
        beforeEach(() => {
          jest
            .spyOn(exceptionMock, 'getResponse')
            .mockReturnValue(exceptionResponse as any);
        });

        it('should set status code', () => {
          const expected = 400;

          const responseSpy = jest.spyOn(responseMock, 'status');
          jest.spyOn(exceptionMock, 'getStatus').mockReturnValue(expected);

          underTest.catch(exceptionMock, argumentsHostMock);

          expect(responseSpy).toHaveBeenCalledWith(expected);
        });

        it('should include the status code in the response in snake case notation', () => {
          const expected = 400;

          const responseSpy = jest.spyOn(responseMock, 'json');
          jest.spyOn(exceptionMock, 'getStatus').mockReturnValue(expected);

          underTest.catch(exceptionMock, argumentsHostMock);

          expect(responseSpy).toHaveBeenCalledWith(
            expect.objectContaining({ status_code: expected }),
          );
        });
      },
    );

    describe('when exception has an object response', () => {
      beforeEach(() => {
        jest.spyOn(exceptionMock, 'getResponse').mockReturnValue({});
      });

      it('should include the response object keys in snake case notation', () => {
        const expected = { someKey: 'some value', anotherKey: 'another value' };

        const responseSpy = jest.spyOn(responseMock, 'json');
        jest.spyOn(exceptionMock, 'getResponse').mockReturnValueOnce(expected);

        underTest.catch(exceptionMock, argumentsHostMock);

        expect(responseSpy).toHaveBeenCalledWith(
          expect.objectContaining(objectToSnake(expected)),
        );
      });
    });

    describe('when exception has a string response', () => {
      beforeEach(() => {
        jest.spyOn(exceptionMock, 'getResponse').mockReturnValue('response');
      });

      it('should only include the status code in the response in snake case notation', () => {
        const expected = 400;

        const responseSpy = jest.spyOn(responseMock, 'json');
        jest.spyOn(exceptionMock, 'getStatus').mockReturnValue(expected);

        underTest.catch(exceptionMock, argumentsHostMock);

        expect(responseSpy).toHaveBeenCalledWith({ status_code: 400 });
      });
    });
  });
});
