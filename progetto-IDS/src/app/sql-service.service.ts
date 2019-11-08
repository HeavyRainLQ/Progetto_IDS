import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

interface myData {
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})


export class SqlServiceService {

  valori: Array<string>;
  var1: object;
  utente: Object;
  a;
  id_user: any;
  api: any;
  parDocumenti = [
    {
      budget: 100000,
      oggetto: "Costruzione di un complesso di fabbricati destinati ad abitazione ed negozi nel centro urbano del Comune di Ancona.",
      ditta: "La Distruttoria s.r.l.",
      committente: "Sviluppo Anconetano s.r.l.",
      direttore: "Ing.Cristiano Mangiolio"
    },

  ];


  constructor(private http: HttpClient) {
    this.api = environment.api;
  }
  //Generamos las funciones que nos serviran para manipular nuestras entidades
  getSomeData(user, pass) {
    console.log("llego al servicio getSomeData: ->");

    //return this.http.get<myData>(`${this.URL}conexion.php`);
    //return this.http.get("/api/conexion.php");
    this.a = this.http.post(this.api+'/api/login.php', {
      user,
      pass
    });
    this.a.subscribe(data => {
      this.utente = data["records"];
    });
    return this.a;
    // return this.http.post('this.api/api/login.php', {
    //   user,
    //   pass
    // })
    //return this.http.get<myData>("../../../src/app/conexion.php");

  }//fin funcion de login

  mio_profilo(user, pass) {
    console.log("servicio mio profilo: ->");
    return this.http.post(this.api+'/api/mio_profilo.php', {
      user,
      pass
    })

  }//fin del metodo mio_profilo
  insert_operaio(nome, cognome, qualifica) {


    console.log("servicio insert operaio: ->");
    console.log(nome, cognome, qualifica)
    //return this.http.get<myData>(`${this.URL}conexion.php`);
    //return this.http.get("/api/conexion.php");
    return this.http.post(this.api+'/api/insert_operaio.php', {
      nome, cognome, qualifica
    })

  }

  insert_user(dati: object) {
    console.log("servicio update: ->");
    console.log(dati);
    this.var1 = dati["col1"];
    console.log(this.var1["ci"]);


    /*
*/


    //return this.http.get("/api/conexion.php");
    return this.http.post(this.api+'/api/insert_user.php',

      this.var1,

    )
    //return this.http.get<myData>("../../../src/app/conexion.php");
  }

  get_nome_utente() {
    return this.utente[0].nome;
  }
  insert_misura(tariffa, conta, lavoro, perce, ris) {


    console.log("servicio insert misura: ->");
    //return this.http.get<myData>(`${this.URL}conexion.php`);
    //return this.http.get("/api/conexion.php");
    return this.http.post(this.api+'/api/insert_misura.php', {
      tariffa, conta, lavoro, perce, ris
    })

  }//fin del metodo mio_profilo

  insert_sal(cod_sal,
    categoria,
    descrizione,
    percentuale,
    prezzo_perc,
    debito,
    debito_perc) {
    return this.http.post(this.api+'/api/insert_sal.php', {
      cod_sal,
      categoria,
      descrizione,
      percentuale,
      prezzo_perc,
      debito,
      debito_perc
    })

  }//insert SAL



  ////////////////////SELECTS
  select_accumulato(categoria, descrizione) {

    console.log("servicio accumulato: ->");
    return this.http.post(this.api+'/api/select_accumulato.php', {
      categoria, descrizione
    })

  }//fine select accumulato %
  select_descrizione(nomeCat, descrizione) {

    console.log("servicio select_descrizione: ->");
    return this.http.post(this.api+'/api/select_categoria.php', {
      nomeCat, descrizione
    })

  }//fine select descrizione

  select_attrezzatura() {
    return this.http.post(this.api+'/api/select_attre.php', {})

  }//fine select attrezzatura

  select_categorie() {
    return this.http.post(this.api+'/api/select_categorie.php', {})

  }//fine select categorie
  select_lavori() {
    return this.http.post(this.api+'/api/select_lavori.php', {})

  }//fine select lavori

  select_qualifica() {

    return this.http.post(this.api+'/api/select_qualifica.php', {})

  }//fine select qualifica

  select_parziale() {

    return this.http.post(this.api+'/api/select_parziale.php', {})

  }//fine select parziale

  select_parziale_misura(idMisura) {

    return this.http.post(this.api+'/api/select_parziale_misura.php', { idMisura });

  }
  contabilita(budget) {
    return this.http.post(this.api+'/api/select_contabilita.php', {
      budget
    });

  }//fine contabilita

  grafico_sal() {
    return this.http.post(this.api+'/api/select_sal_grafico.php', {

    });

  }

  sal(budget) {
    return this.http.post(this.api+'/api/select_sal.php', {
      budget
    });

  }//fine  sal

  select_soglia() {

    return this.http.post(this.api+'/api/select_soglia.php', {})

  }//fine select parziale



  updateApprova(item_id) {
    return this.http.post(this.api+'/api/update_approva.php', {
      item_id
    })
  }//fine update approva

  updateInvalida(item_id) {
    return this.http.post(this.api+'/api/update_valida.php', {
      item_id
    })
  }//fine update invalida
  updateApprova_sal() {
    return this.http.post(this.api+'/api/update_approva_sal.php', {
    })
  }//fine update approva

  select_tipo_user() {

    return this.http.post(this.api+'/api/select_tipo_user.php', {})

  }
  update_info(dati: object) {
    console.log("servicio update: ->");
    console.log(dati);
    this.var1 = dati["col1"];
    console.log(this.var1["ci"]);


    /*
*/


    //return this.http.get("/api/conexion.php");
    return this.http.post(this.api+'/api/update_user.php',

      this.var1,

    )
    //return this.http.get<myData>("../../../src/app/conexion.php");
  }//fin del metodo update

  logueo(user: string, pass: string) {

    console.log("llego al servicio 2::");
    //this.http.get('http://localhost/myCRUD/src/api/productos.php?user='+user+'&pass='+pass+'');
    console.log(this.http.post('http://localhost/ids3/Progetto_ids/progetto-ids/src/app/mis_php/login.php',
      {
        "user": user,
        "pass": pass
      }
    ));


    //this.http.post("http://localhost/Hall-Management-System/api/login.php",{"index_signin":index_signin,"password_signin":password_signin}).map(res=>res.json())

    console.log("datos del usuario");
    //console.log(this.datos);

    //   $scope.result = response.records;
    //console.log($scope.result[0].ini);
    //  var a=$scope.result[0].ini; 
  }
  detallar(id: number) {
    return this.http.get('http://localhost/myCRUD/src/api/productos.php?opcion=2&id=' + id);
  }
  guardar(item: Object) {
    return this.http.post('http://localhost/myCRUD/src/api/productos.php?opcion=3', item);
  }
  modificar(item: Object) {
    return this.http.post('http://localhost/myCRUD/src/api/productos.php?opcion=4', item);
  }
  eliminar(id: number) {
    throw new Error("Method not implemented.");
  }


}
