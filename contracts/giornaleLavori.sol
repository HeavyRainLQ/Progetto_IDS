//pragma solidity ^0.4.25;
pragma solidity >=0.4.18 <0.6.0;

contract giornaleLavori{
    
    struct Giornale {
        uint no;
        uint data;
        string descrizioneLocazione;
        
    }
    
    struct Operaio {
        string nome;
        string cognome;
        string qualifica;
        uint ore;
        uint data; //riferimento alla volce del giornale in cui ? presente
    }
    
    struct Attrezzatura {
        string tipologia;
        uint quantita;
        uint data; //riferimento alla volce del giornale in cui ? presente
    }
    
    uint public nextId;
    
    
    
    
    mapping (uint => Giornale) public giornaless;
    Giornale[] public giornales;  //valores del array
    mapping (uint => Operaio) public operaioss;
    Operaio[] public operaios;  //valores del array
    mapping (uint => Attrezzatura) public attrezzaturass;
    Attrezzatura[] public attrezzaturas;  //valores del array
    //mapping (address => User) userStructs
    //address[] public userAddresses;
    
    
    function createGiornale(uint data,string memory descrizione) public{
        
        giornales.push(Giornale(nextId,data,descrizione));
        nextId++;
    }
    
    function readGiornale(uint id) view public returns(uint, string memory){
        
       Giornale memory gio = giornales[id];
        return (gio.data, gio.descrizioneLocazione);
        
    }
    
 
    // function update(uint id, string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale,string memory riserva,bool aprovaz,bool valid) public {
        
    //     for(uint i=0;i<misures.length;i++)
    //     {
    //         if(misures[i].id==id)
    //         {
    //          misures[i].tariffa=tariffa;
    //         misures[i].data=now;
    //         misures[i].categoriaContabile=categoriaContabile;
    //         misures[i].descrizione=descrizione;
    //         misures[i].percentuale=percentuale;
    //         misures[i].riserva=riserva;
    //         misures[i].aprovaz=aprovaz;
    //         misures[i].valid=valid;
    //         }
            
    //     }
        
    // }
    function destroy(uint id) public{
        delete giornales[id];
    }
    
    function createOperaio(string memory nome,string memory cognome,string memory qualifica,uint ore,uint data) public{
        
        operaios.push(Operaio(nome,cognome,qualifica,ore,data));
       
    }
    
    function readOperaio(uint id) view public returns(string memory, string memory ,string memory,uint,uint){
        
       Operaio memory op = operaios[id];
        return (op.nome, op.cognome, op.qualifica,op.ore,op.data);
        
    }
    
 
    // function update(uint id, string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale,string memory riserva,bool aprovaz,bool valid) public {
        
    //     for(uint i=0;i<misures.length;i++)
    //     {
    //         if(misures[i].id==id)
    //         {
    //          misures[i].tariffa=tariffa;
    //         misures[i].data=now;
    //         misures[i].categoriaContabile=categoriaContabile;
    //         misures[i].descrizione=descrizione;
    //         misures[i].percentuale=percentuale;
    //         misures[i].riserva=riserva;
    //         misures[i].aprovaz=aprovaz;
    //         misures[i].valid=valid;
    //         }
            
    //     }
        
    // }
    function destroyOperaio(uint id) public{
        delete operaios[id];
    }
    
    
       function createAttrezzatura(string memory tipologia,uint quantita,uint data) public{
        
        attrezzaturas.push(Attrezzatura(tipologia,quantita,data));
        
    }
    
    function readAttrezzatura(uint id) view public returns( string memory ,uint,uint){
        
       Attrezzatura memory at = attrezzaturas[id];
        return (at.tipologia, at.quantita, at.data);
        
    }
    
 
    // function update(uint id, string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale,string memory riserva,bool aprovaz,bool valid) public {
        
    //     for(uint i=0;i<misures.length;i++)
    //     {
    //         if(misures[i].id==id)
    //         {
    //          misures[i].tariffa=tariffa;
    //         misures[i].data=now;
    //         misures[i].categoriaContabile=categoriaContabile;
    //         misures[i].descrizione=descrizione;
    //         misures[i].percentuale=percentuale;
    //         misures[i].riserva=riserva;
    //         misures[i].aprovaz=aprovaz;
    //         misures[i].valid=valid;
    //         }
            
    //     }
        
    // }
    function destroyAttrezzatura(uint id) public{
        delete attrezzaturas[id];
    }
    
    function read_size() view public returns(uint,uint,uint){
        
        return(giornales.length,operaios.length,attrezzaturas.length);
         
    }


    
    
}
