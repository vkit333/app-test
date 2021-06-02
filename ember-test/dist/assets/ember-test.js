'use strict';



;define("ember-test/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-test/adapters/application", ["exports", "@ember-data/adapter/error", "@ember-data/adapter/rest", "ember-test/config/environment"], function (_exports, _error, _rest, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationAdapter = (_dec = Ember.inject.service, (_class = class ApplicationAdapter extends _rest.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _defineProperty(this, "host", _environment.default.APP.apiHost);

      _defineProperty(this, "headers", {
        Authorization: this.session.token ? `Token ${this.session.token}` : ''
      });
    }

    handleResponse(status, headers, payload) {
      if (this.isInvalid(...arguments)) {
        if (typeof payload === 'string') {
          payload = JSON.parse(payload);
        }

        payload.errors = (0, _error.errorsHashToArray)(payload.errors);
      }

      return super.handleResponse(status, headers, payload);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationAdapter;
});
;define("ember-test/adapters/comment", ["exports", "ember-test/adapters/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AuthorAdapter extends _application.default {
    endpoint(id) {
      return `${this.host}/articles/${id}/comments`;
    }

    urlForCreateRecord(modelName, snapshot) {
      return this.endpoint(snapshot.record.article.content.id);
    }

    urlForDeleteRecord(id, modelName, snapshot) {
      return `${this.endpoint(snapshot.record.article.content.id)}/${id}`;
    }

    urlForQuery(query) {
      return this.endpoint(query.article_id);
    }

  }

  _exports.default = AuthorAdapter;
});
;define("ember-test/adapters/profile", ["exports", "ember-test/adapters/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class UserAdapter extends _application.default {
    pathForType() {
      return 'profiles';
    }

  }

  _exports.default = UserAdapter;
});
;define("ember-test/adapters/user", ["exports", "ember-test/adapters/application", "ember-test/config/environment"], function (_exports, _application, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class UserAdapter extends _application.default {
    urlForUpdateRecord() {
      return `${_environment.default.APP.apiHost}/user`;
    }

  }

  _exports.default = UserAdapter;
});
;define("ember-test/app", ["exports", "ember-resolver", "ember-load-initializers", "ember-test/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-test/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-test/components/article-author", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <LinkTo @route="profile" @model={{@author.id}}><img src={{@author.image}} alt={{@author.username}}></LinkTo>
  <div class="info">
    <LinkTo @route="profile" @model={{@author.id}} class="author">{{@author.id}}</LinkTo>
    <span class="date">{{format-date @updatedAt}}</span>
  </div>
  */
  {
    "id": "FBu/xvL6",
    "block": "{\"symbols\":[\"@author\",\"@updatedAt\"],\"statements\":[[8,\"link-to\",[],[[\"@route\",\"@model\"],[\"profile\",[32,1,[\"id\"]]]],[[\"default\"],[{\"statements\":[[10,\"img\"],[15,\"src\",[32,1,[\"image\"]]],[15,\"alt\",[32,1,[\"username\"]]],[12],[13]],\"parameters\":[]}]]],[2,\"\\n\"],[10,\"div\"],[14,0,\"info\"],[12],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"author\"]],[[\"@route\",\"@model\"],[\"profile\",[32,1,[\"id\"]]]],[[\"default\"],[{\"statements\":[[1,[32,1,[\"id\"]]]],\"parameters\":[]}]]],[2,\"\\n  \"],[10,\"span\"],[14,0,\"date\"],[12],[1,[30,[36,0],[[32,2]],null]],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"format-date\"]}",
    "moduleName": "ember-test/components/article-author.hbs"
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("ember-test/components/article-form", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#unless this.article.isValid}}
    <ul class="error-messages">
      {{#each this.article.errors as |error|}}
        <li data-test-article-form-error-item>{{error.attribute}} {{error.message}}</li>
      {{/each}}
    </ul>
  {{/unless}}
  <form>
    <fieldset>
      <fieldset class="form-group">
        <Input type="text" class="form-control form-control-lg" placeholder="Record Title" @value={{this.article.title}}
          data-test-article-form-input-title />
      </fieldset>
      <fieldset class="form-group">
        <Input type="text" class="form-control" placeholder="What's this record about?"
          @value={{this.article.description}} data-test-article-form-input-description />
      </fieldset>
      <fieldset class="form-group">
        <Textarea class="form-control" rows="8" placeholder="Write your record"
          @value={{this.article.body}} data-test-article-form-input-body />
      </fieldset>
      <fieldset class="form-group">
      </fieldset>
      <button class="btn btn-lg pull-xs-right btn-primary btn-block" type="button" disabled={{this.buttonIsDisabled}}
        data-test-article-form-submit-button {{on "click" this.publishArticle}}>
        {{if this.isSaving "Saving" "Publish"}} Article
      </button>
    </fieldset>
  </form>
  
  */
  {
    "id": "ybyYPGRt",
    "block": "{\"symbols\":[\"error\"],\"statements\":[[6,[37,2],[[32,0,[\"article\",\"isValid\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"ul\"],[14,0,\"error-messages\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"article\",\"errors\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[14,\"data-test-article-form-error-item\",\"\"],[12],[1,[32,1,[\"attribute\"]]],[2,\" \"],[1,[32,1,[\"message\"]]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[10,\"form\"],[12],[2,\"\\n  \"],[10,\"fieldset\"],[12],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Record Title\"],[24,\"data-test-article-form-input-title\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"article\",\"title\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"input\",[[24,0,\"form-control\"],[24,\"placeholder\",\"What's this record about?\"],[24,\"data-test-article-form-input-description\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"article\",\"description\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"textarea\",[[24,0,\"form-control\"],[24,\"rows\",\"8\"],[24,\"placeholder\",\"Write your record\"],[24,\"data-test-article-form-input-body\",\"\"]],[[\"@value\"],[[32,0,[\"article\",\"body\"]]]],null],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[13],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-lg pull-xs-right btn-primary btn-block\"],[16,\"disabled\",[32,0,[\"buttonIsDisabled\"]]],[24,\"data-test-article-form-submit-button\",\"\"],[24,4,\"button\"],[4,[38,3],[\"click\",[32,0,[\"publishArticle\"]]],null],[12],[2,\"\\n      \"],[1,[30,[36,4],[[32,0,[\"isSaving\"]],\"Saving\",\"Publish\"],null]],[2,\" Article\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"unless\",\"on\",\"if\"]}",
    "moduleName": "ember-test/components/article-form.hbs"
  });

  let ArticleFormComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, _dec6 = Ember._action, (_class = class ArticleFormComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _initializerDefineProperty(this, "article", _descriptor3, this);

      _initializerDefineProperty(this, "rawTagList", _descriptor4, this);

      if (this.args.article) {
        this.article = this.args.article;
        this.rawTagList = this.article.tagList.join(' ');
      } else {
        this.article = this.store.createRecord('article');
      }
    }

    willDestroy() {
      super.willDestroy(...arguments);

      if (this.article.isNew) {
        this.store.unloadRecord(this.article);
      } else if (this.article.hasDirtyAttributes) {
        if (window.confirm("You haven't saved your changes. Are you sure you want to leave the page?")) {
          this.article.rollbackAttributes();
        }
      }
    }

    get buttonIsDisabled() {
      return !this.article.hasDirtyAttributes || this.article.isSaving;
    }

    async processTags(e) {
      e.preventDefault();
      let tags = this.rawTagList.split(' ');
      this.article.set('tagList', tags);
    }

    async publishArticle() {
      try {
        await this.article.save();
        this.router.transitionTo('articles.article', this.article);
      } catch {}
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "article", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "rawTagList", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "processTags", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "processTags"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "publishArticle", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "publishArticle"), _class.prototype)), _class));
  _exports.default = ArticleFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ArticleFormComponent);
});
;define("ember-test/components/article-list", ["exports", "@glimmer/component", "ember-concurrency-decorators"], function (_exports, _component, _emberConcurrencyDecorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div {{did-update (perform this.loadArticles) @feed @page @tag}}>
    {{#if this.loadArticles.isRunning}}
      <div class="article-preview">Loading...</div>
    {{else}}
      {{#each this.articles as |article|}}
        <ArticlePreview @article={{article}} />
      {{else}}
        <div class="article-preview">No records are here... yet.</div>
      {{/each}}
      {{#if this.articles}}
        <Pagination @total={{this.articles.meta.articlesCount}} @perPage={{10}} @current={{@page}}
          @existingParams={{hash author=@feed tag=@tag}} />
      {{/if}}
    {{/if}}
  </div>
  
  */
  {
    "id": "1bwg3ehp",
    "block": "{\"symbols\":[\"article\",\"@page\",\"@tag\",\"@feed\"],\"statements\":[[11,\"div\"],[4,[38,5],[[30,[36,4],[[32,0,[\"loadArticles\"]]],null],[32,4],[32,2],[32,3]],null],[12],[2,\"\\n\"],[6,[37,3],[[32,0,[\"loadArticles\",\"isRunning\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"article-preview\"],[12],[2,\"Loading...\"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"articles\"]]],null]],null]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"      \"],[8,\"article-preview\",[],[[\"@article\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[2,\"      \"],[10,\"div\"],[14,0,\"article-preview\"],[12],[2,\"No records are here... yet.\"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[6,[37,3],[[32,0,[\"articles\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"pagination\",[],[[\"@total\",\"@perPage\",\"@current\",\"@existingParams\"],[[32,0,[\"articles\",\"meta\",\"articlesCount\"]],10,[32,2],[30,[36,0],null,[[\"author\",\"tag\"],[[32,4],[32,3]]]]]],null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"hash\",\"-track-array\",\"each\",\"if\",\"perform\",\"did-update\"]}",
    "moduleName": "ember-test/components/article-list.hbs"
  });

  let ArticleListComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = (0, _emberConcurrencyDecorators.task)({
    restartable: true
  }), (_class = class ArticleListComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);

      _initializerDefineProperty(this, "articles", _descriptor3, this);

      this.loadArticles.perform();
    }

    *loadArticles() {
      let NUMBER_OF_ARTICLES = 10;
      let offset = (parseInt(this.args.page, 10) - 1) * NUMBER_OF_ARTICLES;

      if (this.args.feed === 'your') {
        this.articles = yield this.session.user.fetchFeed(this.args.page);
      } else if (this.args.feed) {
        this.articles = yield this.store.query('article', {
          limit: NUMBER_OF_ARTICLES,
          offset,
          author: this.args.feed
        });
      } else if (!this.args.feed) {
        this.articles = yield this.store.query('article', {
          limit: NUMBER_OF_ARTICLES,
          offset
        });
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "articles", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "loadArticles", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "loadArticles"), _class.prototype)), _class));
  _exports.default = ArticleListComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ArticleListComponent);
});
;define("ember-test/components/article-meta", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="article-meta">
    <ArticleAuthor @author={{@article.author}} @updatedAt={{@article.updatedAt}} />
    {{#if (eq this.session.user.username @article.author.id)}}
      <LinkTo class="btn btn-primary btn-sm" @route="editor.edit" @model={{@article.id}}
        data-test-edit-article-button>
        <i class="ion-edit"></i> Edit Record
      </LinkTo>
      <button class="btn btn-danger btn-sm" {{on "click" this.deleteArticle}} type="button"
        data-test-delete-article-button>
        <i class="ion-trash-a"></i> Delete Record
      </button>
    {{/if}}
  </div>
  
  */
  {
    "id": "UROhVQJV",
    "block": "{\"symbols\":[\"@article\"],\"statements\":[[10,\"div\"],[14,0,\"article-meta\"],[12],[2,\"\\n  \"],[8,\"article-author\",[],[[\"@author\",\"@updatedAt\"],[[32,1,[\"author\"]],[32,1,[\"updatedAt\"]]]],null],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[32,0,[\"session\",\"user\",\"username\"]],[32,1,[\"author\",\"id\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"link-to\",[[24,0,\"btn btn-primary btn-sm\"],[24,\"data-test-edit-article-button\",\"\"]],[[\"@route\",\"@model\"],[\"editor.edit\",[32,1,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n      \"],[10,\"i\"],[14,0,\"ion-edit\"],[12],[13],[2,\" Edit Record\\n    \"]],\"parameters\":[]}]]],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-danger btn-sm\"],[24,\"data-test-delete-article-button\",\"\"],[24,4,\"button\"],[4,[38,0],[\"click\",[32,0,[\"deleteArticle\"]]],null],[12],[2,\"\\n      \"],[10,\"i\"],[14,0,\"ion-trash-a\"],[12],[13],[2,\" Delete Record\\n    \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\",\"eq\",\"if\"]}",
    "moduleName": "ember-test/components/article-meta.hbs"
  });

  let SignUpComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, (_class = class SignUpComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    async deleteArticle() {
      await this.args.article.destroyRecord();
      this.router.transitionTo('index');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteArticle", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "deleteArticle"), _class.prototype)), _class));
  _exports.default = SignUpComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SignUpComponent);
});
;define("ember-test/components/article-preview", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="article-preview" data-test-article-preview={{@article.id}}>
    <div class="article-meta">
      <ArticleAuthor @author={{@article.author}} @updatedAt={{@article.updatedAt}} />
    </div>
    <LinkTo @route="articles.article" @model={{@article.id}} class="preview-link" data-test-article-title>
      <h1>{{@article.title}}</h1>
      <p>{{@article.description}}</p>
      <span>Read more...</span>
    </LinkTo>
  </div>
  
  */
  {
    "id": "OlghPCjF",
    "block": "{\"symbols\":[\"@article\"],\"statements\":[[10,\"div\"],[14,0,\"article-preview\"],[15,\"data-test-article-preview\",[32,1,[\"id\"]]],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"article-meta\"],[12],[2,\"\\n    \"],[8,\"article-author\",[],[[\"@author\",\"@updatedAt\"],[[32,1,[\"author\"]],[32,1,[\"updatedAt\"]]]],null],[2,\"\\n  \"],[13],[2,\"\\n  \"],[8,\"link-to\",[[24,0,\"preview-link\"],[24,\"data-test-article-title\",\"\"]],[[\"@route\",\"@model\"],[\"articles.article\",[32,1,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[10,\"h1\"],[12],[1,[32,1,[\"title\"]]],[13],[2,\"\\n    \"],[10,\"p\"],[12],[1,[32,1,[\"description\"]]],[13],[2,\"\\n    \"],[10,\"span\"],[12],[2,\"Read more...\"],[13],[2,\"\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/components/article-preview.hbs"
  });

  let ArticlePreviewComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, (_class = class ArticlePreviewComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    favoriteArticle(article, operation) {
      if (this.session.isLoggedIn) {
        article[operation]();
      } else {
        this.router.transitionTo('login');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "favoriteArticle", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "favoriteArticle"), _class.prototype)), _class));
  _exports.default = ArticlePreviewComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ArticlePreviewComponent);
});
;define("ember-test/components/favorite-article", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    article favorited: {{@article.favorited}}
  <button class="btn btn-sm btn{{unless @article.favorited '-outline'}}-primary" data-test-favorite-article-button={{if
    @article.favorited "favorited" "unfavorited" }} {{on "click" (fn this.favoriteArticle (if
    @article.favorited "unfavorite" "favorite" ))}} type="button" ...attributes>
    <i class="ion-heart"></i>
    &nbsp;
    {{#if @isIconOnly}}
      {{@article.favoritesCount}}
    {{else}}
      {{if @article.favorited "Unf" "F"}}avorite Post <span class="counter">{{@article.favoritesCount}}</span>
    {{/if}}
  </button>
  */
  {
    "id": "ILfnfD0B",
    "block": "{\"symbols\":[\"@article\",\"&attrs\",\"@isIconOnly\"],\"statements\":[[2,\"article favorited: \"],[1,[32,1,[\"favorited\"]]],[2,\"\\n\"],[11,\"button\"],[16,0,[31,[\"btn btn-sm btn\",[30,[36,1],[[32,1,[\"favorited\"]],\"-outline\"],null],\"-primary\"]]],[16,\"data-test-favorite-article-button\",[30,[36,0],[[32,1,[\"favorited\"]],\"favorited\",\"unfavorited\"],null]],[17,2],[24,4,\"button\"],[4,[38,3],[\"click\",[30,[36,2],[[32,0,[\"favoriteArticle\"]],[30,[36,0],[[32,1,[\"favorited\"]],\"unfavorite\",\"favorite\"],null]],null]],null],[12],[2,\"\\n  \"],[10,\"i\"],[14,0,\"ion-heart\"],[12],[13],[2,\"\\n   \\n\"],[6,[37,0],[[32,3]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"    \"],[1,[32,1,[\"favoritesCount\"]]],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"    \"],[1,[30,[36,0],[[32,1,[\"favorited\"]],\"Unf\",\"F\"],null]],[2,\"avorite Post \"],[10,\"span\"],[14,0,\"counter\"],[12],[1,[32,1,[\"favoritesCount\"]]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"unless\",\"fn\",\"on\"]}",
    "moduleName": "ember-test/components/favorite-article.hbs"
  });

  let FavoriteArticleComponent = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, (_class = class FavoriteArticleComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);
    }

    favoriteArticle(operation) {
      if (this.session.isLoggedIn) {
        this.args.article[operation]();
      } else {
        this.router.transitionTo('login');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "favoriteArticle", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "favoriteArticle"), _class.prototype)), _class));
  _exports.default = FavoriteArticleComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, FavoriteArticleComponent);
});
;define("ember-test/components/footer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <footer>
    <div class="container">
      <LinkTo @route="index" @query={{hash author=null page=1 tag=null}} class="logo-font">Ember-test</LinkTo>
    </div>
  </footer>
  
  */
  {
    "id": "L9n/14/J",
    "block": "{\"symbols\":[],\"statements\":[[10,\"footer\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n    \"],[8,\"link-to\",[[24,0,\"logo-font\"]],[[\"@route\",\"@query\"],[\"index\",[30,[36,0],null,[[\"author\",\"page\",\"tag\"],[null,1,null]]]]],[[\"default\"],[{\"statements\":[[2,\"Ember-test\"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"hash\"]}",
    "moduleName": "ember-test/components/footer.hbs"
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("ember-test/components/login-form", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h1 class="text-xs-center">Sign in</h1>
  <p class="text-xs-center">
    <LinkTo @route="register" data-test-register-link>Need an account?</LinkTo>
  </p>
  {{#if this.loginErrors}}
    <ul class="error-messages">
      {{#each this.loginErrors as |error|}}
        <li>{{error}}</li>
      {{/each}}
    </ul>
  {{/if}}
  <form>
    <fieldset class="form-group">
      <Input class="form-control form-control-lg" type="text" placeholder="Email" @value={{this.email}}
        data-test-login-email />
    </fieldset>
    <fieldset class="form-group">
      <Input class="form-control form-control-lg" type="password" placeholder="Password" @value={{this.password}}
        data-test-login-password />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right" {{on "click" this.submit}}
      disabled={{or (not this.email) ( not this.password)}} type="button" data-test-login-button>
      Sign in
    </button>
  </form>
  */
  {
    "id": "tNE8+QwZ",
    "block": "{\"symbols\":[\"error\"],\"statements\":[[10,\"h1\"],[14,0,\"text-xs-center\"],[12],[2,\"Sign in\"],[13],[2,\"\\n\"],[10,\"p\"],[14,0,\"text-xs-center\"],[12],[2,\"\\n  \"],[8,\"link-to\",[[24,\"data-test-register-link\",\"\"]],[[\"@route\"],[\"register\"]],[[\"default\"],[{\"statements\":[[2,\"Need an account?\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[6,[37,2],[[32,0,[\"loginErrors\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"ul\"],[14,0,\"error-messages\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"loginErrors\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[1,[32,1]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[10,\"form\"],[12],[2,\"\\n  \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Email\"],[24,\"data-test-login-email\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"email\"]]]],null],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Password\"],[24,\"data-test-login-password\",\"\"],[24,4,\"password\"]],[[\"@value\"],[[32,0,[\"password\"]]]],null],[2,\"\\n  \"],[13],[2,\"\\n  \"],[11,\"button\"],[24,0,\"btn btn-lg btn-primary pull-xs-right\"],[16,\"disabled\",[30,[36,4],[[30,[36,3],[[32,0,[\"email\"]]],null],[30,[36,3],[[32,0,[\"password\"]]],null]],null]],[24,\"data-test-login-button\",\"\"],[24,4,\"button\"],[4,[38,5],[\"click\",[32,0,[\"submit\"]]],null],[12],[2,\"\\n    Sign in\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"if\",\"not\",\"or\",\"on\"]}",
    "moduleName": "ember-test/components/login-form.hbs"
  });

  let LoginFormComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember.inject.service, _dec6 = Ember.inject.service, _dec7 = Ember._action, (_class = class LoginFormComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "email", _descriptor, this);

      _initializerDefineProperty(this, "password", _descriptor2, this);

      _initializerDefineProperty(this, "user", _descriptor3, this);

      _initializerDefineProperty(this, "loginErrors", _descriptor4, this);

      _initializerDefineProperty(this, "session", _descriptor5, this);

      _initializerDefineProperty(this, "router", _descriptor6, this);
    }

    async submit(e) {
      e.preventDefault();
      this.loginErrors = [];
      this.user = await this.session.logIn(this.email, this.password);

      if (this.user.errors.length) {
        this.loginErrors = this.user.errors;
      } else {
        this.router.transitionTo('index');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "email", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "user", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "loginErrors", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "session", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = LoginFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, LoginFormComponent);
});
;define("ember-test/components/nav", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="navbar navbar-light">
    <div class="container">
      <LinkTo @route="index" @query={{hash author=null page=1 tag=null}} class="navbar-brand">Ember-test</LinkTo>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <LinkTo @route="index" class="nav-link" data-test-nav-home>Home</LinkTo>
        </li>
        {{#if this.session.isLoggedIn}}
          <li class="nav-item">
            <LinkTo @route="editor.index" class="nav-link" data-test-nav-new-post>
              <i class="ion-compose"></i>&nbsp;New Post
            </LinkTo>
          </li>
          <li class="nav-item">
            <LinkTo @route="settings" class="nav-link" data-test-nav-settings>
              <i class="ion-compose"></i>&nbsp;Settings
            </LinkTo>
          </li>
          <li class="nav-item">
            <LinkTo @route="profile" @model={{this.session.user.username}} class="nav-link" data-test-nav-username>
              {{this.session.user.username}}
            </LinkTo>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link" {{on "click" this.session.logOut}} data-test-nav-log-out>Log out</a>
          </li>
        {{else}}
          <li class="nav-item">
            <LinkTo @route="login" class="nav-link" data-test-nav-sign-in>Sign in</LinkTo>
          </li>
          <li class="nav-item">
            <LinkTo @route="register" class="nav-link" data-test-nav-sign-up>Sign up</LinkTo>
          </li>
        {{/if}}
      </ul>
    </div>
  </nav>
  
  */
  {
    "id": "gNAPigNv",
    "block": "{\"symbols\":[],\"statements\":[[10,\"nav\"],[14,0,\"navbar navbar-light\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n    \"],[8,\"link-to\",[[24,0,\"navbar-brand\"]],[[\"@route\",\"@query\"],[\"index\",[30,[36,1],null,[[\"author\",\"page\",\"tag\"],[null,1,null]]]]],[[\"default\"],[{\"statements\":[[2,\"Ember-test\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[10,\"ul\"],[14,0,\"nav navbar-nav pull-xs-right\"],[12],[2,\"\\n      \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n        \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-nav-home\",\"\"]],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"Home\"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\"],[6,[37,2],[[32,0,[\"session\",\"isLoggedIn\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n          \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-nav-new-post\",\"\"]],[[\"@route\"],[\"editor.index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"i\"],[14,0,\"ion-compose\"],[12],[13],[2,\" New Post\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n          \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-nav-settings\",\"\"]],[[\"@route\"],[\"settings\"]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[10,\"i\"],[14,0,\"ion-compose\"],[12],[13],[2,\" Settings\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n          \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-nav-username\",\"\"]],[[\"@route\",\"@model\"],[\"profile\",[32,0,[\"session\",\"user\",\"username\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[1,[32,0,[\"session\",\"user\",\"username\"]]],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n          \"],[11,\"a\"],[24,6,\"\"],[24,0,\"nav-link\"],[24,\"data-test-nav-log-out\",\"\"],[4,[38,0],[\"click\",[32,0,[\"session\",\"logOut\"]]],null],[12],[2,\"Log out\"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n          \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-nav-sign-in\",\"\"]],[[\"@route\"],[\"login\"]],[[\"default\"],[{\"statements\":[[2,\"Sign in\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n          \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-nav-sign-up\",\"\"]],[[\"@route\"],[\"register\"]],[[\"default\"],[{\"statements\":[[2,\"Sign up\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\",\"hash\",\"if\"]}",
    "moduleName": "ember-test/components/nav.hbs"
  });

  let SignUpComponent = (_dec = Ember.inject.service, (_class = class SignUpComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = SignUpComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SignUpComponent);
});
;define("ember-test/components/pagination", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav>
    <ul class="pagination">
      {{#each this.pages as |page|}}
        <li class="page-item {{if (eq page @current) "active"}}" data-test-page-item={{page}}>
          <LinkTo @route="index" @query={{hash author=@existingParams.author tag=@existingParams.tag page=page}} class="page-link" data-test-page-item-link={{page}}>{{page}}</LinkTo>
        </li>
      {{/each}}
    </ul>
  </nav>
  */
  {
    "id": "L3GwnjUd",
    "block": "{\"symbols\":[\"page\",\"@current\",\"@existingParams\"],\"statements\":[[10,\"nav\"],[12],[2,\"\\n  \"],[10,\"ul\"],[14,0,\"pagination\"],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,0,[\"pages\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[15,0,[31,[\"page-item \",[30,[36,1],[[30,[36,0],[[32,1],[32,2]],null],\"active\"],null]]]],[15,\"data-test-page-item\",[32,1]],[12],[2,\"\\n        \"],[8,\"link-to\",[[24,0,\"page-link\"],[16,\"data-test-page-item-link\",[32,1]]],[[\"@route\",\"@query\"],[\"index\",[30,[36,2],null,[[\"author\",\"tag\",\"page\"],[[32,3,[\"author\"]],[32,3,[\"tag\"]],[32,1]]]]]],[[\"default\"],[{\"statements\":[[1,[32,1]]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"hash\",\"-track-array\",\"each\"]}",
    "moduleName": "ember-test/components/pagination.hbs"
  });

  class PaginationComponent extends _component.default {
    get pages() {
      if (!this.args.total) {
        return [];
      }

      let pages = Math.ceil(this.args.total / this.args.perPage);
      return Array.from(Array(pages).keys()).map((_, index) => index + 1);
    }

  }

  _exports.default = PaginationComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, PaginationComponent);
});
;define("ember-test/components/profile", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 col-md-offset-1">
            <img src={{@profile.image}} alt={{@profile.username}} class="user-img">
            <h4>{{@profile.id}}</h4>
            <p>{{@profile.bio}}</p>
            {{#if (eq @profile.id this.session.user.username)}}
              <LinkTo @route="settings" class="btn btn-sm btn-secondary action-btn" data-test-edit-profile-button>
                <i class="ion-gear-a"></i> Edit Profile Settings
              </LinkTo>
            {{/if}}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 col-md-offset-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <LinkTo @route="profile.index" @model={{@profile.id}} class="nav-link"
                  data-test-profile-tab="my-articles">My Articles</LinkTo>
              </li>
            </ul>
          </div>
          {{#each @articles as |article|}}
            <ArticlePreview @article={{article}} />
          {{/each}}
        </div>
      </div>
    </div>
  </div>
  
  */
  {
    "id": "LcYy2fAV",
    "block": "{\"symbols\":[\"article\",\"@profile\",\"@articles\"],\"statements\":[[10,\"div\"],[14,0,\"profile-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"user-info\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"col-xs-12 col-md-10 col-md-offset-1\"],[12],[2,\"\\n          \"],[10,\"img\"],[15,\"src\",[32,2,[\"image\"]]],[15,\"alt\",[32,2,[\"username\"]]],[14,0,\"user-img\"],[12],[13],[2,\"\\n          \"],[10,\"h4\"],[12],[1,[32,2,[\"id\"]]],[13],[2,\"\\n          \"],[10,\"p\"],[12],[1,[32,2,[\"bio\"]]],[13],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[32,2,[\"id\"]],[32,0,[\"session\",\"user\",\"username\"]]],null]],null,[[\"default\"],[{\"statements\":[[2,\"            \"],[8,\"link-to\",[[24,0,\"btn btn-sm btn-secondary action-btn\"],[24,\"data-test-edit-profile-button\",\"\"]],[[\"@route\"],[\"settings\"]],[[\"default\"],[{\"statements\":[[2,\"\\n              \"],[10,\"i\"],[14,0,\"ion-gear-a\"],[12],[13],[2,\" Edit Profile Settings\\n            \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-xs-12 col-md-10 col-md-offset-1\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"articles-toggle\"],[12],[2,\"\\n          \"],[10,\"ul\"],[14,0,\"nav nav-pills outline-active\"],[12],[2,\"\\n            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n              \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-profile-tab\",\"my-articles\"]],[[\"@route\",\"@model\"],[\"profile.index\",[32,2,[\"id\"]]]],[[\"default\"],[{\"statements\":[[2,\"My Articles\"]],\"parameters\":[]}]]],[2,\"\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"],[6,[37,3],[[30,[36,2],[[30,[36,2],[[32,3]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[8,\"article-preview\",[],[[\"@article\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"eq\",\"if\",\"-track-array\",\"each\"]}",
    "moduleName": "ember-test/components/profile.hbs"
  });

  let CommentComponent = (_dec = Ember.inject.service, (_class = class CommentComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CommentComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CommentComponent);
});
;define("ember-test/components/register-form", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h1 class="text-xs-center">Sign up</h1>
  <p class="text-xs-center">
    <LinkTo @route="login" data-test-login-link>Have an account?</LinkTo>
  </p>
  {{#unless this.user.isValid}}
    <ul class="error-messages">
      {{#each this.user.errors as |error|}}
        <li>{{error.attribute}} {{error.message}}</li>
      {{/each}}
    </ul>
  {{/unless}}
  <form>
    <fieldset class="form-group">
      <Input class="form-control form-control-lg" type="text" placeholder="Your Username" @value={{this.username}}
        data-test-register-username />
    </fieldset>
    <fieldset class="form-group">
      <Input class="form-control form-control-lg" type="text" placeholder="Email" @value={{this.email}}
        data-test-register-email />
    </fieldset>
    <fieldset class="form-group">
      <Input class="form-control form-control-lg" type="password" placeholder="Password" @value={{this.password}}
        data-test-register-password />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right" {{on "click" this.submit}} disabled={{or (not this.username) (not
      this.email) ( not this.password)}} type="button" data-test-register-button>
      Sign up
    </button>
  </form>
  */
  {
    "id": "v3Xqo3i7",
    "block": "{\"symbols\":[\"error\"],\"statements\":[[10,\"h1\"],[14,0,\"text-xs-center\"],[12],[2,\"Sign up\"],[13],[2,\"\\n\"],[10,\"p\"],[14,0,\"text-xs-center\"],[12],[2,\"\\n  \"],[8,\"link-to\",[[24,\"data-test-login-link\",\"\"]],[[\"@route\"],[\"login\"]],[[\"default\"],[{\"statements\":[[2,\"Have an account?\"]],\"parameters\":[]}]]],[2,\"\\n\"],[13],[2,\"\\n\"],[6,[37,2],[[32,0,[\"user\",\"isValid\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"ul\"],[14,0,\"error-messages\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"user\",\"errors\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[12],[1,[32,1,[\"attribute\"]]],[2,\" \"],[1,[32,1,[\"message\"]]],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[10,\"form\"],[12],[2,\"\\n  \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Your Username\"],[24,\"data-test-register-username\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"username\"]]]],null],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Email\"],[24,\"data-test-register-email\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"email\"]]]],null],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n    \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Password\"],[24,\"data-test-register-password\",\"\"],[24,4,\"password\"]],[[\"@value\"],[[32,0,[\"password\"]]]],null],[2,\"\\n  \"],[13],[2,\"\\n  \"],[11,\"button\"],[24,0,\"btn btn-lg btn-primary pull-xs-right\"],[16,\"disabled\",[30,[36,4],[[30,[36,3],[[32,0,[\"username\"]]],null],[30,[36,3],[[32,0,[\"email\"]]],null],[30,[36,3],[[32,0,[\"password\"]]],null]],null]],[24,\"data-test-register-button\",\"\"],[24,4,\"button\"],[4,[38,5],[\"click\",[32,0,[\"submit\"]]],null],[12],[2,\"\\n    Sign up\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"unless\",\"not\",\"or\",\"on\"]}",
    "moduleName": "ember-test/components/register-form.hbs"
  });

  let RegisterFormComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember.inject.service, _dec6 = Ember.inject.service, _dec7 = Ember._action, (_class = class RegisterFormComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "username", _descriptor, this);

      _initializerDefineProperty(this, "email", _descriptor2, this);

      _initializerDefineProperty(this, "password", _descriptor3, this);

      _initializerDefineProperty(this, "user", _descriptor4, this);

      _initializerDefineProperty(this, "session", _descriptor5, this);

      _initializerDefineProperty(this, "router", _descriptor6, this);
    }

    async submit(e) {
      e.preventDefault();
      this.user = await this.session.register(this.username, this.email, this.password);

      if (this.user.isValid) {
        this.router.transitionTo('index');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "username", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "password", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "user", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "session", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = RegisterFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, RegisterFormComponent);
});
;define("ember-test/components/settings-form", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h1 class="text-xs-center">Your Settings</h1>
  {{#unless this.session.user.isValid}}
    <ul class="error-messages">
      {{#each this.session.user.errors as |error index|}}
        <li data-test-settings-form-error-item={{index}}>{{error.attribute}} {{error.message}}</li>
      {{/each}}
    </ul>
  {{/unless}}
  <form>
    <fieldset>
      <fieldset class="form-group">
        <Input class="form-control" type="text" placeholder="URL of profile picture" @value={{this.session.user.image}}
          data-test-settings-form-input-image />
      </fieldset>
      <fieldset class="form-group">
        <Input class="form-control form-control-lg" type="text" placeholder="Your Name"
          @value={{this.session.user.username}} data-test-settings-form-input-username />
      </fieldset>
      <fieldset class="form-group">
        <Textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"
          @value={{this.session.user.bio}} data-test-settings-form-input-bio />
      </fieldset>
      <fieldset class="form-group">
        <Input class="form-control form-control-lg" type="text" placeholder="Email" @value={{this.session.user.email}}
          data-test-settings-form-input-email />
      </fieldset>
      <fieldset class="form-group">
        <Input class="form-control form-control-lg" type="password" placeholder="Password"
          @value={{this.session.user.password}} data-test-settings-form-input-password />
      </fieldset>
      <button class="btn btn-lg btn-primary pull-xs-right btn-block" disabled={{or (not this.session.user.hasDirtyAttributes)
        this.session.user.isSaving}} {{on "click" this.submit}} type="button" data-test-settings-form-button>
        Update Settings
      </button>
    </fieldset>
  </form>
  
  */
  {
    "id": "C0blfGSU",
    "block": "{\"symbols\":[\"error\",\"index\"],\"statements\":[[10,\"h1\"],[14,0,\"text-xs-center\"],[12],[2,\"Your Settings\"],[13],[2,\"\\n\"],[6,[37,2],[[32,0,[\"session\",\"user\",\"isValid\"]]],null,[[\"default\"],[{\"statements\":[[2,\"  \"],[10,\"ul\"],[14,0,\"error-messages\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"session\",\"user\",\"errors\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[10,\"li\"],[15,\"data-test-settings-form-error-item\",[32,2]],[12],[1,[32,1,[\"attribute\"]]],[2,\" \"],[1,[32,1,[\"message\"]]],[13],[2,\"\\n\"]],\"parameters\":[1,2]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[10,\"form\"],[12],[2,\"\\n  \"],[10,\"fieldset\"],[12],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"input\",[[24,0,\"form-control\"],[24,\"placeholder\",\"URL of profile picture\"],[24,\"data-test-settings-form-input-image\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"session\",\"user\",\"image\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Your Name\"],[24,\"data-test-settings-form-input-username\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"session\",\"user\",\"username\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"textarea\",[[24,0,\"form-control form-control-lg\"],[24,\"rows\",\"8\"],[24,\"placeholder\",\"Short bio about you\"],[24,\"data-test-settings-form-input-bio\",\"\"]],[[\"@value\"],[[32,0,[\"session\",\"user\",\"bio\"]]]],null],[2,\"    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Email\"],[24,\"data-test-settings-form-input-email\",\"\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"session\",\"user\",\"email\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"fieldset\"],[14,0,\"form-group\"],[12],[2,\"\\n      \"],[8,\"input\",[[24,0,\"form-control form-control-lg\"],[24,\"placeholder\",\"Password\"],[24,\"data-test-settings-form-input-password\",\"\"],[24,4,\"password\"]],[[\"@value\"],[[32,0,[\"session\",\"user\",\"password\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-lg btn-primary pull-xs-right btn-block\"],[16,\"disabled\",[30,[36,4],[[30,[36,3],[[32,0,[\"session\",\"user\",\"hasDirtyAttributes\"]]],null],[32,0,[\"session\",\"user\",\"isSaving\"]]],null]],[24,\"data-test-settings-form-button\",\"\"],[24,4,\"button\"],[4,[38,5],[\"click\",[32,0,[\"submit\"]]],null],[12],[2,\"\\n      Update Settings\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"unless\",\"not\",\"or\",\"on\"]}",
    "moduleName": "ember-test/components/settings-form.hbs"
  });

  let SettingsFormComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class SettingsFormComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);
    }

    willDestroy() {
      super.willDestroy(...arguments);

      if (this.session.user.hasDirtyAttributes) {
        this.session.user.rollbackAttributes();
      }
    }

    async submit(e) {
      e.preventDefault();

      try {
        await this.session.user.save();
      } catch {}
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "submit", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "submit"), _class.prototype)), _class));
  _exports.default = SettingsFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SettingsFormComponent);
});
;define("ember-test/components/tag-list", ["exports", "@glimmer/component", "ember-concurrency-decorators"], function (_exports, _component, _emberConcurrencyDecorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <p>Popular Tags</p>
  {{#if this.loadTags.isRunning}}
    <p>Loading...</p>
  {{else}}
    <div class="tag-list">
      {{#each this.tags as |tag| }}
        <LinkTo @route="index" @query={{hash feed=null author=null tag=tag page=1}} class="tag-pill tag-default"
          data-test-tag={{tag}}>{{tag}}</LinkTo>
      {{/each}}
    </div>
  {{/if}}
  */
  {
    "id": "Q0FTZt8B",
    "block": "{\"symbols\":[\"tag\"],\"statements\":[[10,\"p\"],[12],[2,\"Popular Tags\"],[13],[2,\"\\n\"],[6,[37,3],[[32,0,[\"loadTags\",\"isRunning\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"p\"],[12],[2,\"Loading...\"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"tag-list\"],[12],[2,\"\\n\"],[6,[37,2],[[30,[36,1],[[30,[36,1],[[32,0,[\"tags\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"link-to\",[[24,0,\"tag-pill tag-default\"],[16,\"data-test-tag\",[32,1]]],[[\"@route\",\"@query\"],[\"index\",[30,[36,0],null,[[\"feed\",\"author\",\"tag\",\"page\"],[null,null,[32,1],1]]]]],[[\"default\"],[{\"statements\":[[1,[32,1]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"  \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"hash\",\"-track-array\",\"each\",\"if\"]}",
    "moduleName": "ember-test/components/tag-list.hbs"
  });

  let TagListComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = (0, _emberConcurrencyDecorators.task)({
    restartable: true
  }), (_class = class TagListComponent extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "tags", _descriptor2, this);

      this.loadTags.perform();
    }

    *loadTags() {
      let {
        tags
      } = yield this.session.fetch('/tags');
      this.tags = tags;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tags", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "loadTags", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "loadTags"), _class.prototype)), _class));
  _exports.default = TagListComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TagListComponent);
});
;define("ember-test/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let IndexController = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, (_class = class IndexController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _defineProperty(this, "queryParams", ['tag', 'feed', 'page']);

      _defineProperty(this, "tag", null);

      _defineProperty(this, "feed", null);

      _defineProperty(this, "page", 1);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = IndexController;
});
;define("ember-test/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("ember-test/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("ember-test/helpers/app-version", ["exports", "ember-test/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-test/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("ember-test/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("ember-test/helpers/format-date", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formatDate = formatDate;
  _exports.default = void 0;

  function formatDate([date]) {
    if (!date) {
      return '';
    }

    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }

  var _default = Ember.Helper.helper(formatDate);

  _exports.default = _default;
});
;define("ember-test/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("ember-test/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("ember-test/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("ember-test/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("ember-test/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("ember-test/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("ember-test/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("ember-test/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("ember-test/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("ember-test/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("ember-test/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("ember-test/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("ember-test/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("ember-test/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-test/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-test/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("ember-test/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("ember-test/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-test/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-test/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-test/initializers/ember-cli-mirage", ["exports", "ember-test/config/environment", "ember-test/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("ember-test/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("ember-test/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("ember-test/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-test/initializers/export-application-global", ["exports", "ember-test/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-test/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("ember-test/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-test/mirage/config", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _exports.validateArticleDescription = _exports.validateArticleBody = _exports.validateArticleTitle = _exports.validateUserEmail = _exports.validateUserUsername = void 0;

  const validateUserUsername = (username = '') => {
    const errors = [];
    username = username.trim();

    if (Ember.isBlank(username)) {
      errors.push("can't be blank");
    }

    if (username.length < 0) {
      errors.push('is too short (minimum is 1 character)');
    }

    if (username.length > 20) {
      errors.push('is too long (maximum is 20 characters)');
    }

    return errors;
  };

  _exports.validateUserUsername = validateUserUsername;

  const validateUserEmail = (email = '') => {
    const errors = [];
    email = email.trim();

    if (Ember.isBlank(email)) {
      errors.push("can't be blank");
    }

    return errors;
  };

  _exports.validateUserEmail = validateUserEmail;

  const validateArticleTitle = (title = '') => {
    const errors = [];
    title = title.trim();

    if (Ember.isBlank(title)) {
      errors.push("can't be blank");
    }

    if (title.length < 0) {
      errors.push('is too short (minimum is 1 character)');
    }

    if (title.length > 200) {
      errors.push('is too long (maximum is 200 characters)');
    }

    return errors;
  };

  _exports.validateArticleTitle = validateArticleTitle;

  const validateArticleBody = (body = '') => {
    const errors = [];
    body = body.trim();

    if (Ember.isBlank(body)) {
      errors.push("can't be blank");
    }

    return errors;
  };

  _exports.validateArticleBody = validateArticleBody;

  const validateArticleDescription = (description = '') => {
    const errors = [];
    description = description.trim();

    if (Ember.isBlank(description)) {
      errors.push("can't be blank");
    }

    if (description.length < 0) {
      errors.push('is too short (minimum is 1 character)');
    }

    if (description.length > 500) {
      errors.push('is too long (maximum is 500 characters)');
    }

    return errors;
  };

  _exports.validateArticleDescription = validateArticleDescription;

  function _default() {
    this.namespace = '';
    this.timing = 400;
    /**
     * Authentication
     */

    this.post('/users/login', (schema, request) => {
      const attrs = JSON.parse(request.requestBody).user;
      return schema.users.findBy({
        email: attrs.email
      });
    });
    /**
     * User registration
     */

    this.post('/users', (schema, request) => {
      const attrs = JSON.parse(request.requestBody).user;
      return schema.users.findBy({
        email: attrs.email
      });
    });
    /**
     * Get current user
     */

    this.get('/user', (schema, request) => {
      const {
        authorization
      } = request.requestHeaders;

      if (authorization) {
        const [authType, token] = request.requestHeaders.authorization.split(' ');

        if (authType === 'Token' && token) {
          const user = schema.users.findBy({
            token
          });

          if (user) {
            return user;
          }
        }
      }

      return new _emberCliMirage.Response(401, {}, {});
    });
    /**
     * Update current user
     */

    this.put('/user', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const {
        user: userData
      } = body;
      const {
        email,
        username
      } = userData;
      const user = schema.users.find(username);
      const errors = {
        username: validateUserUsername(username),
        email: validateUserEmail(email)
      };
      const filteredErrors = Object.entries(errors).reduce((acc, [key, arr]) => {
        if (arr.length) {
          acc[key] = arr;
        }

        return acc;
      }, {});

      if (Object.keys(filteredErrors).length) {
        return new _emberCliMirage.Response(422, {}, {
          errors: filteredErrors
        });
      }
      /**
       * Look up profile by the user's old username in order to update it.
       */


      const profile = schema.profiles.findBy({
        username: user.username
      });
      profile.update(userData);
      return user.update(userData);
    });
    this.get('/articles', (schema, request) => {
      const params = request.queryParams;

      if (params.author) {
        const {
          author
        } = params;
        return schema.articles.all().filter(article => article.author.username === author);
      } else if (params.favorited) {
        /**
         * TODO: Currently there is no way to identify articles favorited by different profiles.
         * This could cause some confusion and difficulty in testing.
         *
         * Consider creating a model that contains an array of favorite articles per user.
         */
        const {
          favorited
        } = params;
        return schema.articles.all().filter(article => article.favorited && article.author.id !== favorited);
      } else {
        const allArticles = schema.articles.all(),
              limit = parseInt(params.limit),
              page = parseInt(params.offset) / limit,
              start = page * limit,
              end = start + limit,
              newArticles = allArticles.models.slice(start, end),
              newSchema = {};
        newSchema.articles = newArticles;
        newSchema.articlesCount = allArticles.length;
        return newSchema;
      }
    });
    /**
     * Get feed articles
     */
    // this.get('/articles/feed', (schema, request) => {});

    /**
     * Create article
     */

    this.post('/articles', (schema, request) => {
      const {
        article: {
          title,
          body,
          description,
          tagList
        }
      } = JSON.parse(request.requestBody);
      const errors = {
        title: validateArticleTitle(title),
        description: validateArticleDescription(description),
        body: validateArticleBody(body)
      };
      const filteredErrors = Object.entries(errors).reduce((acc, [key, arr]) => {
        if (arr.length) {
          acc[key] = arr;
        }

        return acc;
      }, {});

      if (Object.keys(filteredErrors).length) {
        return new _emberCliMirage.Response(422, {}, {
          errors: filteredErrors
        });
      }

      return this.create('article', {
        title,
        body,
        description,
        tagList: tagList.filter(Ember.isPresent).invoke('trim')
      });
    });
    /**
     * Get an article by ID
     */

    this.get('/articles/:slug', (schema, request) => {
      const slug = request.params.slug;
      const article = schema.articles.findBy({
        slug
      });
      return article;
    });
    /**
     * Update an article by ID
     */

    this.put('/articles/:slug', (schema, request) => {
      const slug = request.params.slug;
      const {
        article: {
          title,
          body,
          description,
          tagList
        }
      } = JSON.parse(request.requestBody);
      const errors = {
        title: validateArticleTitle(title),
        description: validateArticleDescription(description),
        body: validateArticleBody(body)
      };
      const filteredErrors = Object.entries(errors).reduce((acc, [key, arr]) => {
        if (arr.length) {
          acc[key] = arr;
        }

        return acc;
      }, {});

      if (Object.keys(filteredErrors).length) {
        return new _emberCliMirage.Response(422, {}, {
          errors: filteredErrors
        });
      }

      return schema.articles.findBy({
        slug
      }).update({
        title,
        body,
        description,
        tagList: tagList.filter(Ember.isPresent).invoke('trim')
      });
    });
    /**
     * Delete an article by ID
     */

    this.delete('/articles/:slug', (schema, request) => {
      const slug = request.params.slug;
      const article = schema.articles.findBy({
        slug
      });
      return article.destroy();
    });
    /**
     * Favorite an article by ID
     */

    this.post('/articles/:slug/favorite', (schema, request) => {
      const slug = request.params.slug;
      const article = schema.articles.findBy({
        slug
      });
      return article.update({
        favorited: true,
        favoritesCount: article.favoritesCount + 1
      });
    });
    /**
     * Unfavorite an article by ID
     */

    this.delete('/articles/:slug/favorite', (schema, request) => {
      const slug = request.params.slug;
      const article = schema.articles.findBy({
        slug
      });
      return article.update({
        favorited: false,
        favoritesCount: article.favoritesCount - 1
      });
    });
    /**
     * Get an article's comments
     */

    this.get('/articles/:slug/comments', (schema, request) => {
      const slug = request.params.slug;
      const article = schema.articles.findBy({
        slug
      });
      const comments = schema.comments.where({
        articleId: article.id
      });
      return comments;
    });
    /**
     * Create an article's comment
     */

    this.post('/articles/:slug/comments', (schema, request) => {
      const slug = request.params.slug;
      const message = JSON.parse(request.requestBody).message;
      const article = schema.articles.findBy({
        slug
      });
      const user = schema.users.first();
      const author = schema.profiles.findBy({
        username: user.username
      });
      return schema.comments.create({
        message,
        article,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author
      });
    });
    /**
     * Delete an article's comment
     */

    this.delete('/articles/:slug/comments/:id', (schema, request) => {
      const id = request.params.id;
      const comment = schema.comments.find(id);
      return comment.destroy();
    });
    this.get('/tags', () => {
      return {
        tags: ['emberjs', 'tomster', 'wycats', 'tomdale', 'ember-cli', 'training', 'dragons']
      };
    });
    this.get('/profiles/:username', (schema, request) => {
      const username = request.params.username;
      return schema.profiles.findBy({
        username
      });
    });
    this.post('/profiles/:username/follow', (schema, request) => {
      const username = request.params.username;
      const profile = schema.profiles.findBy({
        username
      });
      return profile.update({
        following: true
      });
    });
    this.delete('/profiles/:username/follow', (schema, request) => {
      const username = request.params.username;
      const profile = schema.profiles.findBy({
        username
      });
      return profile.update({
        following: false
      });
    });
  }
});
;define("ember-test/mirage/factories/article", ["exports", "ember-cli-mirage", "faker"], function (_exports, _emberCliMirage, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const tags = ['emberjs', 'tomster', 'wycats', 'tomdale', 'ember-cli', 'training', 'dragons'];

  var _default = _emberCliMirage.Factory.extend({
    author: (0, _emberCliMirage.association)(),

    title() {
      return _faker.default.lorem.words();
    },

    description() {
      return _faker.default.lorem.paragraphs();
    },

    body() {
      return _faker.default.lorem.paragraphs();
    },

    tagList() {
      if (_faker.default.random.boolean()) {
        return [_faker.default.random.arrayElement(tags), _faker.default.random.arrayElement(tags)];
      } else {
        return [];
      }
    },

    createdAt() {
      return _faker.default.date.recent();
    },

    updatedAt() {
      return _faker.default.date.recent();
    },

    favorited() {
      return _faker.default.random.boolean();
    },

    favoritesCount() {
      return _faker.default.random.number(100);
    },

    slug() {
      return _faker.default.helpers.slugify(this.title);
    }

  });

  _exports.default = _default;
});
;define("ember-test/mirage/factories/author", ["exports", "ember-cli-mirage", "faker"], function (_exports, _emberCliMirage, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Factory.extend({
    username() {
      return _faker.default.internet.userName();
    },

    bio() {
      return _faker.default.lorem.sentence();
    },

    image() {
      return _faker.default.internet.avatar();
    },

    following() {
      return _faker.default.random.boolean();
    }

  });

  _exports.default = _default;
});
;define("ember-test/mirage/factories/comment", ["exports", "ember-cli-mirage", "faker"], function (_exports, _emberCliMirage, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Factory.extend({
    author: (0, _emberCliMirage.association)(),
    article: (0, _emberCliMirage.association)(),

    createdAt() {
      return _faker.default.date.recent();
    },

    updatedAt() {
      return _faker.default.date.recent();
    },

    body() {
      return _faker.default.lorem.paragraphs();
    }

  });

  _exports.default = _default;
});
;define("ember-test/mirage/factories/profile", ["exports", "ember-cli-mirage", "faker"], function (_exports, _emberCliMirage, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Factory.extend({
    token: 'auth-token',
    image: null,

    email() {
      return _faker.default.internet.email();
    },

    username() {
      return _faker.default.internet.userName();
    },

    bio() {
      return _faker.default.lorem.paragraph();
    },

    following() {
      return _faker.default.random.boolean();
    }

  });

  _exports.default = _default;
});
;define("ember-test/mirage/factories/user", ["exports", "ember-cli-mirage", "faker"], function (_exports, _emberCliMirage, _faker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Factory.extend({
    token: 'auth-token',
    image: null,

    email() {
      return _faker.default.internet.email();
    },

    username() {
      return _faker.default.internet.userName();
    },

    bio() {
      return _faker.default.lorem.paragraph();
    },

    afterCreate(user, server) {
      const {
        image,
        email,
        username,
        bio
      } = user;
      server.create('profile', {
        image,
        email,
        username,
        bio
      });
    }

  });

  _exports.default = _default;
});
;define("ember-test/mirage/models/article", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    author: (0, _emberCliMirage.belongsTo)('profile')
  });

  _exports.default = _default;
});
;define("ember-test/mirage/models/author", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({});

  _exports.default = _default;
});
;define("ember-test/mirage/models/comment", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({
    author: (0, _emberCliMirage.belongsTo)('profile'),
    article: (0, _emberCliMirage.belongsTo)('article')
  });

  _exports.default = _default;
});
;define("ember-test/mirage/models/profile", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({});

  _exports.default = _default;
});
;define("ember-test/mirage/models/tag", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({});

  _exports.default = _default;
});
;define("ember-test/mirage/models/user", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Model.extend({});

  _exports.default = _default;
});
;define("ember-test/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(server) {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */
    server.create('user', {
      email: 'email@example.com',
      password: 'password'
    });
    server.createList('article', 20);
  }
});
;define("ember-test/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.RestSerializer.extend({
    embed: true
  });

  _exports.default = _default;
});
;define("ember-test/mirage/serializers/article", ["exports", "ember-test/mirage/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _application.default.extend({
    include: Object.freeze(['author'])
  });

  _exports.default = _default;
});
;define("ember-test/mirage/serializers/comment", ["exports", "ember-test/mirage/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _application.default.extend({
    include: Object.freeze(['author'])
  });

  _exports.default = _default;
});
;define("ember-test/models/article", ["exports", "@ember-data/model", "marked"], function (_exports, _model, _marked) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ArticleModel = (_dec = Ember.inject.service, _dec2 = (0, _model.attr)('date'), _dec3 = (0, _model.attr)('date'), _dec4 = (0, _model.belongsTo)('profile'), _dec5 = (0, _model.hasMany)('comment', {
    async: false
  }), (_class = class ArticleModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "title", _descriptor2, this);

      _initializerDefineProperty(this, "description", _descriptor3, this);

      _initializerDefineProperty(this, "body", _descriptor4, this);

      _initializerDefineProperty(this, "createdAt", _descriptor5, this);

      _initializerDefineProperty(this, "updatedAt", _descriptor6, this);

      _initializerDefineProperty(this, "favorited", _descriptor7, this);

      _initializerDefineProperty(this, "favoritesCount", _descriptor8, this);

      _initializerDefineProperty(this, "author", _descriptor9, this);

      _initializerDefineProperty(this, "comments", _descriptor10, this);
    }

    get safeMarkup() {
      let markup = (0, _marked.default)(this.body, {
        sanitize: true
      });
      return Ember.String.htmlSafe(markup);
    }

    loadComments() {
      return this.store.query('comment', {
        article_id: this.id
      });
    }

    async favorite() {
      await this.favoriteOperation('favorite');
    }

    async unfavorite() {
      await this.favoriteOperation('unfavorite');
    }

    async favoriteOperation(operation) {
      let {
        article
      } = await this.session.fetch(`/articles/${this.id}/favorite`, operation === 'unfavorite' ? 'DELETE' : 'POST');
      this.store.pushPayload({
        articles: [Object.assign(article, {
          id: article.slug
        })]
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "title", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "body", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "createdAt", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "updatedAt", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "favorited", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "favoritesCount", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "author", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "comments", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ArticleModel;
});
;define("ember-test/models/comment", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CommentModel = (_dec = (0, _model.attr)('date'), _dec2 = (0, _model.attr)('date'), _dec3 = (0, _model.belongsTo)('profile'), _dec4 = (0, _model.belongsTo)('article'), (_class = class CommentModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "body", _descriptor, this);

      _initializerDefineProperty(this, "createdAt", _descriptor2, this);

      _initializerDefineProperty(this, "updatedAt", _descriptor3, this);

      _initializerDefineProperty(this, "author", _descriptor4, this);

      _initializerDefineProperty(this, "article", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "body", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "createdAt", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "updatedAt", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "author", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "article", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = CommentModel;
});
;define("ember-test/models/profile", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UserModel = (_dec = Ember.inject.service, _dec2 = (0, _model.hasMany)('article', {
    async: false,
    inverse: 'author'
  }), (_class = class UserModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "bio", _descriptor2, this);

      _initializerDefineProperty(this, "image", _descriptor3, this);

      _initializerDefineProperty(this, "following", _descriptor4, this);

      _initializerDefineProperty(this, "articles", _descriptor5, this);
    }

    async loadArticles() {
      let articles = await this.store.query('article', {
        author: this.id
      });
      this.articles = articles;
    }

    fetchFavorites() {
      return this.store.query('article', {
        favorited: this.id
      });
    }

    async follow() {
      await this.followOperation('follow');
    }

    async unfollow() {
      await this.followOperation('unfollow');
    }

    async followOperation(operation) {
      let {
        profile
      } = await this.session.fetch(`/profiles/${this.id}/follow`, operation === 'follow' ? 'POST' : 'DELETE');
      this.store.pushPayload({
        profiles: [Object.assign(profile, {
          id: profile.username
        })]
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "bio", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "image", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "following", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "articles", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UserModel;
});
;define("ember-test/models/user", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UserModel = (_dec = Ember.inject.service, _dec2 = (0, _model.attr)('date'), _dec3 = (0, _model.attr)('date'), (_class = class UserModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "bio", _descriptor2, this);

      _initializerDefineProperty(this, "email", _descriptor3, this);

      _initializerDefineProperty(this, "image", _descriptor4, this);

      _initializerDefineProperty(this, "password", _descriptor5, this);

      _initializerDefineProperty(this, "token", _descriptor6, this);

      _initializerDefineProperty(this, "username", _descriptor7, this);

      _initializerDefineProperty(this, "createdAt", _descriptor8, this);

      _initializerDefineProperty(this, "updatedAt", _descriptor9, this);
    }

    async fetchFeed(page = 1) {
      let {
        articles
      } = await this.session.fetch(`/articles/feed?page=${page}`);

      if (!articles.length) {
        return [];
      }

      let ids = articles.map(article => article.slug);
      let normalizedArticles = articles.map(article => Object.assign({}, article, {
        id: article.slug
      }));
      this.store.pushPayload({
        articles: normalizedArticles
      });
      return this.store.peekAll('article').filter(article => ids.includes(article.id));
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "bio", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "email", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "image", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "password", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "token", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "username", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "createdAt", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "updatedAt", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = UserModel;
});
;define("ember-test/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("ember-test/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("ember-test/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("ember-test/router", ["exports", "ember-test/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('editor', function () {
      this.route('edit', {
        path: ':id'
      });
    });
    this.route('settings');
    this.route('register');
    this.route('login');
    this.route('articles', function () {
      this.route('article', {
        path: ':id'
      });
    });
    this.route('profile', {
      path: 'profile/:id'
    }, function () {
      this.route('favorites');
    });
    this.route('error', {
      path: '/*path'
    });
  });
});
;define("ember-test/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_dec = Ember.inject.service, (_class = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);
    }

    model() {
      return this.session.initSession();
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ApplicationRoute;
});
;define("ember-test/routes/articles/article", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ArticlesArticleRoute extends Ember.Route {
    model({
      id
    }) {
      return this.store.findRecord('article', id);
    }

  }

  _exports.default = ArticlesArticleRoute;
});
;define("ember-test/routes/editor", ["exports", "ember-test/routes/logged-in"], function (_exports, _loggedIn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EditorRoute extends _loggedIn.default {}

  _exports.default = EditorRoute;
});
;define("ember-test/routes/editor/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EditorEditRoute extends Ember.Route {
    model({
      id
    }) {
      return this.store.findRecord('article', id);
    }

  }

  _exports.default = EditorEditRoute;
});
;define("ember-test/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class IndexRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "queryParams", {
        feed: {
          refreshModel: true
        },
        page: {
          refreshModel: true
        },
        tag: {
          refreshModel: true
        }
      });
    }

  }

  _exports.default = IndexRoute;
});
;define("ember-test/routes/logged-in", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let LoggedInRoute = (_dec = Ember.inject.service, (_class = class LoggedInRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);
    }

    beforeModel() {
      if (!this.session.isLoggedIn) {
        this.transitionTo('login');
      }
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = LoggedInRoute;
});
;define("ember-test/routes/profile", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ProfileRoute extends Ember.Route {
    model({
      id
    }) {
      return this.store.findRecord('profile', id);
    }

  }

  _exports.default = ProfileRoute;
});
;define("ember-test/routes/profile/favorites", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ProfileFavoritesRoute extends Ember.Route {
    async model() {
      let profile = this.modelFor('profile');
      return profile.fetchFavorites();
    }

    setupController(controller, model) {
      super.setupController(controller, model);
      controller.set('profile', this.modelFor('profile'));
    }

  }

  _exports.default = ProfileFavoritesRoute;
});
;define("ember-test/routes/profile/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ProfileIndexRoute extends Ember.Route {
    async model() {
      let profile = this.modelFor('profile');
      await profile.loadArticles();
      return profile;
    }

  }

  _exports.default = ProfileIndexRoute;
});
;define("ember-test/routes/settings", ["exports", "ember-test/routes/logged-in"], function (_exports, _loggedIn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SettingsRoute extends _loggedIn.default {}

  _exports.default = SettingsRoute;
});
;define("ember-test/routes/sign-up", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SignUpRoute extends Ember.Route {}

  _exports.default = SignUpRoute;
});
;define("ember-test/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("ember-test/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("ember-test/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("ember-test/serializers/application", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationSerializer extends _rest.default {}

  _exports.default = ApplicationSerializer;
});
;define("ember-test/serializers/article", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ArticleSerializer extends _rest.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "primaryKey", 'slug');

      _defineProperty(this, "attrs", {
        author: {
          embedded: 'always'
        }
      });
    }

    extractMeta(store, typeClass, payload) {
      if (payload && payload.articlesCount) {
        let meta = {
          articlesCount: payload.articlesCount
        };
        delete payload.articlesCount;
        return meta;
      }
    }

  }

  _exports.default = ArticleSerializer;
});
;define("ember-test/serializers/comment", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class CommentSerializer extends _rest.default.extend(_rest.EmbeddedRecordsMixin) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        author: {
          embedded: 'always'
        }
      });
    }

  }

  _exports.default = CommentSerializer;
});
;define("ember-test/serializers/profile", ["exports", "ember-test/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class UserSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "primaryKey", 'username');
    }

    normalizeFindRecordResponse(store, primaryModelClass, payload) {
      payload.profiles = payload.profile;
      delete payload.profile;
      return super.normalizeFindRecordResponse(...arguments);
    }

  }

  _exports.default = UserSerializer;
});
;define("ember-test/serializers/user", ["exports", "ember-test/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class UserSerializer extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "attrs", {
        token: {
          serialize: false
        },
        createdAt: {
          serialize: false
        },
        updatedAt: {
          serialize: false
        }
      });
    }

  }

  _exports.default = UserSerializer;
});
;define("ember-test/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("ember-test/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("ember-test/services/session", ["exports", "ember-test/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let SessionService = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, (_class = (_temp = _class2 = class SessionService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "session", _descriptor2, this);

      _initializerDefineProperty(this, "token", _descriptor3, this);

      _initializerDefineProperty(this, "user", _descriptor4, this);
    }

    initSession() {
      let storedToken = this.getStoredToken();

      if (storedToken) {
        this.token = storedToken;
        return this.fetchUser();
      }
    }

    get isLoggedIn() {
      return !!this.token;
    }

    async fetch(url, method = 'GET') {
      let response = await fetch(`${_environment.default.APP.apiHost}${url}`, {
        method,
        headers: {
          Authorization: this.token ? `Token ${this.token}` : ''
        }
      });
      let payload = await response.json();
      return payload;
    }

    async register(username, email, password) {
      let user = this.store.createRecord('user', {
        username,
        email,
        password
      });

      try {
        await user.save();
        this.setToken(user.token);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      } finally {
        this.user = user;
      }

      return user;
    }

    async logIn(email, password) {
      let login = await fetch(`${_environment.default.APP.apiHost}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            email,
            password
          }
        })
      });
      let userPayload = await login.json();

      if (userPayload.errors) {
        let errors = this.processLoginErrors(userPayload.errors);
        return {
          errors
        };
      } else {
        this.store.pushPayload({
          users: [userPayload.user]
        });
        this.setToken(userPayload.user.token);
        this.user = this.store.peekRecord('user', userPayload.user.id);
        return this.user;
      }
    }

    logOut() {
      this.removeToken();
    }

    async fetchUser() {
      let {
        user
      } = await this.session.fetch('/user');
      this.store.pushPayload({
        users: [user]
      });
      this.user = this.store.peekRecord('user', user.id);
      return this.user;
    }

    getStoredToken() {
      return localStorage.getItem(SessionService.STORAGE_KEY);
    }

    setToken(token) {
      this.token = token;
      localStorage.setItem(SessionService.STORAGE_KEY, token);
    }

    removeToken() {
      this.token = null;
      localStorage.removeItem('realworld.ember.token');
    }

    processLoginErrors(errors) {
      let loginErrors = [];
      let errorKeys = Object.keys(errors);
      errorKeys.forEach(attribute => {
        errors[attribute].forEach(message => {
          loginErrors.push(`${attribute} ${message}`);
        });
      });
      return loginErrors;
    }

  }, _defineProperty(_class2, "STORAGE_KEY", 'realworld.ember.token'), _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "session", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "token", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "user", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "register", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "register"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "logIn", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "logIn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "logOut", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "logOut"), _class.prototype)), _class));
  _exports.default = SessionService;
});
;define("ember-test/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("ember-test/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xFeW/MZP",
    "block": "{\"symbols\":[],\"statements\":[[8,\"nav\",[],[[],[]],null],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[8,\"footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "ember-test/templates/application.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/articles/article", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "n3XiFjof",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"article-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"banner\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n      \"],[10,\"h1\"],[14,\"data-test-article-title\",\"\"],[12],[1,[32,0,[\"model\",\"title\"]]],[13],[2,\"\\n      \"],[8,\"article-meta\",[],[[\"@article\"],[[32,0,[\"model\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row article-content\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-md-12\"],[14,\"data-test-article-body\",\"\"],[12],[2,\"\\n        \"],[1,[32,0,[\"model\",\"safeMarkup\"]]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"hr\"],[12],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"article-actions\"],[12],[2,\"\\n      \"],[8,\"article-meta\",[],[[\"@article\"],[[32,0,[\"model\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/articles/article.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/editor", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1AdsNqdz",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"editor-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-md-10 col-md-offset-1 col-xs-12\"],[12],[2,\"\\n        \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "moduleName": "ember-test/templates/editor.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/editor/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VEk/SY65",
    "block": "{\"symbols\":[],\"statements\":[[8,\"article-form\",[],[[\"@article\"],[[32,0,[\"model\"]]]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/editor/edit.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/editor/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FHn2kcTs",
    "block": "{\"symbols\":[],\"statements\":[[8,\"article-form\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/editor/index.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/error", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "PJPTmkSZ",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"editor-page\"],[14,\"data-test-error-page\",\"\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-md-10 col-md-offset-1 col-xs-12\"],[12],[2,\"\\n        \"],[10,\"h2\"],[12],[2,\"Sorry but that page does not exist.\"],[13],[2,\"\\n        \"],[10,\"p\"],[12],[2,\"Try find your page from the \"],[8,\"link-to\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"homepage\"]],\"parameters\":[]}]]],[2,\"\\n        \"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/error.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iXCmqGya",
    "block": "{\"symbols\":[\"isGlobalFeed\",\"@model\"],\"statements\":[[10,\"div\"],[14,0,\"home-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"banner\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n      \"],[10,\"h1\"],[14,0,\"logo-font\"],[12],[2,\"Ember-test\"],[13],[2,\"\\n        \"],[10,\"img\"],[14,\"src\",\"assets/ember.png\"],[14,0,\"container__image\"],[12],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"col-md-12\"],[12],[2,\"\\n        \"],[10,\"div\"],[14,0,\"feed-toggle\"],[12],[2,\"\\n          \"],[10,\"ul\"],[14,0,\"nav nav-pills outline-active\"],[12],[2,\"\\n\"],[6,[37,1],[[32,0,[\"session\",\"isLoggedIn\"]]],null,[[\"default\"],[{\"statements\":[[2,\"              \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n                  \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-profile-tab\",\"my-articles\"]],[[\"@route\",\"@query\"],[\"index\",[30,[36,0],null,[[\"feed\",\"tag\",\"page\"],[[32,2,[\"username\"]],null,1]]]]],[[\"default\"],[{\"statements\":[[2,\"My Records\"]],\"parameters\":[]}]]],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"            \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,2],[[32,0,[\"tag\"]]],null],[30,[36,2],[[32,0,[\"feed\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"                \"],[8,\"link-to\",[[16,0,[31,[\"nav-link \",[30,[36,1],[[32,1],\"active\"],null]]]],[24,\"data-test-tab\",\"global\"]],[[\"@route\",\"@query\"],[\"index\",[30,[36,0],null,[[\"feed\",\"tag\",\"page\"],[null,null,1]]]]],[[\"default\"],[{\"statements\":[[2,\"\\n                  All records\\n                \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"            \"],[13],[2,\"\\n\"],[6,[37,1],[[32,0,[\"tag\"]]],null,[[\"default\"],[{\"statements\":[[2,\"              \"],[10,\"li\"],[14,0,\"nav-item\"],[12],[2,\"\\n                \"],[8,\"link-to\",[[24,0,\"nav-link\"],[24,\"data-test-tab\",\"tag\"]],[[\"@route\",\"@query\"],[\"index\",[30,[36,0],null,[[\"feed\",\"tag\"],[null,[32,0,[\"tag\"]]]]]]],[[\"default\"],[{\"statements\":[[2,\"\\n                  #\"],[1,[32,0,[\"tag\"]]]],\"parameters\":[]}]]],[2,\"\\n              \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[8,\"article-list\",[],[[\"@feed\",\"@page\",\"@tag\"],[[32,0,[\"feed\"]],[32,0,[\"page\"]],[32,0,[\"tag\"]]]],null],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"hash\",\"if\",\"not\",\"and\",\"let\"]}",
    "moduleName": "ember-test/templates/index.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "osNDPOEH",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"auth-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"col-md-6 col-md-offset-3 col-xs-12\"],[12],[2,\"\\n        \"],[8,\"login-form\",[],[[],[]],null],[2,\"\\n      \"],[13],[2,\"\\n\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/login.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/profile/favorites", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4Wa+At+P",
    "block": "{\"symbols\":[],\"statements\":[[8,\"profile\",[],[[\"@profile\",\"@articles\"],[[32,0,[\"profile\"]],[32,0,[\"model\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/profile/favorites.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/profile/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "DwlahbPA",
    "block": "{\"symbols\":[],\"statements\":[[8,\"profile\",[],[[\"@profile\",\"@articles\"],[[32,0,[\"model\"]],[32,0,[\"model\",\"articles\"]]]],null]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/profile/index.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/register", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7IRse249",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"auth-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"col-md-6 col-md-offset-3 col-xs-12\"],[12],[2,\"\\n        \"],[8,\"register-form\",[],[[],[]],null],[2,\"\\n      \"],[13],[2,\"\\n\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/register.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/templates/settings", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oWM6eswS",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"settings-page\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container page\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"row\"],[12],[2,\"\\n\\n      \"],[10,\"div\"],[14,0,\"col-md-6 col-md-offset-3 col-xs-12\"],[12],[2,\"\\n        \"],[8,\"settings-form\",[],[[],[]],null],[2,\"\\n      \"],[13],[2,\"\\n\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "moduleName": "ember-test/templates/settings.hbs"
  });

  _exports.default = _default;
});
;define("ember-test/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("ember-test/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("ember-test/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("ember-test/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('ember-test/config/environment', [], function() {
  var prefix = 'ember-test';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-test/app")["default"].create({"apiHost":"https://conduit.productionready.io/api","name":"ember-test","version":"1.0.0+d940c56f"});
          }
        
//# sourceMappingURL=ember-test.map
