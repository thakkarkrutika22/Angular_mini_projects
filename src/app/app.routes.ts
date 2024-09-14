import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TakeATourComponent } from './take-a-tour/take-a-tour.component';
import { HeaderComponent } from './header/header.component';
import { StepperComponent } from './stepper/stepper.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
   // canActivate: [authGuard],
    data: { roles: ['Admin', 'SuperAdmin'] }
  },
  {
    path: 'paginator',
    component: PaginatorComponent
  },
  {
    path:'side-nav',
    component: SideNavComponent
  },
  {
    path: 'todo',
    component: TodoFormComponent
  },
  {
    path: 'tour',
    component: TakeATourComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'about-us',
    component: AboutusComponent,
    canActivate: [authGuard],
    data: { roles: ['SuperAdmin'] }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
