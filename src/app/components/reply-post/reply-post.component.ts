/*
    TODO:
      any user can reply to any post
      will be similar to create-post
      accept two params at least
        this.post.id
        this.user.id
      set parentPost as the Id of the parent post so we can track conversations
*/

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-reply-post',
  templateUrl: './reply-post.component.html',
  styleUrls: ['./reply-post.component.css']
})
export class ReplyPostComponent implements OnInit {

@Input() parentID: string = '';
  isLoggedIn: boolean = false;
  isActive: boolean = false;
  replyForm : FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder, private crudService: CrudService) { 
    this.replyForm = this.formBuilder.group({
      reply: ['']
    })
  }

  ngOnInit(): void {
    if (localStorage.session) {
      this.isLoggedIn = true;
    }

  }

  activate(){
    this.isActive = !this.isActive;
  }

  //Adjust height function. Makes textarea expand when user is typing instead of having a scrollbar.
  adjustHt(dom: any) {
    dom.style.height = "";
    dom.style.height = Math.min(dom.scrollHeight, 300) + "px";
  }

  onSubmit() {

    //if logged in
    if (localStorage.session){
      const authorID = JSON.parse(localStorage.session)._id

    this.crudService.CreateReply(this.parentID, authorID, this.replyForm.value)
    .subscribe(() => {
      console.log('Data added successfully'); 
      //this.router.navigateByUrl('/');
    }, (err) => {
      console.log(err);
    });
  }
  }
  

}
