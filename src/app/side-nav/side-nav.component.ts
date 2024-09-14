import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

// do not modify
type MenuItem = {
  title: string;
  subItems?: string[];
};

// do not modify
type MenuConfig = MenuItem[];

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  ngOnInit(): void {
      
  }
//  @Input() menuConfig: MenuConfig;
  uniqueItems = new Set<string>();

  handleExpand(title: string) {
    if (this.uniqueItems.has(title)) {
      this.uniqueItems.delete(title);
    } else {
      this.uniqueItems.add(title);
    }
  }
}
