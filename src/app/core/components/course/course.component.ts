import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  types = [''];
  names = [''];
  dataSource = new MatTableDataSource<Course>(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'type'];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: Course, filter: string) => {
      return data.name.includes(filter) || data.type === filter;
    };

    this.dataSource.data.filter(val => {
      if (!this.types.includes(val.type))
        this.types.push(val.type)
      if (!this.names.includes(val.name))
        this.names.push(val.name)
    })

  }

  doTypeFilter(event: MatSelectChange) {
    this.dataSource.filter = event.value;
  }

}

export interface Course {
  id: string;
  name: string;
  type: string;
}

const ELEMENT_DATA: Course[] = [
  {
    id: "625972cb362ee1d29f037093",
    name: "officia",
    type: "interno"
  },
  {
    id: "625972cb09f73e0c39393784",
    name: "qui",
    type: "codemotion"
  },
  {
    id: "625972cbe27f5ce63fee79d4",
    name: "fugiat",
    type: "interno"
  },
  {
    id: "625972cb5d1ba7c988351693",
    name: "aute",
    type: "codemotion"
  },
  {
    id: "625972cb68c6f9e49727bdf8",
    name: "do",
    type: "codemotion"
  },
  {
    id: "625972cbe1d434d7c80ba491",
    name: "nulla",
    type: "codemotion"
  }
];
