import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentList: any;
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getPayment();
  }
}
