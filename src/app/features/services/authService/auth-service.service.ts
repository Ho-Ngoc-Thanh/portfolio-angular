import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private baseUrl = environment.BE_URL;
  private roleAccount: string = '';
  constructor(private http: HttpClient) {}

  getUser({
    account,
    password,
  }: {
    account: string;
    password: string;
  }): Observable<any> {
    return this.http.get(
      `${this.baseUrl}users?account=${account}&password=${password}`
    );
  }

  public set setRole(v: string) {
    this.roleAccount = v;
  }

  public get getRole(): string {
    return this.roleAccount;
  }
}
