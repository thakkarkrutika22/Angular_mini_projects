import { Component, OnInit } from '@angular/core';
import { ROUTES, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';
import { SideNavComponent } from "./side-nav/side-nav.component";
import { HeaderComponent } from './header/header.component';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    RegisterComponent,
    LoginComponent,
    RouterModule,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  isLoggedIn$;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = this.authService.loggedIn$;
  }

  ngOnInit(): void {

    // Promises emits value once
    //Promises are eager, it will be called as soon as it is defined
    //Promises are not cancellable
    //Dont have any way to transform data
    const promise = new Promise(resolve =>{
      console.log("Promise called"); 
      setTimeout(()=>{
        resolve("Hey I am promise");
      }, 1000);
    });
    promise.then((res)=>{console.log(res)});
    
    //Observables can be cancelled anytime
// Observables emit values multiple times over time as stream
    //Observables are lazy it will not make a call unless and until there is someone to listen to it or subscribe to it.
//have many rxjs methods to transform data
    const observable = new Observable(sub=>{
      console.log("Observable called");
      setTimeout(()=>{
        sub.next("Observer complete");
      }, 1000);
    })
observable.subscribe(res=> console.log(res));

   
  }


}
