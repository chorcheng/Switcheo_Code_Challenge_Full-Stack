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
// // Defines a contract named `HelloWorld`.
// // A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
// contract HelloWorld {

//    //Emitted when update function is called
//    //Smart contract events are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.
//    event UpdatedMessages(string oldStr, string newStr);

//    // Declares a state variable `message` of type `string`.
//    // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
//    string public message;

//    // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
//    // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
//    constructor(string memory initMessage) {

//       // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
//       message = initMessage;
//    }

//    // A public function that accepts a string argument and updates the `message` storage variable.
//    function update(string memory newMessage) public {
//       string memory oldMsg = message;
//       message = newMessage;
//       emit UpdatedMessages(oldMsg, newMessage);
//    }
// }