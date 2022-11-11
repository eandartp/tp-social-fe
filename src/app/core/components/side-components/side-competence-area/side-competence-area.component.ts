import {Component, OnInit} from '@angular/core';
import {EventEmiterService} from "../../../services/utility/event.emmiter.service";

@Component({
  selector: 'app-side-competence-area',
  templateUrl: './side-competence-area.component.html',
  styleUrls: ['./side-competence-area.component.scss']
})
export class SideCompetenceAreaComponent implements OnInit {
  categories = [{
    name : 'Visibilità/ruoli/competenze'
  },{
    name : 'Organigramma'
  },{
    name : 'Aree di competenza'
  },{
    name : 'Incontri'
  },
  ];
  selectedCategory: any;

  constructor(private _eventEmiter: EventEmiterService) { }

  ngOnInit(): void {
    this._eventEmiter.dataStr.subscribe( value => {
      if (value && value === 'side-competence')
        this.selectedCategory = {}
    })
  }

}
