import {Component, OnInit} from '@angular/core';
import {EventEmiterService} from "../../../services/utility/event.emmiter.service";

@Component({
  selector: 'app-side-job-system',
  templateUrl: './side-job-system.component.html',
  styleUrls: ['./side-job-system.component.scss']
})
export class SideJobSystemComponent implements OnInit {
  categories: any[]
  selectedCategory: {}

  constructor(private _eventEmiter: EventEmiterService) {
  }

  ngOnInit(): void {
    this._eventEmiter.dataStr.subscribe(value => {
      if (value && value === 'job-system')
        this.selectedCategory = {}
    })
    this.categories = [
      {
        name: 'Dipendenti'
      }
    ]
  }
}
