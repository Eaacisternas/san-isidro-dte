export const HEALTH_API_TAG = 'BFF status';
export const VERSION_CONTROL_API_TAG = 'Supported app versions';
export const FILES_API_TAG = 'Files';
export const PHONE_API_TAG = 'Phone';
export const FAQS_FILE_PATH = {
  get: {
    params: {
      fileName: 'fileName',
    },
    path: ':fileName',
  },
  root: 'file',
};
