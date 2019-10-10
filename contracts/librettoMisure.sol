//pragma solidity ^0.4.25;
pragma solidity >=0.4.18 <0.6.0;

contract librettoMisure{
    
    struct Misura {
    uint id;
    string tariffa;
    uint data;
    string categoriaContabile;
    string descrizione;
    int128 percentuale;
    string riserva;
    bool aprovaz;
    bool valid;

    }
    
    uint public nextId;
    
    
    mapping (uint => Misura) public misuress;
    Misura[] public misures;  //valores del array
    //mapping (address => User) userStructs
    //address[] public userAddresses;
    
    
    function create(string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale,string memory riserva) public{
        
        misures.push(Misura(nextId,tariffa,now,categoriaContabile,descrizione,percentuale,riserva,false,true));
        nextId++;
    }
    
    function read(uint id) view public returns(uint, string memory ,uint,string memory,string memory,int128,string memory,bool,bool){
        
        for(uint i=0;i<misures.length;i++)
        {
            if(misures[i].id==id)
            {
             return(misures[i].id,misures[i].tariffa,misures[i].data,misures[i].categoriaContabile,misures[i].descrizione,misures[i].percentuale,misures[i].riserva,misures[i].aprovaz,misures[i].valid);
            }
            
        }
        
    }
    
     function read_size() view public returns(uint){
        
        return(misures.length);
         
    }
    
    
    function update(uint id, string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale,string memory riserva,bool aprovaz,bool valid) public {
        
        for(uint i=0;i<misures.length;i++)
        {
            if(misures[i].id==id)
            {
             misures[i].tariffa=tariffa;
            misures[i].data=now;
            misures[i].categoriaContabile=categoriaContabile;
            misures[i].descrizione=descrizione;
            misures[i].percentuale=percentuale;
            misures[i].riserva=riserva;
            misures[i].aprovaz=aprovaz;
            misures[i].valid=valid;
            }
            
        }
        
    }
    function destroy(uint id) public{
        delete misures[id];
    }
    
    function prueba() view public returns(uint){
        
        
        
        return now;
     //   1570490594
        
    }
    
}
