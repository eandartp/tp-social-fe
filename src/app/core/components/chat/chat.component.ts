import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatDialog} from "@angular/material/dialog";
import {ChatModalComponent} from "./chat-modal/chat-modal.component";

export class ListFilter {
  name = "";
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @Input() mapKeyPartecipants: any;
  @Input() employees: any;

  isGroup: boolean;
  usersColorMap: Map<string, string>;
  listFilterUsers: ListFilter;

  messages = [
    {
      id: '',
      from: 'me',
      to: 'Blevins Shepard',
      date: '2022-04-26 12:32',
      text: 'Ciao'
    }, {
      id: '',
      from: 'me',
      to: 'Blevins Shepard',
      date: '2022-04-26 12:32',
      text: 'Come stai?'
    },
    {
      id: '6259330f212c369f51df1e54',
      from: 'Krystal Nguyen',
      to: 'me',
      date: '2022-04-26 12:32',
      text: 'Ciaooooo'
    }, {
      id: '6259330f1fa4666781660a13',
      from: 'Lelia Ashley',
      to: 'me',
      date: '2022-04-26 12:32',
      text: 'T\'appost, te? blabla bla bla blablabla'
    }, {
      id: '',
      from: 'me',
      to: 'Lelia Ashley',
      date: '2022-04-26 12:32',
      text: 'Ciao'
    }, {
      id: '',
      from: 'me',
      to: 'Blevins Shepard',
      date: '2022-04-26 12:32',
      text: 'Come stai?'
    },
    {
      id: '6259330f212c369f51df1e54',
      from: 'Krystal Nguyen',
      to: 'me',
      date: '2022-04-26 12:32',
      text: 'Ciaooooo'
    }, {
      id: '6259330fc7808f0379020b9d',
      from: 'Edwards Castaneda',
      to: 'me',
      date: '2022-04-26 12:32',
      text: 'T\'appost, te? blabla bla bla blablabla'
    }, {
      id: '',
      from: 'me',
      to: 'Blevins Shepard',
      date: '2022-04-26 12:32',
      text: 'Ciao'
    }, {
      id: '',
      from: 'me',
      to: 'Blevins Shepard',
      date: '2022-04-26 12:32',
      text: 'Come stai?'
    },
    {
      id: '6259330f1fa4666781660a13',
      from: 'Lelia Ashley',
      to: 'me',
      date: '2022-04-26 12:32',
      text: 'Ciaooooo'
    }, {
      id: '',
      from: 'me',
      to: 'Bernice Cooper',
      date: '2022-04-26 12:32',
      text: 'T\'appost, te? blabla bla bla blablabla'
    }
  ]
  color = [
    '#ff0000',
    '#00ff00',
    '#ff00ff',
    '#0000ff',
    '#800080',
    '#ffff00',
    '#2ea3e7',
    '#808000',
    '#ffa500'
  ]
  msg: string;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.mapKeyPartecipants)
    this.isGroup = this.mapKeyPartecipants.value.length > 1
    this.usersColorMap = new Map<string, string>();
    let count = 0;
    this.employees.filter(value => {
      //TODO confrontare con user loggato value.id !== userLogged.id
      if (value.id && value.from !== 'me') {
        this.usersColorMap.set(value.id, this.color[count++])
      }
    })

    this.listFilterUsers = new ListFilter();
  }

  ngOnChanges() {
    this.isGroup = this.mapKeyPartecipants.value.length > 1
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  openModal(id: string) {
    const dialogRef = this.dialog.open(ChatModalComponent, {
      data: {
        type: id,
        chats: '',
        usersArray: this.employees,
        selectedUser: ''
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      result.filter(val => {
        if (val) {
          this.mapKeyPartecipants.value.push(val)
        }
      })
    });
  }

  sendMsg() {
    if (this.msg)
      this.messages.push({
        id: '',
        from: 'me',
        to: 'group',
        date: '2022-04-26 12:32',
        text: this.msg
      })
  }
}
