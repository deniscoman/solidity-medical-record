pragma solidity ^0.4.19;

contract PatientData {

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
      newPatient(_firstName, _lastName);
  }

  function getPatientData() external view returns (string _firstName, string _lastName) {
      uint patientId = patientData[msg.sender];
      Patient memory patient = patients[patientId];
      return (patient.firstName, patient.lastName);
  }

  function giveRights(address _medicAddress) public {
      patientMedics[_medicAddress].push(msg.sender);
  }
}
