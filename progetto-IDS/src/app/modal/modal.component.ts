import { Component, OnInit,Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{


//  @Input() info1:string;
 // @Input() info2:string;
 description:string;

  //@Inject(MAT_DIALOG_DATA) public data:string;

  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) 
    {
      
    }

  ngOnInit() {

    console.log("este es el valor:");
    console.log(this.data);
  }

}
