/*
    TODO:
      This will be responsible for loading the timeline. 
      Can we load X numbe rof posts initially and scroll
        further to fetch more posts? Will allow app to be
        more efficient and responsive
*/

import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-load-posts',
  templateUrl: './load-posts.component.html',
  styleUrls: ['./load-posts.component.css']
})
export class LoadPostsComponent implements OnInit {
  OpenPosts:any = []

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.GetAllOpenPosts().subscribe(res => {
      this.OpenPosts = res;
    })
  }
}
