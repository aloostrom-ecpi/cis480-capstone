import { Injectable } from '@angular/core';
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
  CONTRACTOR_API: string = 'http://localhost:8000/contractors';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient, private userService: UserService) { }
 

  CreateReply(parentID: string, authorID: string, username: string, data: any) {
    return this.httpClient.post(`${this.REST_API}/reply/${parentID}-${authorID}-${username}`, data)
  }

  CreatePost(authorID: string, username: string, data: any){
    return this.httpClient.post(`${this.REST_API}/new-post/${authorID}-${username}`, data)
  }

  EditPost(id: string, data: any) {
    return this.httpClient.put(`${this.REST_API}/edit-post/${id}`, data);
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

  //get OpenPosts for a username
  GetOpenPostsForUser(username: any): Observable<any> {
    let API_URL = `${this.REST_API}/open-posts/${username}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
    .pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError)
    )
  }
 
  //Add user -- ty adams
  AddUser(data:any) {
    let API_URL = `${this.REST_API}/user`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  AddContractor(data:any) {
    let API_URL = `${this.CONTRACTOR_API}/register`;
    return this.httpClient.post(API_URL, data)
      .pipe(
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
