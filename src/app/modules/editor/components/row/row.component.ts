import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ComponentConfigDialogComponent } from './../component-config-dialog/component-config-dialog.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() data;
  @Input() id;
  @Input() editMode;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  order(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.data.push(event.item.data);
    }
  }

  delete(i) {
    this.data.splice(i, 1);
  }

  config(i) {
    const dialogRef = this.dialog.open(ComponentConfigDialogComponent, {
      width: '250px',
      data: this.data[i]
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.data[i] = result;
      }
    });
  }

}
