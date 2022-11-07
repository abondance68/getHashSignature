// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Store {
    uint256 private variable;
    
    function set(uint256 _variable) public {
        variable =_variable;
    }
    
    
    function get() public view returns (uint256) {
            return variable; 
    }
    
}
               
    
