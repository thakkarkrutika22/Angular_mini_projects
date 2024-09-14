import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { PaginatorComponent } from '../../paginator/paginator.component';
import { Subscription, interval } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { CounterComponent } from "../../counter/counter.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HttpClientModule, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
intervalSubscription!: Subscription;
count: number = 0;


  constructor(private router: Router, private http: HttpClient,
    private authService: AuthService
  ) {

  }

  ngOnDestroy(): void {
      this.intervalSubscription.unsubscribe();
  }

  // ngOnInit(): void {
  //   this.intervalSubscription = interval(1000).subscribe(count=>{
  //     console.log(count);
  //   })
  // }

  ngOnInit(): void {
   
  }

  clear() {
    this.authService.clear();
  //  this.router.navigateByUrl(['/login'],{ replaceUrl: true });
    this.router.navigate(['/login'], { replaceUrl: true });

  }

  handleCountChange(newCount: number) {
    this.count = newCount;
  }




 
}
