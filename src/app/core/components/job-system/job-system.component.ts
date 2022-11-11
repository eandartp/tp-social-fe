import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-job-system',
  templateUrl: './job-system.component.html',
  styleUrls: ['./job-system.component.scss']
})
export class JobSystemComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('selectedCategory') selectedCategory;

  displayedColumns: string[] = ['id', 'description'];
  dataSource = new MatTableDataSource<JobSystem>(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = '';
    this.dataSource.paginator = this.paginator;
  }

}

export interface JobSystem {
  id: string;
  description: string;
}

const ELEMENT_DATA: JobSystem[] = [
  {
    id: "1",
    description: "job 1"
  },
  {
    id: "2",
    description: "second"
  },
  {
    id: "3",
    description: "ttt"
  },
  {
    id: "4",
    description: "aaa "
  }
];

