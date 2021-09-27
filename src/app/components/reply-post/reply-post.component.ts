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
  @ViewChild('textarea') textarea: any;

  constructor() { }

  ngOnInit(): void {

    //TODO - detect on change for textarea
    this.textarea.onchange = {}
  }

  activate(){
    this.isActive = !this.isActive;
  }

  adjustHt(dom: any) {
    dom.style.height = "";
    dom.style.height = Math.min(dom.scrollHeight, 300) + "px";
  }

  

}
