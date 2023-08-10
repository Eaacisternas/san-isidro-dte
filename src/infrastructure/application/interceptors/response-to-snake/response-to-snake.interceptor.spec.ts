import { TestBed } from '@automock/jest';
import { ResponseToSnakeInterceptor } from './response-to-snake.interceptor';
import { firstValueFrom, of } from 'rxjs';
import { CallHandler } from '@nestjs/common';
import { createMock } from '@golevelup/ts-jest';

describe('ResponseToSnakeInterceptor', () => {
  let underTest: ResponseToSnakeInterceptor;

  beforeEach(() => {
    const { unit } = TestBed.create(ResponseToSnakeInterceptor).compile();

    underTest = unit;
  });

  describe('intercept', () => {
    let callHandlerMock: CallHandler;

    beforeEach(() => {
      callHandlerMock = createMock<CallHandler>({
        handle: jest.fn().mockReturnValue(of({})),
      });
    });

    describe('when the response is not an object', () => {
      beforeEach(() => {
        jest
          .spyOn(callHandlerMock, 'handle')
          .mockReturnValueOnce(of('foo' as any));
      });

      it('should return it as it is', async () => {
        const actual = await firstValueFrom(
          underTest.intercept({} as any, callHandlerMock),
        );

        expect(actual).toMatchInlineSnapshot(`"foo"`);
      });
    });

    describe('when the response is an object', () => {
      beforeEach(() => {
        jest
          .spyOn(callHandlerMock, 'handle')
          .mockReturnValueOnce(of({ fooBar: 'fooBar' } as any));
      });

      it('should return it with snake case keys instead', async () => {
        const actual = await firstValueFrom(
          underTest.intercept({} as any, callHandlerMock),
        );

        expect(actual).toMatchInlineSnapshot(`
          {
            "foo_bar": "fooBar",
          }
        `);
      });
    });
  });
});
