
pragma solidity >=0.4.18 <0.6.0;

contract Sal{
    
    struct Sal {
    int128 id;
    int128 codSal;
    string tariffa;
    uint data;
    string categoriaContabile;
    string descrizione;
    
    int128 percentuale;
    int128 prezzoValore;
    int128 prezzoPercentuale;
    int128 debitoValore;
    int128 debitoPercentuale;

    }
    
    int128 public nextId;
    
    mapping (int128 => Sal) public salss;
    Sal[] public sals;  //valores del array
    //mapping (address => User) userStructs
    //address[] public userAddresses;
    
    
    function create(int128 cdSal,string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale, int128 prezzoValore,int128 prezzoPercentuale,int128 debitoValore,int128 debitoPercentuale) public{
        
        sals.push(Sal(nextId,cdSal,tariffa,now,categoriaContabile,descrizione,percentuale,prezzoValore,prezzoPercentuale,debitoValore,debitoPercentuale));
        nextId++;
    }
    
    function read(int128 id) view public returns(int128, int128,string memory,uint,string memory,string memory,int128,int128,int128,int128,int128){
        
        for(uint i=0;i<sals.length;i++)
        {
            if(sals[i].id==id)
            {
             return(sals[i].id,sals[i].codSal,sals[i].tariffa,sals[i].data,sals[i].categoriaContabile,sals[i].descrizione,sals[i].percentuale,sals[i].prezzoValore,sals[i].prezzoPercentuale,sals[i].debitoValore,sals[i].debitoPercentuale);
            }
            
        }
        
    }
    
     function read_size() view public returns(uint){
        
        return(sals.length);
         
    }
    
    
    function update(int128 id,int128 codSal, string memory tariffa,uint data,string memory categoriaContabile,string memory descrizione,int128 percentuale,int128 prezzoValore,int128 prezzoPercentuale,int128 debitoValore,int128 debitoPercentuale ) public {
        
        for(uint i=0;i<sals.length;i++)
        {
            if(sals[i].id==id)
            { sals[i].codSal=codSal;
             sals[i].tariffa=tariffa;
            sals[i].data=data;
            sals[i].categoriaContabile=categoriaContabile;
            sals[i].descrizione=descrizione;
            sals[i].percentuale=percentuale;
            sals[i].prezzoValore=prezzoValore;
            sals[i].prezzoPercentuale=prezzoPercentuale;
            sals[i].debitoValore=debitoValore;
            sals[i].debitoPercentuale=debitoPercentuale;
            }
            
        }
        
    }
    function destroy(uint id) public{
        delete sals[id];
    }
    
}
