pragma solidity ^0.4.23;

contract GeneralData {
  // 1-> contract owner
  // 2-> medic
  // 3-> patient
  mapping(address => uint) public userRole;

  function getUserRole() external view returns (uint) {
    return userRole[msg.sender];
  }

  function checkIfArrayContainsAddress(address[] _array, address _address) internal view returns(bool) {
    for(uint i = 0; i<_array.length; i++) {
      if (_array[i] == _address){
        return true;
      }
    }
    return false;
  }
}
