import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {entityUrl: string, id: number, msg: string}, 
    private http: HttpClient, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  closeDialog(deleted: boolean) {
    this.dialogRef.close(deleted);
  }

  
  delete() {
    this.http.delete(this.data.entityUrl + this.data.id).subscribe(res => {
      this._snackBar.open('Eliminazione record completata', 'Ok');
      this.closeDialog(true);
    }, err => {
      this._snackBar.open('Eliminazione non riuscita', 'Ok');
    });
  }

}
