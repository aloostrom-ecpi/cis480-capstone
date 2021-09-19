import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  private loginURI: string = `http://localhost:8000/api`;
  data!: any;

  constructor(private client: HttpClient) { }

  logout() {
    this.data = {
      id: '',
      firstname: '' ,
      lastname: '' ,
      username: '' ,
      password: '' ,
      email:  '',
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

   login(username: string, pw: string) : Observable <any> {

    //get user data from db and pass on to this.data
    return this.client.get(`${this.loginURI}/authenticate/user/${username}&${pw}`);
  }
  
  getID(): string {
    return this.data._id
  }

  getFirstName(): string {
    return this.data.firstname;
  }

  getLastName(): string {
    return this.data.lastname;
  }

  getUserName(): string {
    return this.data.username;
  }

  getNotifications(): Array<{}> {
    return this.data.notification;
  }

  suspendUser(id: string){
    if (this.data.role === 2) {

    }
  }





  
}
