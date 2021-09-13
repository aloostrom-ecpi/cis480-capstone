/*
    TODO:
      This will be responsible for loading the timeline. 
      Can we load X numbe rof posts initially and scroll
        further to fetch more posts? Will allow app to be
        more efficient and responsive
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-posts',
  templateUrl: './load-posts.component.html',
  styleUrls: ['./load-posts.component.css']
})
export class LoadPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
