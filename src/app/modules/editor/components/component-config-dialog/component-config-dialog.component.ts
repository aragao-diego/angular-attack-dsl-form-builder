import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-component-config-dialog',
  templateUrl: './component-config-dialog.component.html',
  styleUrls: ['./component-config-dialog.component.scss']
})
export class ComponentConfigDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ComponentConfigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
