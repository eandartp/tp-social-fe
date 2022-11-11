import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('selectedCategory') selectedCategory;

  displayedColumns: string[] = ['name', 'type', 'state', 'downloaded'];
  dataSource = new MatTableDataSource<Faq>(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Faq, filter: string) => {
      return data.name.toLowerCase().includes(filter.toLowerCase()) ;
    };
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = '';
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

}


export interface Faq {
  id: string;
  name: string;
  type: string;
  downloaded: string;
  updated: string;
  state: string;
}

const ELEMENT_DATA: Faq[] = [

  {
    id: "625972cb362ee1d29f037093",
    name: "compilazione rapportino",
    type: "xlsx",
    downloaded: '2020-03-20',
    updated: "2019-03-25",
    state: "da scaricare"
  },
  {
    id: "625972cb09f73e0c39393784",
    name: "Ferie / Permessi",
    type: "pdf",
    downloaded: "2017-09-27",
    updated: "2018-06-09",
    state: "da scaricare"
  },
  {
    id: "625972cbe27f5ce63fee79d4",
    name: "Recupero password",
    type: "word",
    downloaded: "2022-04-14",
    updated: "2020-11-05",
    state: "da scaricare"
  },
  {
    id: "625972cb5d1ba7c988351693",
    name: "straordinari",
    type: "pdf",
    downloaded: "2019-12-15",
    updated: "2020-08-14",
    state: "scaricato"
  },
  {
    id: "625972cb68c6f9e49727bdf8",
    name: "Ferie",
    type: "pdf",
    downloaded: "2021-02-21",
    updated: "2021-10-14",
    state: "da scaricare"
  },
  {
    id: "625972cbe1d434d7c80ba491",
    name: "Contratto",
    type: "pdf",
    downloaded: "2016-06-28",
    updated: "2021-10-18",
    state: "scaricato"
  }
];
