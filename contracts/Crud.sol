pragma solidity >=0.4.18 <0.6.0;

contract Crud{
    
    struct User{
        uint id;
        string name;
        
    }
    
    uint public nextId;
    
    mapping (uint => User) public userss;
    User[] public users;  //valores del array
    //mapping (address => User) userStructs
    //address[] public userAddresses;
    
    
    function create(string memory name) public{
        
        users.push(User(nextId,name));
        nextId++;
    }
    
    function read(uint id) view public returns(uint, string memory){
        
        for(uint i=0;i<users.length;i++)
        {
            if(users[i].id==id)
            {
             return(users[i].id,users[i].name);
            }
            
        }
        
    }
    
     function read_size() view public returns(uint){
        
        return(users.length);
         
    }
    
    
    function update(uint id, string memory name) public {
        
        for(uint i=0;i<users.length;i++)
        {
            if(users[i].id==id)
            {
             users[i].name=name;
            }
            
        }
        
    }
    function destroy(uint id) public{
        delete users[id];
    }
    
}