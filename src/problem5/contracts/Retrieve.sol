pragma solidity ^0.8.9;
import "hardhat/console.sol";

contract Retrieve {

    struct Balance {
        string token;
        uint balance;
    }

    function getBalances(address Address, string[] memory tokens)
        public
        returns (Balance [] memory)    
    {
        Balance [] memory result = new Balance[] (tokens.length);
        console.log("Started getBalances() function, address is ", Address);
        for (uint i = 0; i < tokens.length; i++){
            
            (bool success, bytes memory data) = address(Address).call(abi.encodeWithSignature("balanceOf(address)", tokens[i]));
            console.log("retrieve token balance from ", tokens[i], " is ", success);
            if (success){
                console.logBytes(data);
                uint256 bal = abi.decode(data, (uint256));
                console.log("balance is ", bal);
                result[i] = Balance(tokens[i], bal);
                console.log("Retrieved balance of ", bal, " from address ", tokens[i]);
            }
        }
        return result;
    }

}