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
  @Input() type: string = 'new'; //new, reply, edit, 
  isLoggedIn: boolean = false;
  @Input() isActive: boolean = false;
  replyForm : FormGroup;


  constructor(private router: Router, public formBuilder: FormBuilder, private crudService: CrudService) { 
    this.replyForm = this.formBuilder.group({
      body: ['']
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

  async onSubmit() {

    console.log(this.replyForm.value.body)

    if (this.isLoggedIn && this.replyForm.value.body !== ''){
      const { _id, username} = JSON.parse(localStorage.session)
      console.log('loggedin')

      switch(this.type){
        case 'new':
          console.log('new')
              await this.crudService.CreatePost(_id, username, this.replyForm.value).subscribe(() => {
                console.log('Data added successfully'); 
              }, (err) => {
                console.log(err);
              });
              break;

        case 'edit':

        case 'reply': 
              await this.crudService.CreateReply(this.parentID, _id, username,  this.replyForm.value)
              .subscribe(() => {
                console.log('Data added successfully'); 
              }, (err) => {
                console.log(err);
              });
              break;

      }
      
        //page refresh
        this.router.navigateByUrl('/search', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
        })
        return;
      }
  }

}
  
