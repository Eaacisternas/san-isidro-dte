import { TestBed } from '@automock/jest';
import { ConfigService } from '@nestjs/config';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let underTest: EnvironmentService;
  let configService: ConfigService;

  beforeEach(() => {
    const { unit, unitRef } = TestBed.create(EnvironmentService).compile();

    underTest = unit;
    configService = unitRef.get(ConfigService);
  });

  describe('get', () => {
    describe('when the variable is defined', () => {
      it('should return the value', () => {
        const key = 'NODE_ENV';
        const value = 'development';

        jest.spyOn(configService, 'getOrThrow').mockReturnValueOnce(value);

        expect(underTest.get(key)).toEqual(value);
      });
    });

    describe('when the variable is not defined', () => {
      it('should throw an error', () => {
        jest.spyOn(configService, 'getOrThrow').mockImplementationOnce(() => {
          throw new Error();
        });

        expect(() => underTest.get('NODE_ENV')).toThrow();
      });
    });
  });
});
