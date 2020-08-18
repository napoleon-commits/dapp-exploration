// SPDX-License-Identifier: SIMPLE_SMART_CONTRACT

pragma solidity 0.5.16; // specify version

contract HelloWorld {
    function hello() pure public returns(string memory) {
        return 'Hello World!';
    }
}