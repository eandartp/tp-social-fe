import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service';
import { AddEmployeeModalComponent } from './modals/add-employee-modal/add-employee-modal.component';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('selectedCategory') selectedCategory;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'taxCode', 'zip', 'city'];
  dataSource = new MatTableDataSource<Employee>();
  employees:Employee[] = [];

  constructor(private employeeService :EmployeeService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((res: any) => {
      this.employees = res;
      this.dataSource.data = this.employees;
    })
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = '';
    this.dataSource.paginator = this.paginator;
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(AddEmployeeModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

