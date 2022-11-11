import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../services/utility/modal.service";
import {EventEmiterService} from "../../../services/utility/event.emmiter.service";
import {MatDialog} from "@angular/material/dialog";
import {ChatModalComponent} from "../../chat/chat-modal/chat-modal.component";

export class ListFilter {
  name = "";
}

@Component({
  selector: 'app-side-chat',
  templateUrl: './side-chat.component.html',
  styleUrls: ['./side-chat.component.scss']
})
export class SideChatComponent implements OnInit {

  usersArray = [
    {
      id: "6259330f212c369f51df1e54",
      index: 1,
      age: 33,
      name: "Krystal",
      surname: "Nguyen",
      gender: "female",
      company: "MOMENTIA",
      email: "krystalnguyen@momentia.com",
      phone: "+39(967) 595-2870"
    },
    {
      id: "6259330fc7808f0379020b9d",
      index: 2,
      age: 33,
      name: "Edwards",
      surname: "Castaneda",
      gender: "male",
      company: "VINCH",
      email: "edwardscastaneda@vinch.com",
      phone: "+39(986) 429-2540"
    },
    {
      id: "6259330ff544d19aa833f40b",
      index: 3,
      age: 24,
      name: "Bernice",
      surname: "Cooper",
      gender: "female",
      company: "MAROPTIC",
      email: "bernicecooper@maroptic.com",
      phone: "+39(985) 502-2489"
    },
    {
      id: "6259330f11fe9e2cee6578d6",
      index: 4,
      age: 36,
      name: "Britney",
      surname: "Witt",
      gender: "female",
      company: "METROZ",
      email: "britneywitt@metroz.com",
      phone: "+39(815) 405-2450"
    },
    {
      id: "6259330fe83617dff8dc2c73",
      index: 5,
      age: 21,
      name: "Savannah",
      surname: "Sweeney",
      gender: "female",
      company: "TWIIST",
      email: "savannahsweeney@twiist.com",
      phone: "+39(809) 537-3153"
    },
    {
      id: "6259330f471c9d056023f522",
      index: 6,
      age: 35,
      name: "Bishop",
      surname: "Dunn",
      gender: "male",
      company: "NETUR",
      email: "bishopdunn@netur.com",
      phone: "+39(826) 538-2788"
    },
    {
      id: "6259330fd2516b20be48a194",
      index: 7,
      age: 23,
      name: "Polly",
      surname: "Navarro",
      gender: "female",
      company: "NEOCENT",
      email: "pollynavarro@neocent.com",
      phone: "+39(995) 451-3359"
    },
    {
      id: "6259330ff56a78ba59187667",
      index: 8,
      age: 26,
      name: "Vivian",
      surname: "Cortez",
      gender: "female",
      company: "LYRIA",
      email: "viviancortez@lyria.com",
      phone: "+39(941) 400-3328"
    },
    {
      id: "6259330fa79868ffcc904997",
      index: 9,
      age: 27,
      name: "Mcintosh",
      surname: "Michael",
      gender: "male",
      company: "STELAECOR",
      email: "mcintoshmichael@stelaecor.com",
      phone: "+39(878) 400-2293"
    },
    {
      id: "6259330feeef8acfda02401a",
      index: 10,
      age: 25,
      name: "Sharon",
      surname: "Knox",
      gender: "female",
      company: "SYNKGEN",
      email: "sharonknox@synkgen.com",
      phone: "+39(891) 588-3424"
    },
    {
      id: "6259330f1fa4666781660a13",
      index: 11,
      age: 40,
      name: "Lelia",
      surname: "Ashley",
      gender: "female",
      company: "INTRAWEAR",
      email: "leliaashley@intrawear.com",
      phone: "+39(843) 479-2352"
    }
  ]
  selectedUser: any;
  chats: Map<string, any[]>;
  listFilterUsers: ListFilter;

  constructor(private modalService: ModalService,
              public dialog: MatDialog,
              private _eventEmiter: EventEmiterService) {
  }


  ngOnInit(): void {
    this._eventEmiter.dataStr.subscribe(value => {
      if (value && value === 'side-chat')
        this.selectedUser = undefined
    })
    this.listFilterUsers = new ListFilter();
    this.chats = new Map<string, any[]>();
    this.chats.set('Shepard Blevins', [{
      id: "6259330f0fa361f52aec81d1",
      index: 0,
      age: 22,
      name: "Shepard",
      surname: "Blevins",
      gender: "male",
      company: "EMTRAC",
      email: "shepardblevins@emtrac.com",
      phone: "+39(847) 550-2729"
    }])

    this.chats.set('GruppoTEST', [
      {
        id: "6259330f0fa361f52aec81d1",
        index: 0,
        age: 22,
        name: "Shepard",
        surname: "Blevins",
        gender: "male",
        company: "EMTRAC",
        email: "shepardblevins@emtrac.com",
        phone: "+39(847) 550-2729"
      },
      {
        id: "6259330fa79868ffcc904997",
        index: 9,
        age: 27,
        name: "Mcintosh",
        surname: "Michael",
        gender: "male",
        company: "STELAECOR",
        email: "mcintoshmichael@stelaecor.com",
        phone: "+39(878) 400-2293"
      },
      {
        id: "6259330feeef8acfda02401a",
        index: 10,
        age: 25,
        name: "Sharon",
        surname: "Knox",
        gender: "female",
        company: "SYNKGEN",
        email: "sharonknox@synkgen.com",
        phone: "+39(891) 588-3424"
      }]);
  }

  openModal(id: string) {
    const dialogRef = this.dialog.open(ChatModalComponent, {
      data: {
        type: id,
        chats: this.chats,
        usersArray: this.usersArray,
        selectedUser: this.selectedUser
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.chats = result.chats ? result.chats : this.chats;
        this.usersArray = result.usersArray ? result.usersArray : this.usersArray;
        this.selectedUser = result.selectedUser ? result.selectedUser : this.selectedUser;
      }
    });
  }

  asIsOrder(a, b) {
    return 1;
  }

}
