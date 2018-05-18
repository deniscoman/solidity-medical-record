pragma solidity ^0.4.19;

import "./ownable.sol";

contract MedicData is Ownable {

  struct Medic {
      string firstName;
      string lastName;
      string specialization;
  }

  Medic[] medics;

  mapping(address => uint) public medicData;
  mapping(address => address[]) public medicPatients;

  function createNewMedic(address _medicAddress, string _firstName, string _lastName, string _specialization) external onlyOwner {
      uint medicId = medics.push(Medic(_firstName, _lastName, _specialization)) - 1;
      medicData[_medicAddress] = medicId;
  }

  function getMedicData(address _medicAddress) external view returns (string _firstName, string _lastName, string _specialization) {
      uint medicId = medicData[_medicAddress];
      Medic memory medic = medics[medicId];
      return (medic.firstName, medic.lastName, medic.specialization);
  }

}
