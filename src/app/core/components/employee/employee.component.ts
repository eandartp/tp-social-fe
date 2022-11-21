import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { AddEmployeeModalComponent } from './modals/add-employee-modal/add-employee-modal.component';
import { EditEmployeeModalComponent } from './modals/edit-employee-modal/edit-employee-modal.component';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input('selectedCategory') selectedCategory;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'taxCode', 'zip', 'city', 'actions'];
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
      if (result) {
        this.employees.push(result);
        this.dataSource.data = [...this.employees];
      }
    });
  }

  editEmployee(employee: Employee, i: number): void {
    const dialogRef = this.dialog.open(EditEmployeeModalComponent, {
      data: {
        employee: employee
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employees[i] = result;
        this.dataSource.data = [...this.employees];
      }
    });
  }

  deleteEmployee(id: number, i: number): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      data: {
        entityUrl: 'api/employees/', 
        id: id, 
        msg: 'Confermi di voler eliminare il dipendente?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employees.splice(i , 1);
        this.dataSource.data = [...this.employees];
      }
    });
  }

}

