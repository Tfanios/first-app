import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
  ) {}
  name = ''
  age = 0
  weight = 0
  height = 0
 
  handleSumbit(): void {
    this.data.addPeople(this.name,this.weight,this.age,this.height)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
