import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/services/common.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-addeditauthor',
  templateUrl: './addeditauthor.component.html',
  styleUrls: ['./addeditauthor.component.scss']
})
export class AddeditauthorComponent implements OnInit {
  @Input() sendData;
  author: any = {};
  authorData: any = {};
  constructor(public model: NgbActiveModal, public sharedService: SharedService, private commonService: CommonService) { }

  ngOnInit(): void {
    if(this.sendData){
      this.author.authorname = this.sendData.authorname;
   
    }
  }
  onFileSelected(event: any) {
    this.authorData.file = event.target.files[0];
  }
  closeModel() {
    this.model.close();
  }
  Submit() {
    let strWarning = '';
    if (!this.author.authorname) {
      strWarning += '- Please enter author name <br/>';
    }
   
    if (strWarning !== '') {
      return this.sharedService.showToastr(1, strWarning);
    }
    if(!this.sendData){
      this.commonService.getAuthorInsert(this.author).subscribe(ele => {
        if (ele.code === 0) {
          this.sharedService.showToastr(0, ele.returnMessage);
          this.model.close(true);
        }
      });
    }
    else{
      this.author.id = this.sendData._id;
      console.log(this.author);
      this.commonService.getAuthorUpdate(this.author).subscribe(ele => {
        if (ele.code === 0) {
          this.sharedService.showToastr(0, ele.returnMessage);
          this.model.close(true);
        }
      });
    }
   
  }
}
