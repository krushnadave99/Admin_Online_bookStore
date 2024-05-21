import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../services/common.service';
import { AddeditblogComponent } from './addeditblog/addeditblog.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogList: any;
  constructor(public model: NgbModal, private commonService: CommonService, public sharedService: SharedService) { }
  ngOnInit(): void {
    this.sharedService.getBlogs();
  }
  openBlogModel(item?: any) {
    const modal = this.model.open(AddeditblogComponent, {
    });
    modal.componentInstance.sendData = item;
    modal.result.then(x=>{
      if(x){
        this.sharedService.getBlogs()
      }
    })
  }

  getDeleteblog(id) {
    this.commonService.getBlogDelete(id).subscribe(e => {
      if (e.code === 0) {
        this.sharedService.showToastr(0, e.returnMessage);
        this.sharedService.getBlogs();
      }
    })
  }
}
