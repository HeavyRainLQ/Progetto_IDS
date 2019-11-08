
pragma solidity >=0.4.18 <0.6.0;

contract RegistroContabilita{
    
    struct RegistroContabilita {
    int128 id;
    int128 cdReg;
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
    
    mapping (int128 => RegistroContabilita) public regss;
    RegistroContabilita[] public regs;  //valores del array
    //mapping (address => User) userStructs
    //address[] public userAddresses;
    
    
    function create(int128 cdReg,string memory tariffa,string memory categoriaContabile,string memory descrizione,int128 percentuale, int128 prezzoValore,int128 prezzoPercentuale,int128 debitoValore,int128 debitoPercentuale) public{
        
        regs.push(RegistroContabilita(nextId,cdReg,tariffa,now,categoriaContabile,descrizione,percentuale,prezzoValore,prezzoPercentuale,debitoValore,debitoPercentuale));
        nextId++;
    }
    
    function read(int128 id) view public returns(int128, int128,string memory,uint,string memory,string memory,int128,int128,int128,int128,int128){
        
        for(uint i=0;i<regs.length;i++)
        {
            if(regs[i].id==id)
            {
             return(regs[i].id,regs[i].cdReg,regs[i].tariffa,regs[i].data,regs[i].categoriaContabile,regs[i].descrizione,regs[i].percentuale,regs[i].prezzoValore,regs[i].prezzoPercentuale,regs[i].debitoValore,regs[i].debitoPercentuale);
            }
            
        }
        
    }
    
     function read_size() view public returns(uint){
        
        return(regs.length);
         
    }
    
    
    function update(int128 id,int128 cdReg, string memory tariffa,uint data,string memory categoriaContabile,string memory descrizione,int128 percentuale,int128 prezzoValore,int128 prezzoPercentuale,int128 debitoValore,int128 debitoPercentuale ) public {
        
        for(uint i=0;i<regs.length;i++)
        {
            if(regs[i].id==id)
            { regs[i].cdReg=cdReg;
             regs[i].tariffa=tariffa;
            regs[i].data=data;
            regs[i].categoriaContabile=categoriaContabile;
            regs[i].descrizione=descrizione;
            regs[i].percentuale=percentuale;
            regs[i].prezzoValore=prezzoValore;
            regs[i].prezzoPercentuale=prezzoPercentuale;
            regs[i].debitoValore=debitoValore;
            regs[i].debitoPercentuale=debitoPercentuale;
            }
            
        }
        
    }
    function destroy(uint id) public{
        delete regs[id];
    }
    
}
