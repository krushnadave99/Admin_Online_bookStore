import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddeditauthorComponent } from './addeditauthor/addeditauthor.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  authorList: any;
  constructor(public model: NgbModal, private commonService: CommonService, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getAuthor();
  }
  openAuthorModel(item?: any) {
    const modal = this.model.open(AddeditauthorComponent, {
    });
    modal.componentInstance.sendData = item;
    modal.result.then(x => {
      if (x) {
        this.sharedService.getAuthor();
      }
    })
  }

  getDeleteAuthor(id: any) {
    this.commonService.getAuthorDelete(id).subscribe(e => {
      if (e.code === 0) {
        this.sharedService.showToastr(0, e.returnMessage);
        this.sharedService.getAuthor();
      }
    })
  }
}
