// SPDX-License-Identifier: SIMPLE_STORAGE_CONTRACT

pragma solidity 0.5.16; // specify version

contract SimpleStorage {
    string public data;

    function set(string memory _data) public{
        data = _data;
    }

    function get() view public returns(string memory){
        return data;
    }
}