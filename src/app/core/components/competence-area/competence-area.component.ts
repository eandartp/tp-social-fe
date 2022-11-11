import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-competence-area',
  templateUrl: './competence-area.component.html',
  styleUrls: ['./competence-area.component.scss']
})
export class CompetenceAreaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('category') category;

  displayedColumns: string[] = ['name', 'surname', 'role', 'competence'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  roles: string[];
  competences: string[];

  // pdf viewer
  totalPages: number;
  page: number = 1;
  isLoaded: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.category.name !== 'Organigramma') {
      this.dataSource.filterPredicate = (data: User, filter: string) => {
        let competence: Competence;
        competence = new class implements Competence {
          name: string;
        }
        competence.name = filter
        return data.name.toLowerCase().includes(filter.toLowerCase())
          || data.surname.toLowerCase().includes(filter.toLowerCase())
          || data.role === filter
          || data.competence.findIndex((item) => item.name === competence.name) !== -1
          ;
      };
      this.roles = ['']
      this.competences = ['']
      this.dataSource.data.forEach(value => {
        if (!this.roles.includes(value.role))
          this.roles.push(value.role)
        value.competence.forEach(value1 => {
          if (!this.competences.includes(value1.name)) {
            this.competences.push(value1.name)
          }
        })
      })
    }
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = '';
    if (this.category.name !== 'Organigramma') {
      this.dataSource.paginator = this.paginator;
    } else {
      this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        const start = page * pageSize + 1;
        return `${start} di ${length}`;
      };
    }
  }

  getCompetences(competences: any) {
    let ret = ''
    for (let competence of competences) {
      ret += competence.name + ', '
    }
    ret = ret.substring(0, ret.length - 2)
    return ret
  }

  doFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  doRoleFilter(event: MatSelectChange) {
    this.dataSource.filter = event.value;
  }

  nextPage() {
    this.page += 1;
  }

  previousPage() {
    this.page -= 1;
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  change(event) {
    event.length = this.totalPages
    if (this.page - 1 > event.pageIndex)
      this.previousPage()
    else if (this.page - 1 < event.pageIndex)
      this.nextPage()
    console.log(event.pageIndex)
  }

}

export interface User {
  name: string;
  surname: string;
  role: string;
  competence: Competence[];
}

export interface Competence {
  name: string
}

const ELEMENT_DATA: User[] = [

  {
    name: "tizio",
    surname: "caio",
    role: 'sviluppatore',
    competence: [{
      name: 'Angular'
    },
      {
        name: 'Java'
      }]
  },
  {
    name: "Marco",
    surname: "Rossi",
    role: 'sviluppatore',
    competence: [{
      name: 'Angular'
    },
      {
        name: 'React'
      },
      {
        name: 'VueJs'
      }]
  },
  {
    name: "Arianna",
    surname: "Bianchi",
    role: 'marketing',
    competence: [{
      name: 'marketing 3.0'
    }]
  },
  {
    name: "Ross",
    surname: "Verd",
    role: 'CEO',
    competence: [{
      name: 'CEO'
    },
      {
        name: 'CEO 2'
      }]
  },
  {
    name: "Stefania",
    surname: "Brambilla",
    role: 'Hr',
    competence: [{
      name: 'manager'
    },
      {
        name: 'consulting'
      }]
  },
  {
    name: "tizia",
    surname: "caia",
    role: 'amministrazione',
    competence: [{
      name: 'prima compet'
    },
      {
        name: 'seconda compet'
      },
      {
        name: 'ultima competenza'
      }]
  },

  {
    name: "tizio 2",
    surname: "caio 2",
    role: 'sviluppatore',
    competence: [{
      name: 'programmatore Angular'
    },
      {
        name: 'programmatore Java'
      }]
  }
];
