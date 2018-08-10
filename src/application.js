import Augmented from "augmentedjs-next";

/**
 * Presentation Application - extension of Augmented.Application</br/>
 * Add registration of mediators to the application, breadcrumbs, and stylesheet registration
 * @extends Augmented.Application
 */
class Application extends Augmented.Application {
  constructor(name) {
    super(name);
    this._router = null;
    this._mediators = [];
    this._stylesheets = [];
    this._breadcrumb = new Augmented.Utility.Stack();
  };

  /**
   * Initialize Event - adds any stylesheets registered
   */
  initialize() {
    if (this._stylesheets && this._stylesheets.length > 0) {
      this.attachStylesheets();
    }
    const router = this.router;
    if (router) {
      //console.log("starting history");
      router.startHistory();
    }
    return true;
  };

  /**
   * The router property of the application
   * @property router
   */
  get router() {
    return this._router;
  };

  set router(router) {
    this._router = router;
  };

  /**
   * Register a Mediator
   * @param {Mediator} mediator The mediator to register
   */
  registerMediator(mediator) {
    if (mediator) {
      this._mediators.push(mediator);
    }
  };
  /**
   * Deregister a Mediator
   * @param {Mediator} mediator The mediator to deregister
   */
  deregisterMediator(mediator) {
    if (mediator) {
      const i = this._mediators.indexOf(mediator);
      if (i != -1) {
        this._mediators.splice(i, 1);
      }
    }
  };

  /**
   * All Mediators
   * @property {array} mediators all Mediators
   */
  get mediators() {
    return this._mediators;
  };

  /**
   * Register a stylesheet
   * @param {string} stylesheet URI of the stylesheet
   */
  registerStylesheet(s) {
    if (s) {
      this._stylesheets.push(s);
    }
  };
  /**
   * Deregister a stylesheet
   * @param {string} stylesheet URI of the stylesheet
   */
  deregisterStylesheet(s) {
    if (s) {
      this._stylesheets.splice((this._stylesheets.indexOf(s)), 1);
    }
  };
  /**
   * Attach registered stylesheets to the DOM
   */
  attachStylesheets() {
    const headElement = document.getElementsByTagName("head")[0],
    // create a shadow DOM
    shaddowDom = document.createDocumentFragment(),
    l = this._stylesheets.length;
    let i = 0, link = null;
    for (i = 0; i < l; i++) {
      link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = this._stylesheets[i];
      shaddowDom.appendChild(link);
    }
    // add the shadow to the real DOM
    headElement.appendChild(shaddowDom);
  };
  /**
   * Replace stylesheets then attach registered stylesheets to the DOM
   */
  replaceStylesheets() {
    const links = document.getElementsByTagName("link"),
          l = links.length - 1;
    let i = 0;
    for (i = l; i >= 0; i--) {
      element[i].parentNode.removeChild(element[i]);
    }
    this.attachStylesheets();
  };

  /**
   * All Stylesheets
   * @property {array} stylesheets all stylesheets
   */
  get stylesheets() {
    return this._stylesheets;
  };
  /**
   * Sets the current breadcrumb
   * @param {string} uri The URI of the breadcrumb
   * @param {string} name The name of the breadcrumb
   */
  setCurrentBreadcrumb(uri, name) {
    if (this._breadcrumb.size() > 1) {
      this._breadcrumb.pop();
    }
    this._breadcrumb.push({ "uri": uri, "name": name });
  };
  /**
   * Gets the current breadcrumb
   * @returns {object} Returns the current breadcrumb
   */
  getCurrentBreadcrumb() {
    return this._breadcrumb.peek();
  };

  /**
   * The breadcrumbs
   * @property {array} breadcrumbs alls the breadcrumbs
   */
  get breadcrumbs() {
    return this._breadcrumb.toArray();
  };

  /**
   * The Window title
   * @property {string} title title of the window
   */

  get title() {
    return document.title;
  };

  set title(title) {
    document.title = title;
  };
};

export default Application;
