import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  conatctUsList: any;
  constructor(public sharedService: SharedService) { }
  ngOnInit(): void {
    this.sharedService.getContactus();
  }

}
