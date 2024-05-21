import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-addeditbook',
  templateUrl: './addeditbook.component.html',
  styleUrls: ['./addeditbook.component.scss']
})
export class AddeditbookComponent implements OnInit {
  @Input() sendata;
  bookCatList:any;
  authorList:any;
  book: any = {};
  bookData: any = {};
  bookList: any;
  strWarning: any;
  constructor(private commonService: CommonService, public model: NgbActiveModal, public sharedService: SharedService) { }
  ngOnInit(): void {
    if (this.sendata) {
      this.book.bookname = this.sendata.bookname;
      this.book.price = this.sendata.price;
      this.book.author = this.sendata.author;
      this.book.type = this.sendata.type;
      this.book.image = this.sendata.image;
    }
    this.getBookCat();
    this.getAuthor();
  }
  onFileSelected(event: any) {
    this.bookData.file = event.target.files[0];
  }
  closeModel() {
    this.model.close();
  }
  Submit() {
    let strWarning = '';
    if (!this.book.bookname) {
      strWarning += '- Please enter bookname <br/>';
    }
    if (!this.book.price) {
      strWarning += '- Please enter price <br/>';
    }
    if (!this.book.author) {
      strWarning += '- Please enter author <br/>';
    }
    if (!this.book.type) {
      strWarning += '- Please enter BookCatgories <br/>';
    }
    if (!this.sendata) {
      if (!this.book.image) {
        strWarning += '- Select enter Image <br/>';
      }
    }
    if (strWarning !== '') {
      return this.sharedService.showToastr(1, strWarning);
    }
    let formdata = new FormData();
    formdata.append('image', this.bookData.file ? this.bookData.file : '');
    if (this.sendata) {
      this.book.originalFileName = this.sendata.imageUrl;
      this.book.id = this.sendata._id;
    }
    formdata.append('bookData', JSON.stringify(this.book));
    if (!this.sendata) {
      this.commonService.getBookInsert(formdata).subscribe(e => {
        if (e.code == 0) {
          this.sharedService.showToastr(0, e.returnMessage);
          this.model.close(true);
        }
      })
    } else {
      this.commonService.getBookUpdate(formdata).subscribe(e=>{
        if(e.code == 0){
          this.sharedService.showToastr(0, e.returnMessage);
          this.model.close(true);
        }
      })
    }

  }
  getBookCat() {
    this.commonService.getBooksCatgeries().subscribe(e => {
      if (e.code === 0) {
        this.bookCatList = e.data;
        this.sharedService.totalbookCat = this.bookCatList.length;
      }
    })
  }
  getAuthor() {
    this.commonService.getAuthors().subscribe(e => {
      if (e.code === 0) {
        this.authorList = e.data;
        this.sharedService.totalauthor = this.authorList.length;
      }
    })
  }
}
