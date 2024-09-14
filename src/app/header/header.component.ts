import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserComponent, CommonModule, TasksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedUserId: any;
  selectedUser?: { id: string, name: string, avatar: string};
  selectedUserName: any;
  users = [
    {
      id: 'u1',
      name: 'Jasmine Washington',
      avatar: 'user-1.jpg',
    },
    {
      id: 'u2',
      name: 'Emily Thompson',
      avatar: 'user-2.jpg',
    },
    {
      id: 'u3',
      name: 'Marcus Johnson',
      avatar: 'user-3.jpg',
    },
    {
      id: 'u4',
      name: 'David Miller',
      avatar: 'user-4.jpg',
    },
    {
      id: 'u5',
      name: 'Priya Patel',
      avatar: 'user-5.jpg',
    },
    {
      id: 'u6',
      name: 'Arjun Singh',
      avatar: 'user-6.jpg',
    },
  ];

  onSelectUser(id: any) {
    console.log("clicked");
    this.selectedUserId = id;
    this.selectedUser = this.users.find(user=> user.id === this.selectedUserId);
    this.selectedUserName = this.selectedUser?.name;
  }
}
