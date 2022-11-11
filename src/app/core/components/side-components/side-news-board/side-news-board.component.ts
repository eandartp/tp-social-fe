import {Component, OnInit} from '@angular/core';
import {FilterService} from "../../../services/utility/filter.service";

@Component({
  selector: 'app-side-news-board',
  templateUrl: './side-news-board.component.html',
  styleUrls: ['./side-news-board.component.scss']
})
export class SideNewsBoardComponent implements OnInit {
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
      from: 'Nuovo contratto commerciale'
    }, {
      name: 'name',
      date: '18/04/2022',
      msg: 'msg3',
      from: 'E-Commerce'
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
