import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '.././modal/modal.component';

import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-libretto-delle-misure',
  templateUrl: './libretto-delle-misure.component.html',
  styleUrls: ['./libretto-delle-misure.component.css']
})

export class LibrettoDelleMisureComponent implements OnInit {

  constructor(public dialog: MatDialog){
   }

  ngOnInit() 
  {

  }

  


  openDialog(): void {
    let dialogRef = this.dialog.open(ModalComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}