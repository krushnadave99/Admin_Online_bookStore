import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-addeditbookcategories',
  templateUrl: './addeditbookcategories.component.html',
  styleUrls: ['./addeditbookcategories.component.scss']
})
export class AddeditbookcategoriesComponent implements OnInit {
  @Input() sendata;
  bookCategories: any = {};
  bookCat: any = {};
  constructor(public model: NgbActiveModal, public sharedService: SharedService, private commonService: CommonService) { }

  ngOnInit(): void {
    console.log(this.sendata);
    if (this.sendata) {
      this.bookCategories.type = this.sendata.type;
      this.bookCategories.price = this.sendata.price;
      this.bookCategories.author = this.sendata.author;
      this.bookCategories.image = this.sendata.image;
    }
  }
  onFileSelected(event: any) {
    this.bookCat.file = event.target.files[0];
  }
  closeModel() {
    this.model.close();
  }
  Submit() {
    let strWarning = '';
    if (!this.bookCategories.type) {
      strWarning += '- Please enter BookCatgories <br/>';
    }
    if (strWarning !== '') {
      return this.sharedService.showToastr(1, strWarning);
    }
    if (!this.sendata) {
      this.commonService.getBookCatgeriesInsert(this.bookCategories).subscribe(ele => {
        if (ele.code === 0) {
          this.sharedService.showToastr(0, ele.returnMessage);
          this.model.close(true);
        }
      })
    }
    else {
      this.commonService.getBookCatgeriesUpdate(this.bookCategories).subscribe(e => {
        if (e.code === 0) {
          this.sharedService.showToastr(0, e.returnMessage);
          this.model.close(true);
        }
      })
    }

  }
  removeImage() {

  }
}
