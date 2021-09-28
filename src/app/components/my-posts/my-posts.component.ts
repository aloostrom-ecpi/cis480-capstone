/*
    TODO:
      accept a single param to take this.user.id
      expect to be a dedicated page similar to viewing your Facebook
        posts or Twitter timeline
      Do we want to hold onto sticky columns for this or only show posts?
*/

import { Component, OnInit, NgZone } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  MyPosts:any = []

  constructor(
    private crudService: CrudService,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem("session") == null){
      this.ngZone.run(() => this.router.navigateByUrl('login-user'));
    } else {
      const {username} = JSON.parse(localStorage.session)
      this.crudService.GetOpenPostsForUser(username).subscribe(res => {
        this.MyPosts = res;
      })
    }
  }
}
