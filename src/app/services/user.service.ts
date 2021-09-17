import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  //
  private loginURI: string = `http://localhost:8000/login`;


  constructor(private client: HttpClient) { }

  logout(): User {
    return {
      id: '',
      firstname: '' ,
      lastname: 'String' ,
      username: 'String' ,
      password: 'String' ,
      email:  'String',
      role: 0,
      suspended: false,
      notification: [
         {
           description: '',
           link: '',
         },
      ],
    }
  }

  login(username: string, pw: string) : Observable<any> {
    console.log(this.loginURI)
    return this.client.get(`${this.loginURI}/${username}&${pw}`)
  }
}
