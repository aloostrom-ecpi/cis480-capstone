import { Injectable } from '@angular/core';
import { Census } from './Census';
import { ClosedPost, 
  Contractors, 
  OpenPosts, 
  ReportedPosts, 
  Reviews, 
  User } from './crud.classes';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';

 
@Injectable({
  providedIn: 'root'
})
 
export class CrudService {
 
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient, private userService: UserService) { }
 
  // Get all census
  GetAllCensus() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  GetAllOpenPosts() {
    return this.httpClient.get(`${this.REST_API}/open-posts`);
  }

  GetChildPosts(parentID : string) {
    return this.httpClient.get(`${this.REST_API}/child-posts/${parentID}`)
  }

  DeletePost(id: string) {
    this.httpClient.delete(`${this.REST_API}/remove-post/${id}`, {headers: this.httpHeaders}).subscribe()
  }

  Search(field: string, query: string) {
    console.log(`${this.REST_API}/search/${field}/${query}`)
    return this.httpClient.get(`${this.REST_API}/search/${field}/${query}`);
  }

  GetUserAccount(username: any): Observable<any> {
    let API_URL = `${this.REST_API}/load-account/${username}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
 
  //Get a single census
  GetCensus(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/read-census/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  // Update
  updateCensus(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-census/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  //Add
  AddCensus(data: Census): Observable<any> {
    let API_URL = `${this.REST_API}/add-census`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

//Delete
  RemoveCensus(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/remove-census/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }


  /*
   * Dont modify this so we can troubleshoot errors we come across
   *   related to CRUD ops on Mongo
   */
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
