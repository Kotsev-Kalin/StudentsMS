import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8080/api/v1/users';


  constructor (
    private http: HttpClient
  ) {}

  createUser(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }
}
