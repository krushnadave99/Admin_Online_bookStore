import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getAuthor();
    this.sharedService.getBlogs();
    this.sharedService.getbooks();
    this.sharedService.getBookCat();
    this.sharedService.getContactus();
  }

}
