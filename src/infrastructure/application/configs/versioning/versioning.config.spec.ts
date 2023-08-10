import { createMock } from '@golevelup/ts-jest';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as underTest from './versioning.config';

describe('VersioningConfig', () => {
  let app: INestApplication;

  beforeEach(() => {
    app = createMock();
  });

  describe('enableVersioning', () => {
    let appSpy: jest.SpyInstance<INestApplication>;

    beforeEach(() => {
      appSpy = jest.spyOn(app, 'enableVersioning');

      underTest.enableVersioning(app);
    });

    it('should set the correct parameters', () => {
      expect(appSpy).toHaveBeenCalledWith(
        expect.objectContaining<
          Parameters<INestApplication['enableVersioning']>[0]
        >({ type: VersioningType.URI, defaultVersion: '1' }),
      );
    });
  });
});
