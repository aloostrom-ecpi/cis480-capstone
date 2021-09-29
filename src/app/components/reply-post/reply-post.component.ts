/*
    TODO:
      any user can reply to any post
      will be similar to create-post
      accept two params at least
        this.post.id
        this.user.id
      set parentPost as the Id of the parent post so we can track conversations
*/

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() type: string = 'new'; //value = new, reply, edit
  @Input() postID: string = '';
  @Output() editMode = new EventEmitter;
  replyForm : FormGroup; 

  //stat checks
  @Input() isActive: boolean = false;
  isLoggedIn: boolean = false;


  constructor(private router: Router, public formBuilder: FormBuilder, private crudService: CrudService) { 
    this.replyForm = this.formBuilder.group({
      body: ['']
    }) //formcontrols need their values to be manually set using patch values so <textarea>content</textarea> will not work.
  }

  ngOnInit(): void {
    if (localStorage.session) {
      this.isLoggedIn = true;
    }

  }

  activate(){
    this.isActive = !this.isActive;
    this.disableEdit();
  }

  //Adjust height function. Makes textarea expand when user is typing instead of having a scrollbar.
  adjustHt(dom: any) {
    dom.style.height = "";
    dom.style.height = Math.min(dom.scrollHeight, 300) + "px";
  }

  async onSubmit() {

    console.log(this.replyForm.value.body)

    if (this.isLoggedIn && this.replyForm.value.body !== ''){
      const { _id, username} = JSON.parse(localStorage.session)

      switch(this.type){
        case 'new':
              await this.crudService.CreatePost(_id, username, this.replyForm.value).subscribe(() => {
                console.log('Data added successfully'); 
              }, (err) => {
                console.log(err);
              });
              break;

        case 'edit':
              await this.crudService.EditPost(this.postID, this.replyForm.value).subscribe(() => {
                console.log('this.postID updated successfully'); 
              }, (err) => {
                console.log(err);
              });
              break;

        case 'reply': 
              await this.crudService.CreateReply(this.parentID, _id, username,  this.replyForm.value)
              .subscribe(() => {
                console.log('Data added successfully'); 
              }, (err) => {
                console.log(err);
              });
              break;

      }

        this.disableEdit();
        console.log('edit mode is ' + false)
      
        //page refresh
        this.router.navigateByUrl('/search', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
        })
        return;
      }
  }

  disableEdit() {
    this.editMode.emit(false);
    console.log('edit mode is ' + false)
  }

}
  
