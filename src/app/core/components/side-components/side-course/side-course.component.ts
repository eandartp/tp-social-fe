import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventEmiterService} from "../../../services/utility/event.emmiter.service";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-side-course',
  templateUrl: './side-course.component.html',
  styleUrls: ['./side-course.component.scss']
})
export class SideCourseComponent implements OnInit {
  showLoginForm = false;
  hidePwd = true;
  loginForm: FormGroup;
  loginSuccess = false;

  hideSide = false;
  isMobile: boolean;

  constructor(private _eventEmiter: EventEmiterService,
              private deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    /*isTablet = this.deviceService.isTablet(); isDesktopDevice = this.deviceService.isDesktop();*/

    this._eventEmiter.dataStr.subscribe(value => {
      if (value && value === 'side-course')
        this.hideSide = !this.hideSide
    })
    if (sessionStorage.getItem('login')) {
      this.loginSuccess = true
    }
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    sessionStorage.setItem('login', this.loginForm.value)
    this.loginSuccess = true;
    if (this.isMobile) {
      this.hideSide = true
    }
  }

  logout() {
    sessionStorage.removeItem('login')
    this.loginSuccess = false;
  }
}
