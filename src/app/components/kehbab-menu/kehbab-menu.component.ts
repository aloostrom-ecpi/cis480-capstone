import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-kehbab-menu',
  templateUrl: './kehbab-menu.component.html',
  styleUrls: ['./kehbab-menu.component.css']
})
export class KehbabMenuComponent implements OnInit {
  @Input() id: string = '';

  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit( ): void {
  }

  async removePost() {
    //delete
    await this.crudService.DeletePost(this.id);

    //refresh home
    await this.router.navigateByUrl('/search', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
     }); 
  }

}
