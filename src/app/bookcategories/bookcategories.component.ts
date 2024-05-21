import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../services/common.service';
import { AddeditbookcategoriesComponent } from './addeditbookcategories/addeditbookcategories.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-bookcategories',
  templateUrl: './bookcategories.component.html',
  styleUrls: ['./bookcategories.component.scss']
})
export class BookcategoriesComponent implements OnInit {
  bookCatList: any;
  constructor(public model: NgbModal, private commonService: CommonService, public sharedService: SharedService) { }
  ngOnInit(): void {
    this.sharedService.getBookCat();
  }
  openBookCategoriesModel(item?: any) {
    const modal = this.model.open(AddeditbookcategoriesComponent, {
      size: 'md'
    });
    modal.componentInstance.sendata = item;
    modal.result.then(e => {
      if (e) {
        this.sharedService.getBookCat(); 
      }
    })
  }

  getDeletebookCat(id) {
    this.commonService.getBookCatgeriesDelete(id).subscribe(e => {
      if (e.code === 0) {
        this.sharedService.showToastr(0, e.returnMessage);
        this.sharedService.getBookCat();
      }
    })
  }
}
