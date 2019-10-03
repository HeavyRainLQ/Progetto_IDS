pragma solidity ^0.4.25;

contract librettoMisure{
    
    struct Misura {
    uint id;
    string tariffa;
    string data;
    string categoriaContabile;
    string descrizione;
    uint percentuale;
    string riserva;

    }
    
    uint public nextId;
    
    mapping (uint => Misura) public misuress;
    Misura[] public misures;  //valores del array
    //mapping (address => User) userStructs
    //address[] public userAddresses;
    
    
    function create(string memory tariffa,string memory data ,string memory categoriaContabile,string memory descrizione,uint percentuale,string memory riserva) public{
        
        misures.push(Misura(nextId,tariffa,data,categoriaContabile,descrizione,percentuale,riserva));
        nextId++;
    }
    
    function read(uint id) view public returns(uint, string memory,string memory,string memory,string memory,uint,string memory){
        
        for(uint i=0;i<misures.length;i++)
        {
            if(misures[i].id==id)
            {
             return(misures[i].id,misures[i].tariffa,misures[i].data,misures[i].categoriaContabile,misures[i].descrizione,misures[i].percentuale,misures[i].riserva);
            }
            
        }
        
    }
    
     function read_size() view public returns(uint){
        
        return(misures.length);
         
    }
    
    
    function update(uint id, string memory tariffa,string memory data,string memory categoriaContabile,string memory descrizione,uint percentuale,string memory riserva) public {
        
        for(uint i=0;i<misures.length;i++)
        {
            if(misures[i].id==id)
            {
             misures[i].tariffa=tariffa;
            misures[i].data=data;
            misures[i].categoriaContabile=categoriaContabile;
            misures[i].descrizione=descrizione;
            misures[i].percentuale=percentuale;
            misures[i].riserva=riserva;
            }
            
        }
        
    }
    function destroy(uint id) public{
        delete misures[id];
    }
    
}
