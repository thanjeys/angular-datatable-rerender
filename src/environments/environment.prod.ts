import { environmment as defaultEnvironment } from './environment.default';

export const environment = {
  ...defaultEnvironment,
  production: true,
  BASE_URL: 'http://c360.zone/ceewell',
  REST_API_URL:'http://c360.zone/ceewell_api'
};
