import { Application as NextApplication } from "next-core-application";
import { serialize } from "presentation-router";
import { Stack } from "next-core-structures";

const getPlace = (where, options) => {
  return (options) ? `${where}?${serialize(options)}` : where;
};

/**
 * Presentation Application - extension of Augmented.Application</br/>
 * Add registration of mediators to the application, breadcrumbs, and stylesheet registration
 * The Application is a container for the 'app'. This allows control of the flow application init, routing, and starting.
 * Applications can include API to add app-globals like datastores, and mediators.
 * Applications contain a few built-in items:
 * <ul>
 * <li>A start method to kick off your application (stop as well).</li>
 * <li>A router property</li>
 * <li>mediator registration</li>
 * <li>stylesheets</li>
 * <li>breadcrumbs for tracking navigations</li>
 * </ul>
 * @extends Augmented.Application
 * @param {Object} options Options to pass
 */
class Application extends NextApplication {
  constructor(options) {
    super(options);
    this._mediators = [];
    this._stylesheets = [];
    this._breadcrumb = new Stack();
  };
  /**
   * Navigate using the router
   * @param {string} where Where to go
   * @param {Object} options Any options to pass
   */
  navigate(where, options) {
    if (this._router && where) {
      return this._router.navigate(getPlace(where, options), { "trigger": true });
    } else {
      console.warn("Can't navigate to nowhere.");
    }
    return this;
  };
  /**
   * Launch using the router
   * @param {string} where Where to go
   * @param {Object} options Any options to pass
   */
  launch(where, options) {
    if (this._router && where) {
      return this._router.navigate(getPlace(where, options), { "trigger": false });
    } else {
      console.warn("Can't launch nowhere.");
    }
    return this;
  };

  /**
   * Redirect using the browser
   * @param {string} where Where to go
   */
  redirect(where) {
    if (where) {
      this.router.cleanup();
      window.location = where;
    } else {
      console.warn("Can't redirect to nowhere.");
    }
    return this;
  };

  /**
   * Initialize Event - adds any stylesheets registered
   */
  initialize() {
    if (this._stylesheets && this._stylesheets.length > 0) {
      this.attachStylesheets();
    }
    if (this._router) {
      this._router.startHistory();
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
