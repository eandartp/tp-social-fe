import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/models/employee';
import { AddEmployeeModalComponent } from '../add-employee-modal/add-employee-modal.component';

@Component({
  selector: 'app-edit-employee-modal',
  templateUrl: './edit-employee-modal.component.html',
  styleUrls: ['./edit-employee-modal.component.scss']
})
export class EditEmployeeModalComponent implements OnInit {

  employeeFormGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEmployeeModalComponent>, private _snackBar: MatSnackBar, private employeeService: EmployeeService, @Inject(MAT_DIALOG_DATA) public data: {employee: Employee}) {
   
    this.employeeFormGroup = new FormGroup({
      firstName: new FormControl({value:data.employee.firstName, disabled: false}, Validators.required),
      lastName: new FormControl({value: data.employee.lastName, disabled: false}, Validators.required),
      address: new FormControl({value: data.employee.address, disabled: false}, Validators.required),
      taxCode: new FormControl({value: data.employee.taxCode, disabled: false}, Validators.required),
      zip: new FormControl({value: data.employee.zip, disabled: false}, Validators.required),
      city: new FormControl({value: data.employee.city, disabled: false}, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  closeDialog(employee?: Employee) {
    this.dialogRef.close(employee);
  }

  editEmployee() {
    this.employeeService.putEmployee({
      id: this.data.employee.id,
      ...this.employeeFormGroup.getRawValue()
    }).subscribe(res => {
      this.closeDialog(res);
    }, err => {
      this._snackBar.open('Aggiornamento dipendente non riuscito', 'Ok');
    });
  }

}
