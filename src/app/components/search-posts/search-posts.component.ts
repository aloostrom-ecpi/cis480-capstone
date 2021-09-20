/*
    Present a simple search form to the user
    User will be able to put their search terms into
      attributes we have already defined
    Imagine that a foreach would be the easiest way to do this if we can
      map the attribute to the mongo collection props
    Do we need to revise load posts so we can recycle it here after the 
      search results are returned?
*/

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/crud.classes';
import { UserService } from 'src/app/service/user.service';
import { ContractorService } from 'src/app/service/contractor.service';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements OnInit {

  constructor(private userService : UserService, private contractorService : ContractorService) { }

  ngOnInit(): void {
    this.userService.getActiveUserRole();
  }

}
