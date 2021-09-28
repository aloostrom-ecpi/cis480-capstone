import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-load-sub-posts',
  templateUrl: './load-sub-posts.component.html',
  styleUrls: ['./load-sub-posts.component.css']
})
export class LoadSubPostsComponent implements OnInit {
  @Input() parentID: string = '';
  posts: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetChildPosts(this.parentID).subscribe(data => this.posts = data)
  }



}
