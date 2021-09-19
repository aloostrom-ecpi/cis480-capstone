import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  private loginURI: string = `http://localhost:8000/api`;
  data!: any;



  constructor(private client: HttpClient) { }

  logout() {
  }

   login(username: string, pw: string) : Observable <any> {

    //get user data from db and pass on to this.data
    return this.client.get(`${this.loginURI}/authenticate/contractor/${username}&${pw}`);
  }
}
