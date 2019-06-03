# presentation-application

Augmented.js Presentation Application Module

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Application](#application)
    -   [Parameters](#parameters)
    -   [navigate](#navigate)
        -   [Parameters](#parameters-1)
    -   [launch](#launch)
        -   [Parameters](#parameters-2)
    -   [redirect](#redirect)
        -   [Parameters](#parameters-3)
    -   [initialize](#initialize)
    -   [router](#router)
    -   [registerMediator](#registermediator)
        -   [Parameters](#parameters-4)
    -   [deregisterMediator](#deregistermediator)
        -   [Parameters](#parameters-5)
    -   [mediators](#mediators)
        -   [Properties](#properties)
    -   [registerStylesheet](#registerstylesheet)
        -   [Parameters](#parameters-6)
    -   [deregisterStylesheet](#deregisterstylesheet)
        -   [Parameters](#parameters-7)
    -   [attachStylesheets](#attachstylesheets)
    -   [replaceStylesheets](#replacestylesheets)
    -   [stylesheets](#stylesheets)
        -   [Properties](#properties-1)
    -   [setCurrentBreadcrumb](#setcurrentbreadcrumb)
        -   [Parameters](#parameters-8)
    -   [getCurrentBreadcrumb](#getcurrentbreadcrumb)
    -   [breadcrumbs](#breadcrumbs)
        -   [Properties](#properties-2)
    -   [title](#title)
        -   [Properties](#properties-3)

## Application

**Extends Augmented.Application**

Presentation Application - extension of Augmented.Application&lt;/br/>
Add registration of mediators to the application, breadcrumbs, and stylesheet registration
The Application is a container for the 'app'. This allows control of the flow application init, routing, and starting.
Applications can include API to add app-globals like datastores, and mediators.
Applications contain a few built-in items:

<ul>
<li>A start method to kick off your application (stop as well).</li>
<li>A router property</li>
<li>mediator registration</li>
<li>stylesheets</li>
<li>breadcrumbs for tracking navigations</li>
</ul>

### Parameters

-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Options to pass

### navigate

Navigate using the router

#### Parameters

-   `where` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Where to go
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### launch

Launch using the router

#### Parameters

-   `where` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Where to go
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Any options to pass

### redirect

Redirect using the browser

#### Parameters

-   `where` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Where to go

### initialize

Initialize Event - adds any stylesheets registered

### router

The router property of the application

### registerMediator

Register a Mediator

#### Parameters

-   `mediator` **Mediator** The mediator to register

### deregisterMediator

Deregister a Mediator

#### Parameters

-   `mediator` **Mediator** The mediator to deregister

### mediators

All Mediators

#### Properties

-   `mediators` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** all Mediators

### registerStylesheet

Register a stylesheet

#### Parameters

-   `s`  
-   `stylesheet` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URI of the stylesheet

### deregisterStylesheet

Deregister a stylesheet

#### Parameters

-   `s`  
-   `stylesheet` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** URI of the stylesheet

### attachStylesheets

Attach registered stylesheets to the DOM

### replaceStylesheets

Replace stylesheets then attach registered stylesheets to the DOM

### stylesheets

All Stylesheets

#### Properties

-   `stylesheets` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** all stylesheets

### setCurrentBreadcrumb

Sets the current breadcrumb

#### Parameters

-   `uri` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The URI of the breadcrumb
-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** The name of the breadcrumb

### getCurrentBreadcrumb

Gets the current breadcrumb

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Returns the current breadcrumb

### breadcrumbs

The breadcrumbs

#### Properties

-   `breadcrumbs` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** alls the breadcrumbs

### title

The Window title

#### Properties

-   `title` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** title of the window
