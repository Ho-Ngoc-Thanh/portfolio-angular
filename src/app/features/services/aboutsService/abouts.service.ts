import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutsService {
  constructor(private http: HttpClient) {}

  getPhoto(page:number): Observable<any> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=50`
    );
  }
}
