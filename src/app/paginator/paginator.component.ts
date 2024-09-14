import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
      this.getAll();
  }

  items: any[] = [];
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'; // Public API endpoint
  paginatedItems: any[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 15;

  firstPage() {
    this.currentPage = 1;
    this.paginateItems();
  }

  paginateItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedItems = this.items.slice(startIndex, endIndex);
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.paginateItems();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateItems();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateItems();
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.paginateItems();
  }

  getAll() {
    return this.getUser().subscribe(res => {
      console.log(res);
      this.items = res;
      this.totalItems = this.items.length;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      this.paginateItems();
    });
  }

  getUser() { //in service 
    return this.http.get<any[]>(this.baseUrl);
  }

  get pageNumbers(): number[] {
    return [...Array(this.totalPages).keys()].map(i => i + 1);
  }

}
