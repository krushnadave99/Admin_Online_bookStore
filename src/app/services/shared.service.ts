import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { CommonService } from './common.service';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isLoginUser: any;
  totalbook: any;
  totalbookCat: any;
  totalblog: any;
  totalinquiry: any;
  totalpayment: any;
  totalauthor: any;
  authorList: any;
  blogList: any;
  bookList: any;
  bookCatList: any;
  conatctUsList:any;
  paymentList:any;
  baseUrl = environment.baseurl
  constructor(private toastr: ToastrService, public commonService: CommonService) {
  }
  showToastr(responseCode: number, message: string, enableHtml: boolean = true) {
    const toastSetting: Partial<IndividualConfig> = {
      progressBar: true,
      closeButton: false,
      enableHtml,
      // disableTimeOut: true,
      timeOut: 5000,
    };
    if (responseCode === 0) {
      this.toastr.success(message, 'Success', toastSetting);
    } else if (responseCode === 1) {
      this.toastr.warning(message, 'Warning', toastSetting);
    } else if (responseCode === 2) {
      this.toastr.error(message, 'Error', toastSetting);
    } else if (responseCode === 3) {
      this.toastr.info(message, 'Info', toastSetting);
    }
  }
  getAuthor() {
    this.commonService.getAuthors().subscribe(e => {
      if (e.code === 0) {
        this.authorList = e.data;
        this.totalauthor = this.authorList.length;
      }
    })
  }
  getBlogs() {
    this.commonService.getBlogs().subscribe(e => {
      if (e.code === 0) {
        this.blogList = e.data;
        this.totalblog = this.blogList.length;
      }
    })
  }
  getbooks() {
    this.commonService.getBooks().subscribe(e => {
      if (e.code == 0) {
        if (e.data.length > 0) {
          this.bookList = e.data;
          this.totalbook = this.bookList.length;
        }
      }
    })
  }
  getBookCat() {
    this.commonService.getBooksCatgeries().subscribe(e => {
      if (e.code === 0) {
        this.bookCatList = e.data;
        this.totalbookCat = this.bookCatList.length;
      }
    })
  }
   getContactus() {
    this.commonService.getContactus().subscribe(ele => {
      if (ele.code === 0) {
        this.conatctUsList = ele.data;
        this.totalinquiry = this.conatctUsList.length;
      }
    })
  }
  getPayment() {
    this.commonService.getPayment().subscribe(ele => {
      if (ele.code === 0) {
        this.paymentList = ele.data;
        this.totalpayment = this.paymentList.length;
      }
    })
  }
}