import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ListFilter} from "../../side-components/side-chat/side-chat.component";
import {FilterService} from "../../../services/utility/filter.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.scss']
})
export class ChatModalComponent implements OnInit {

  newChatForm: FormGroup
  listFilterUsers: ListFilter;


  constructor(public filterService: FilterService,
              public dialogRef: MatDialogRef<ChatModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.listFilterUsers = new ListFilter();
    this.newChatForm = new FormGroup({
      nominative: new FormControl('', [this.data.type === 'new_group' ? Validators.required : Validators.nullValidator]),
      users: new FormControl('', [Validators.required]),
    });
  }

  addUserToChat(formDirective: FormGroupDirective) {
    if (this.data.type === 'add-users') {
      this.dialogRef.close(this.newChatForm.value.users)
    } else {
      let newM = new Map<string, any[]>();
      let key = this.data.type === 'new_group' ? this.newChatForm.value.nominative : (this.newChatForm.value.users.name + '' + this.newChatForm.value.users.surname)
      if (this.data.type === 'new_group') {
        let _users: any[];
        _users = [];
        this.newChatForm.value.users.filter(val => {
          _users.push(val);
        })
        this.data.selectedUser = {
          key: this.newChatForm.value.nominative,
          value: _users
        }
        newM.set(key, _users);
      } else {
        newM.set(key, [this.newChatForm.value.users]);
        this.data.selectedUser = {
          key,
          value: [this.newChatForm.value.users]
        }
      }

      this.data.chats.forEach((value, key) => {
        newM.set(key, value);
      })
      this.data.chats.clear();
      this.data.chats = newM;

      /* const index = this.data.usersArray.indexOf(this.newChatForm.value.users, 0);
       if (index > -1) {
         this.data.usersArray.splice(index, 1);
       }*/
    }

    this.newChatForm.reset();
    formDirective.resetForm();
    this.newChatForm.clearValidators();
  }


}
