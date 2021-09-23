import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-kehbab-menu',
  templateUrl: './kehbab-menu.component.html',
  styleUrls: ['./kehbab-menu.component.css']
})
export class KehbabMenuComponent implements OnInit {
  @Input() postID: string = '';
  @Input() authorID: string = '';
  isAuthorized: boolean = false;
  private session = localStorage.session;

  constructor(private router: Router, private crudService: CrudService, private userService: UserService) { }

  ngOnInit(): void {

    //if user is loggedin, check authority on post
    if (this.session) {
      this.isAuthorized = JSON.parse(localStorage["session"])._id === this.authorID ? true : false;
      this.userService.getActiveUserRole().subscribe(role => { if (role === 2) this.isAuthorized = true })
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

}
