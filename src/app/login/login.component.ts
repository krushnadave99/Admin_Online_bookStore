import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../Model/user.model';
import { SharedService } from '../services/shared.service';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginRequestModel = new AdminUser();
  loggedInUserDetail: [] = [];
  isPasswordShow = false;

  constructor(public sharedService: SharedService, public commonService: CommonService, public router: Router) { }

  ngOnInit(): void {
  }
  checkLogin() {

    let strWarning = '';
    if (!this.loginRequestModel.username || !this.loginRequestModel.username.trim()) {
      strWarning += '- Please enter username <br/>';
    }
    if (!this.loginRequestModel.password || !this.loginRequestModel.password.trim()) {
      strWarning += '- Please enter password <br/>';
    }
    if (strWarning !== '') {
      // alert(strWarning)
      return this.sharedService.showToastr(1, strWarning);
    }
    this.commonService.getLoginUser(this.loginRequestModel).subscribe((data) => {
      if (data.code === 0) {
        this.sharedService.isLoginUser= localStorage.setItem('loginuser',  JSON.stringify(data.data))
        this.sharedService.showToastr(0, data.returnMessage)
        this.router.navigate(['/dashboard']);
      }
    }, err => {
      this.router.navigate(['/login']);
    });
  }
}
