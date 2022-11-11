import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit,AfterViewInit  {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('selectedCategory') selectedCategory;

  displayedColumns: string[] = ['name', 'type', 'state', 'downloaded', 'updated'];
  dataSource = new MatTableDataSource<File>(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = '';
    this.dataSource.paginator = this.paginator;
  }

}



export interface File {
  id: string;
  name: string;
  type: string;
  downloaded: string;
  updated: string;
  state: string;
}

const ELEMENT_DATA: File[] = [

    {
     id: "625972cb362ee1d29f037093",
     name: "officia",
     type: "xlsx",
     downloaded: '2020-03-20',
     updated: "2019-03-25",
     state: "da scaricare"
    },
    {
     id: "625972cb09f73e0c39393784",
     name: "qui",
     type: "pdf",
     downloaded: "2017-09-27",
     updated: "2018-06-09",
     state: "da scaricare"
    },
    {
      id: "625972cbe27f5ce63fee79d4",
      name: "fugiat",
      type: "word",
      downloaded: "2022-04-14",
      updated: "2020-11-05",
      state: "da scaricare"
    },
    {
      id: "625972cb5d1ba7c988351693",
      name: "aute",
      type: "pdf",
      downloaded: "2019-12-15",
      updated: "2020-08-14",
      state: "scaricato"
    },
    {
      id: "625972cb68c6f9e49727bdf8",
      name: "do",
      type: "pdf",
      downloaded: "2021-02-21",
      updated: "2021-10-14",
      state: "da scaricare"
    },
    {
      id: "625972cbe1d434d7c80ba491",
      name: "nulla",
      type: "pdf",
      downloaded: "2016-06-28",
      updated: "2021-10-18",
      state: "scaricato"
    }
];
