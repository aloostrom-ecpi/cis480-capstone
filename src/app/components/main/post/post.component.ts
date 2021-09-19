import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  OpenPosts:any = [];
  
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetAllOpenPosts().subscribe(res => {
      console.log(res)
      this.OpenPosts = res;
    })
  }
}
