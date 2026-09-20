# ShellHost

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.24.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Notes for Creating a single spa host.

1. Start with index.html and import the map and register mfes
2. In html of root application (app.html) identify the dom nodes to mount/unmount the mfe.

```md
onclick="singleSpaNavigate(event)": A global helper provided by Single-SPA. When clicked, it intercepts the link click, prevents a full browser page refresh, updates the URL bar to /drivers, and triggers Single-SPA to check which app should mount.

div id="single-spa-application:@hub/...": These HTML container <div> elements act as viewport targets. Single-SPA looks for these specific element IDs to inject and mount the DOM elements rendered by each child MFE
```

3. Then in shell app.ts file register MFE using the name, app (this is for lazy loading the app from localhost as in index.html), activeWhen is for mount and unmount functionality, customProps for shared data
4. Start() boots up single psa and start listening to browser url changes