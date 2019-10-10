import { Component, OnInit,Inject, Input} from '@angular/core';

import { EthcontractService } from '../ethcontract.service';
import {SqlServiceService } from '../sql-service.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-misura-modal',
  templateUrl: './misura-modal.component.html',
  styleUrls: ['./misura-modal.component.css']
})
export class MisuraModalComponent implements OnInit {

  title = 'your first DApp in Angular 7 ';
  accounts:any;
  transferFrom = '0x0';
  balance ='0 ETH';
  transferTo='';
  amount=0;
  remarks='';
  valor="";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ethcontractService: EthcontractService,private SqlService: SqlServiceService ) 
  {
  
  console.log("---------------------------------------")
   }//fine constructor

   ngOnInit() {
    console.log("ACCOUNT modal:");
    console.log(this.data.account);
  }


  categorias=[
    {id: 1, name: "Struttura di fondazione",tariffa:"01.01.001",  },
    {id: 2, name: "Struttura di elevazione",tariffa:"01.01.002.001",  },
    {id: 3, name: "colonnato",          tariffa:"01.01.003.001",  },
    {id: 4, name: "pavimentazione",tariffa:"01.01.004.001",  },
    ];
  lavori=[
      {id: 1, name: "Fabbricato A"  },
      {id: 2, name: "Fabbricato B"  },
      {id: 3, name: "Fabbricato C"  },
      {id: 4, name: "Fabbricato D"  },
      ];

  

  tariffa:string;
  riserva:string;  
  percentuale:number;

  num_categoria:number;
  
salva_misura(event){

  let val_cat = (<HTMLSelectElement>document.getElementById('categoria')).value;
  let val_lav = (<HTMLSelectElement>document.getElementById('lavoro')).value;
for(let lav of this.categorias)
{
    if(lav.name==val_cat)
    {
       this.tariffa=lav.tariffa;
       this.num_categoria=lav.name;
    }
}

console.log(this.tariffa)
console.log(val_cat)
console.log(val_lav)
console.log(this.percentuale)
console.log(this.riserva)
//this.ethcontractService.create_misura(this.tariffa,val_cat,val_lav,this.percentuale,this.riserva,this.data.account);




    let that = this;
//deploed contract
    this.ethcontractService.create_misura(
      this.tariffa,
      val_cat,
      val_lav,
      this.percentuale,
      this.riserva,

      this.data.account,
      
    ).then(function(){
      
      console.log("funziona contract")
    }).catch(function(error){
      console.log(error);
      console.log("FALSEEE")
      
    });
//finisce lavoro smartcontract

  
  


console.log("arrivato insert sql")


this.SqlService.select_descrizione(val_cat,val_lav ).subscribe(data =>{ 
    console.log("select descrizione corretto..");
    console.log(data);

      this.result = data["records"];
      
      var a=this.result[0].id_categoria;
      var b=this.result[0].id_lavori;

      this.SqlService.insert_misura(this.tariffa,a,b,this.percentuale,this.riserva).subscribe(data =>{ 
    console.log("insert corretto..");
    console.log(data);

      //this.result = data["records"];
      //console.log($scope.result[0].ini);
      //var a=this.result[0].ini;

      


    });

      


    });

 
 console.log("finitaaaaaaaaa")



 }//FINE SALVA MISURA



}
