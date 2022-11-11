import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  academyImgPath = 'assets/img/students.jpg';
  chatImgPath = 'assets/img/chat.jpg';
  documentsImgPath = 'assets/img/documents.jpg';
  newspapersImgPath = 'assets/img/newspapers.jpg';
  skillsImgPath = 'assets/img/skills.jpg';
  notificationImgPath = 'assets/img/notification_dark.jpg';
  hiringImgPath = 'assets/img/hiring.jpg';
  meetingImgPath = 'assets/img/info.jpg';
  privacyImgPath = 'assets/img/privacy.jpg';
  tacticalImgPath = 'assets/img/logo-tactical-people.png';


  constructor() { }

  ngOnInit(): void {
  }

}
