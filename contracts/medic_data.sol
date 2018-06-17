pragma solidity ^0.4.23;

import "./ownable.sol";

contract MedicData is Ownable {

  event NewMedic(string firstName, string lastName, string specialization);

  struct Medic {
      string firstName;
      string lastName;
      string specialization;
  }

  Medic[] medics;

  mapping(address => uint) public medicData;
  mapping(uint=> address) public medicAddressFromId;
  mapping(address => address[]) public medicPatients;

  function createNewMedic(address _medicAddress, string _firstName, string _lastName, string _specialization) external onlyOwner {
      uint medicId = medics.push(Medic(_firstName, _lastName, _specialization)) - 1;
      medicData[_medicAddress] = medicId;
      medicAddressFromId[medicId] = _medicAddress;
      userRole[_medicAddress] = 2;
      emit NewMedic(_firstName, _lastName, _specialization);
  }

  function getMedicData(address _medicAddress) view returns (string _firstName, string _lastName, string _specialization) {
      uint medicId = medicData[_medicAddress];
      Medic memory medic = medics[medicId];
      return (medic.firstName, medic.lastName, medic.specialization);
  }

  function getMedicAddress(uint _id) external view returns(address) {
    return medicAddressFromId[_id];
  }

  function getMedicsLength() external view returns (uint) {
    return medics.length;
  }
}
