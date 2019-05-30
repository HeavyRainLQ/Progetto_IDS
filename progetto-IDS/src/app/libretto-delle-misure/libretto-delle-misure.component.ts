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

colors=[
{id: 1, name: "red"  },
{id: 2, name: "blue"  },
{id: 3, name: "yellow"  },
];
prueba = 'prueba pasar valor';
user:string;

  ngOnInit() 
  {

  }

  openDialog(): void {
     
console.log("el valor:: ");
console.log(this.user);


    let dialogRef = this.dialog.open(ModalComponent, {
     
      width: '450px',
      height: '620px',
      data: {name: 'prueba'}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}