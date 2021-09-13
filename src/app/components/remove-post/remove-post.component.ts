/*
    TODO: 
      user can remove own post
      admin can remove any post
      expect 2 params?
        this.user.id
        this.post.id
      Do we want this to actually delete or hide posts?
        where does this action make the most sense in our datamodel?
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-post',
  templateUrl: './remove-post.component.html',
  styleUrls: ['./remove-post.component.css']
})
export class RemovePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
