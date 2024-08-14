import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/dev';
import { CreateNewPost, GetDataPosts } from '../../inter-faces/home-inter-face';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = environment.BE_URL;
  constructor(private http: HttpClient) {}

  getPost(params: GetDataPosts): Observable<any> {
    const { page = 1, pageSize = 10, keyword = '' } = params;
    return this.http.get(
      `${this.baseUrl}posts?title_like=${keyword}&_page=${page}&_limit=${pageSize}`
    );
  }
  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}posts?id=${id}`);
  }
  createPost(data: CreateNewPost): Observable<any> {
    return this.http.post(`${this.baseUrl}posts`, data);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}posts/${id}`);
  }
}
