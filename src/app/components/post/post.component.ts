import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { UserService } from 'src/app/service/user.service';
import { ContractorService } from 'src/app/service/contractor.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:any;
  @Input() isSubPost: boolean = false;
  editMode: boolean = false;
  username: string = '';
  date:string = "";
  
  constructor(private crudService: CrudService, private userService: UserService, private contractorService: ContractorService) { }

  ngOnInit(): void {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(this.post.postDate)

    this.date = `Posted: ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

  }

  toggleEdit(value: boolean) {
    this.editMode = value;
  }

}
