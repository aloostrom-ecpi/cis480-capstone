import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { UserService } from 'src/app/service/user.service';

/* 
TODO:
  -Work on dead links
*/

@Component({
  selector: 'app-kehbab-menu',
  templateUrl: './kehbab-menu.component.html',
  styleUrls: ['./kehbab-menu.component.css']
})
export class KehbabMenuComponent implements OnInit {
  @Input() postID: string = '';
  @Input() authorID: string = '';
  @Output() editMode = new EventEmitter;
  isAuthorized: boolean = false;
  isLoggedIn: boolean = false;
  private session = localStorage.session;
  public sessionID = localStorage.session ? JSON.parse(localStorage.session)._id : '';

  constructor(private router: Router, private crudService: CrudService, private userService: UserService) { }

  ngOnInit(): void {

    //if user is loggedin, check authority on post
    if (this.session) {
      this.isAuthorized = JSON.parse(localStorage["session"])._id === this.authorID ? true : false;
      if (!JSON.parse(localStorage.isContractor)) this.userService.getActiveUserRole().subscribe(role => { if (role === 2) this.isAuthorized = true });
      this.isLoggedIn = true;
    }

  }

  async removePost() {
    if (this.isAuthorized){
      await this.crudService.DeletePost(this.postID);

      //refresh home
      await this.router.navigateByUrl('/search', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
    });
    }
  }

  async enableEdit() {
    this.editMode.emit(true);
    console.log(`edit mode enabled`)
  }

}
