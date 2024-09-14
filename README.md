# Angular_mini_projects
This repository contains some mini angular components build from scratch.
# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



- Ng module : class that supplies configuration meta data
- root component app component
- view mate template , template will tell how to render component
- data binding - communication, dom manipulation, dynamic displaying content
- kai rite chale main.ts thi bootstrap thai
- The object passed to the @Component decorator is called the component's metadata. This includes the selector, template, and other properties described throughout this guide.
- any changes in angular.json file restart server, download bootstrap via cmd and include it or directly in index.html give cdn links link rel and script src tag
- Data binding:
Property binding []  - component to view 
String interpolation {{}} - component to view (string hoi to use this else use property binding)
Attribute binding [attr.data-eaa-as]
Event binding () - view to component (like clicking any event so write something in component when user performs event/action)
Two way binding [()] using ngModel (combo of property binding and event binding) (Forms module
/Users/krutika.thakkar/g/angular-app/src/app/user/user.component.html
- Directives: Components, Attributes (ngClass, ngStyle, etc) (change attribute of existing element), Structural(*ngIf, *ngFor, *ngSwitch) (add or remove dom elements structure)
[ngSwitch]="", *ngSwitchCase, *ngSwitchDefault
- template reference variable starts with #
- passing data - parent chiild communication
- Pipes: transform user input - built in pipes(uppercase,lowercase, titlecase,date,currency,percent, number) and custom pipes, behind scenes pipes are methods and can take args like this->{{user.dob | date: 'dd.mm.yyy',}} pipe chaining
** Custom pipe as pipe decorator, and implements PipeTransform interface and has transform method
- html pre tag to format json pipe
- Services & DI: passing data or sharing data to many other components, components can inject services(reference of service) and use it accross all components, services are singleton only one instance of service will be created which can be used across, services will be registered in providers array andinject kare ane DI kevay, constructor ae DI mate use thai angular ma kasu initialize karvu hoi to use ngOnInit
- Http error handling - 

Routing - ROuterModule and Routes class from angular/router, based on the url present in the url ,load the components

HttpErrorInterceptor: Catches HTTP errors globally and passes them to the NotificationService.
NotificationService: A centralized service for displaying toast messages, using libraries like ngx-toastr.
Global Registration: Register the interceptor and notification service in the AppModule to ensure they are available throughout your application.
Usage in Components: Inject the NotificationService into any component to show toast messages for various scenarios.
- Lifecycle hooks:
ngOnInit() initialization



Rxjs operators:
pipe: Use catchError within pipe to handle errors within the observable pipeline. You can choose to:

Handle the error and recover with a fallback value or observable.
Rethrow the error using throwError to allow it to be caught by the subscribe error callback.
subscribe: If an error is rethrown (or not caught) in catchError, it will be handled by the error callback in subscribe.
Same Errors, Different Stages of Handling
catchError: Allows you to handle errors early in the pipeline, before they propagate further.
subscribe: Acts as a final error handler, catching any errors that were not handled or were rethrown by catchError

Observables:
Observables are unicast (one to one) meaning each subscription to an observable creates a new execution path. Each observer (subscriber) gets its own independent execution of the observable.
operations like HTTP requests, where each subscription may result in a separate network call.

Rxjs Subject:
, where as subjects are multicast(one to many)
meaning they can have multiple observers and all observers share the same execution of the subject. When a subject emits a value, all subscribers receive the same value simultaneously.
 such as sharing the same counter value between parent and child components.

 subject.next(value) -> avu karisu tohj value madse kaik


behavior subject is a kind of subject only it will share same execution for all subscribers but major diff is it way it emits the value
Rxjs behavior Subject: it has initial value but subject will not have intial value
default value madse, kato last emitted value madse
ama .next call na kariye toh b value to madsej

Observables are unicast, meaning each subscriber gets its own independent execution and value stream.
Subjects are multicast, meaning all subscribers share the same execution and receive the same values simultaneously.
Use Case: When you need multiple components (like a parent and child) to share the same data and stay in sync, subjects (or specifically BehaviorSubject if you want to hold the current value) are the ideal choice.


//counter no example che
// one more example is: ek component che contact, ema input box ma I am feeding contact num and sending to my service
now that service will take it and show it on top as a notification and aa method internally data pass karse mara subject ne---and service ma next karisu to value agad pass thase and subscribe karisu to read thase value

//ViewChild and ViewChildren
<div id ="container"></div>
document.getElementById('container').innerHtml = '' //dom manipulation
@ViewChild ('container') op: ElementRef; //htm element no reference joie che componet ma, aa use thai che same component ma and child ma b
@ViewChildren('container) op: QueryList<>
@ViewChild('kasi hash value') child: ChildComponent -> child nu kasu parent ma batau hoi to use thai

@ContentChild and @COntentChildren

content projection using ng-content means passing html from parent to child

http interceptors - change the value of request,modify request headers, body response , set tokens, http errors