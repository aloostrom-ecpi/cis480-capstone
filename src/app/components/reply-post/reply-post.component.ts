/*
    TODO:
      any user can reply to any post
      will be similar to create-post
      accept two params at least
        this.post.id
        this.user.id
      set parentPost as the Id of the parent post so we can track conversations
*/

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reply-post',
  templateUrl: './reply-post.component.html',
  styleUrls: ['./reply-post.component.css']
})
export class ReplyPostComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  activate(){
    this.isActive = !this.isActive;
  }

  //Adjust height function. Makes textarea expand when user is typing instead of having a scrollbar.
  adjustHt(dom: any) {
    dom.style.height = "";
    dom.style.height = Math.min(dom.scrollHeight, 300) + "px";
  }

  

}
