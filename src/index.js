__webpack_public_path__ = __build_path__;
/**
 * Module dependencies
 */

import Poe from 'poe-ui';
import Forms from 'form-store';
import Store from 'hyper-store';
import Client from 'hyper-client-wait1';
import Format from 'hyper-uri-format';
import Translate from 'onus-translate';
import ReactDOM from 'react-dom';
import routes from 'onus-router/react?enhancers=basename!../web';

var API_URL = browser.env.API_URL;

/**
 * Instantiate dependencies
 */

var format = require('hyper-uri-format')(API_URL);
var client = new Client(API_URL);
var store = new Store(client);
var forms = new Forms(client);

var app = Poe({
  router: {
    activeLinkClassName: 'is-active',
    basename: __app_path__,
    routes: routes
  },
  format: format,
  forms: new Forms(client),
  store: store,
  translate: new Translate('.translations.project_ui')
});

module.exports = ReactDOM.render(app, document.getElementById('app'));