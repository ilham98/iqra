import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  title = 'Tour of Heroes';
  books;
  url = environment.apiUrl;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${this.url}/api/books`)
      .subscribe(data => {
        this.books = data;
      })
  }

}
