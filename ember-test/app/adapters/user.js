import ApplicationAdapter from './application';
import ENV from 'ember-test/config/environment';

export default class UserAdapter extends ApplicationAdapter {
  urlForUpdateRecord() {
    return `${ENV.APP.apiHost}/user`;
  }
}
