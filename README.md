# Angular Base

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Summary

This is the base [Use All Five](https://useallfive.com/) Angular setup. It features a more intuitive directory structure, configuration files for [Netlify](https://www.netlify.com/), routing, scss support, a staging environment file, default metadata in index.html and more. 

## Installation

To get started, simply clone this repo and update the remote origin URL.

```
git clone https://github.com/UseAllFive/angular-base.git
git remote set-url origin https://github.com/{my-git-username}/{my-git-repo}.git
```

## To update

If Angular Base updates and you'd like these updates to applied to your project, add a remote pointing to here and `pull` in `master`.

```
git remote add upstream https://github.com/UseAllFive/angular-base.git
git pull upstream master
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
 
### Staging
In order to package your project up using the `staging` environment file, run `npm run stage`. All files will be exported into the `dist` directory.

### Production
In order to package your project up using the `production` environment file, run `npm run prod`. All files will be exported into the `dist` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Directory Structure

```
.
├── README.md
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── netlify.toml <- netlify configuration for branch deploys
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── _headers <- netlify configuration for optional headers
│   ├── _redirects <- netlify configuration for single page application
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── base <- parent for all components
│   │   │   │   ├── base.component.html
│   │   │   │   ├── base.component.scss
│   │   │   │   ├── base.component.spec.ts
│   │   │   │   └── base.component.ts
│   │   │   └── page <- dynamic page component
│   │   │       ├── page.component.html
│   │   │       ├── page.component.scss
│   │   │       ├── page.component.spec.ts
│   │   │       └── page.component.ts
│   │   ├── guards <- suggested structure
│   │   ├── interfaces <- suggested structure
│   │   └── services <- suggested structure
│   ├── assets
│   │   └── scss
│   │       ├── _colors.scss
│   │       ├── _grid.scss
│   │       └── _shared.scss <- all scss compiled here
│   ├── environments
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   │   └── environment.staging.ts <- staging options
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
