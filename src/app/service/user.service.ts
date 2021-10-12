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

   login(data: any) : Observable <any> {

    //get user data from db and pass on to this.data
    return this.client.post(`${this.loginURI}/authenticate/user`, data);
  }
  
  //would we need this?
  /* 
  getID(username: string): string {
    return this.data._id
  } 
  */

  getFirstName(id: string): string {
    return this.data.firstname;
  }

  getLastName(id: string): string {
    return this.data.lastname;
  }

  getUserName(id: string): Observable<any> {
    return this.client.get(`${this.loginURI}/user/username/${id}`)
  }

  getActiveUserRole() : Observable<any> {
      const {_id} = JSON.parse(localStorage.session)
      return this.client.get(`${this.loginURI}/user/role/${_id}`)
  }

  getNotifications(id: string): Array<{}> {
    return this.data.notification;
  }

  suspendUser(id: string) : void {
    if (this.data.role === 2) {
      //suspend id
    }
  }
}
