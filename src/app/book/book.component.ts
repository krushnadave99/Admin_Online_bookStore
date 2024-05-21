import { Component, OnInit } from '@angular/core';

import { AddeditbookComponent } from './addeditbook/addeditbook.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../services/common.service';
import { environment } from 'src/environments/environment';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList:any;
 
  constructor(public model:NgbModal,private commonService: CommonService,public sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.getbooks();
  }
  openBookModel(item?:any){
    const modal =this.model.open(AddeditbookComponent,{
    });
    modal.componentInstance.sendata = item;
    modal.result.then(x => {
      if (x) {
        this.sharedService.getbooks();
      }
    })
  }

  getDeletebook(id){
    this.commonService.getBookDelete(id).subscribe(e=>{
      if(e.code == 0){
        this.sharedService.showToastr(0, e.returnMessage);
        this.sharedService.getbooks();
      }
    })
  }
}
