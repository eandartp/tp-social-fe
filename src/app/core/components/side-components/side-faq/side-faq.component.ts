import {Component, OnInit} from '@angular/core';
import {EventEmiterService} from "../../../services/utility/event.emmiter.service";

@Component({
  selector: 'app-side-faq',
  templateUrl: './side-faq.component.html',
  styleUrls: ['./side-faq.component.scss']
})
export class SideFaqComponent implements OnInit {
  faqCategories = [{
    name: 'Problematiche Comuni'
  },
    {
      name: 'Guide Step By Step'
    },
    {
      name: 'FAQ'
    },
    {
      name: 'Moduli Scaricabili'
    }
  ]

  selectedCategory: {};

  constructor(private _eventEmiter: EventEmiterService) {
  }

  ngOnInit(): void {
    this._eventEmiter.dataStr.subscribe( value => {
      if (value && value === 'side-faq')
        this.selectedCategory = {}
    })
  }

}
