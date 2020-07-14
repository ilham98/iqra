import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  title = 'Tour of Heroes';
  books;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1/api/books')
      .subscribe(data => {
        this.books = data;
      })
  }

}