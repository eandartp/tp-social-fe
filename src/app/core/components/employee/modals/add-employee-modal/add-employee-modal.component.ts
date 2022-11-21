import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss']
})
export class AddEmployeeModalComponent implements OnInit {


  employeeFormGroup: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<AddEmployeeModalComponent>, private _snackBar: MatSnackBar, private employeeService :EmployeeService, ) {
   
    this.employeeFormGroup = new FormGroup({
      firstName: new FormControl({value:'', disabled: false}, Validators.required),
      lastName: new FormControl({value: '', disabled: false}, Validators.required),
      address: new FormControl({value: '', disabled: false}, Validators.required),
      taxCode: new FormControl({value: '', disabled: false}, Validators.required),
      zip: new FormControl({value: '', disabled: false}, Validators.required),
      city: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  closeDialog(employee?: Employee) {
    this.dialogRef.close(employee);
  }

  addEmployee() {
    this.employeeService.postEmployee(this.employeeFormGroup.getRawValue()).subscribe(res => {
      this.closeDialog(res);
    }, err => {
      this._snackBar.open('Creazione dipendente non riuscita', 'Ok');
    });
  }

}
