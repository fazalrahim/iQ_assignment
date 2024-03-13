
# Information
   We can create new components, service, modules with routing, environments by using commands like 
    ng g c <component_name> 
    ng g s <service_name>
    ng g m <module_name> -- routing
    ng g environments

    By follow this practice, we will have the .spec.ts file in which we can write the Unit test.  

    Further more, I enable the tree-shaking to get the better 
    performance. Those services, model files which are unused
    will be discard from production build.

# tsConfig.json

To learn more about this file see: https://angular.io/config/tsconfig.
It's a root file in which we can set some rules as per our need like baseURL, Compiler option 
For Reference : 'https://www.typescriptlang.org/tsconfig#paths'


# IqAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
