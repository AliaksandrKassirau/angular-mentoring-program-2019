import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.less']
})
export class DeleteConfirmationDialogComponent {
  public onYes = new EventEmitter();
  public onNo = new EventEmitter();

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) {}

  public onNoClick(): void {
    this.onNo.emit();
    this.dialogRef.close();
  }

  public onYesClick(): void {
    this.onYes.emit();
    this.dialogRef.close();
  }
}
