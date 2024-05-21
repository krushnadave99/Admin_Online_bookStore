import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-addeditblog',
  templateUrl: './addeditblog.component.html',
  styleUrls: ['./addeditblog.component.scss']
})
export class AddeditblogComponent implements OnInit {
  @Input() sendData;
  blog: any = {};
  blogData: any = {};
  constructor(public model: NgbActiveModal, public sharedService: SharedService, private commonService: CommonService) { }
  ngOnInit(): void {
    if (this.sendData) {
      this.blog.content = this.sendData.content;
      this.blog.image = this.sendData.imageUrl;
    }
  }
  closeModel() {
    this.model.close();
  }
  onFileSelected(event: any) {
    this.blogData.file = event.target.files[0];
  }
  Submit() {
    let strWarning = '';
    if (!this.blog.content) {
      strWarning += '- Please enter content <br/>';
    }
    if (!this.blog.image) {
      strWarning += '- Select enter Image <br/>';
    }
    if (strWarning !== '') {
      return this.sharedService.showToastr(1, strWarning);
    }
    let formdata = new FormData();
    formdata.append('image', this.blogData.file ? this.blogData.file : '')
    if (this.sendData) {
      this.blog.originalFileName = this.sendData.imageUrl;
      this.blog.id = this.sendData._id;
    }
    formdata.append('blogData', JSON.stringify(this.blog));
    if (!this.sendData) {
      this.commonService.getBlogInsert(formdata).subscribe(ele => {
        if (ele.code === 0) {
          this.sharedService.showToastr(0, ele.returnMessage);
         this.model.close(true);
        }
      })
    }
    else {
      this.commonService.getBlogUpdate(formdata).subscribe(ele => {
        if (ele.code === 0) {
          this.sharedService.showToastr(0, ele.returnMessage);
         this.model.close(true);
        }
      })
    }

  }
}
