import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  @Input() user: any;
  @Output() selectUser = new EventEmitter<string>();
  btnStatus = false;
  // users = [
  //   { id: '1', name: 'John', isActive: true },
  //   { id: '2', name: 'Johnny', isActive: false },
  //   { id: '3', name: 'Kevin', isActive: true },
  // ];

  // users$ = of(this.users);


  random = 'yellow'; //property binding or state binding works with property. Attributes are default ones, []
  // [attr.data-test-id] -> custom attribute uses data in front.
  //  <input [style.color]="random" id="myInput" [(ngModel)]="userInput" (ngModelChange)="onInputChange()"/>
  userInput = ""

  onInputChange(){
    console.log(this.userInput)
  }

  ngOnInit(): void {
      const element = document.getElementById("myInput")
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }


  // selectedUser = this.users[2];

  // get imagePath(): string {
  //   return `users/${this.selectedUser.avatar}`;
  // }
}
