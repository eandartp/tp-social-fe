import {Component, OnInit} from '@angular/core';
import {EventEmiterService} from "../../../services/utility/event.emmiter.service";

@Component({
  selector: 'app-side-file',
  templateUrl: './side-file.component.html',
  styleUrls: ['./side-file.component.scss']
})
export class SideFileComponent implements OnInit {
  fileCategories: any[];
  selectedCategory: {};

  constructor(private _eventEmiter: EventEmiterService) {
  }

  ngOnInit(): void {
    this._eventEmiter.dataStr.subscribe( value => {
      if (value && value === 'side-file')
        this.selectedCategory = {}
    })
    this.fileCategories = [{
        name: 'Recenti'
      },
      {
        name: 'Gruppo Java'
      },
      {
        name: 'I miei Cedolini'
      }
    ]
  }

}
