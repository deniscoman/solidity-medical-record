pragma solidity ^0.4.23;

import "./general_data.sol";

contract PatientData is GeneralData {

  event newPatient(string firstName, string lastName);

  struct Patient {
      string firstName;
      string lastName;
  }

  Patient[] patients;

  mapping(address => uint) public patientData;
  mapping(address => address[]) public patientMedics;

  function createNewPatient(string _firstName, string _lastName) external {
      uint patientId = patients.push(Patient(_firstName, _lastName)) - 1;
      patientData[msg.sender] = patientId;
      userRole[msg.sender] = 3;
      emit newPatient(_firstName, _lastName);
  }

  function checkRightsOverPatinet(address _medicAddress, address _patientAddress) internal returns (bool) {
    address[] memory medicAddresses = patientMedics[_patientAddress];
    for(uint i = 0; i<medicAddresses.length; i++) {
      if (medicAddresses[i] == _medicAddress){
        return true;
      }
    }
    return false;
  }

    function getPatientData(address _patientAddress) external view returns (string _firstName, string _lastName) {
      uint patientId;
      if(checkRightsOverPatinet(msg.sender, _patientAddress)) {
         patientId = patientData[_patientAddress];
      }
      else{
         patientId = patientData[msg.sender];
      }

      Patient memory patient = patients[patientId];
      return (patient.firstName, patient.lastName);

  }

  function giveRights(address _medicAddress) public {
      patientMedics[msg.sender].push(_medicAddress);
  }

  function getPatientMedics() view returns(address[]) {
    return patientMedics[msg.sender];
  }
}
