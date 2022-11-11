import {Component, OnInit} from '@angular/core';
import {FilterService} from "../../../services/utility/filter.service";

@Component({
  selector: 'app-side-notify-event',
  templateUrl: './side-notify-event.component.html',
  styleUrls: ['./side-notify-event.component.scss']
})

export class SideNotifyEventComponent implements OnInit {
  step = -1;
  notifications = [
    {
      name: 'name',
      date: '20/04/2022',
      msg: 'msg1',
      from: 'compleanno Tactical People'
    }, {
      name: 'name',
      date: '15/04/2022',
      msg: 'msg2',
      from: 'Nuovo corso Java'
    }, {
      name: 'name',
      date: '18/04/2022',
      msg: 'msg3',
      from: 'Progetto Industria 4.0'
    }
  ];
  startDate: Date;
  endDate: Date;


  constructor(
    public filterService: FilterService
  ) {
  }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  prevStep() {
    this.step--;
  }

  filter(end: string, event: any) {
    if (end === 'end') {
      if (event.value) {
        this.filterService.filterListDateRange(this.notifications, 'date', this.startDate, this.endDate)
      }
    }
    return [];
  }

}
