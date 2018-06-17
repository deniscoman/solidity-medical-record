pragma solidity ^0.4.23;
import "./patient_data.sol";

contract MedicalRecord is PatientData {

  event newMedicalEntry(address patientAddress, string medicFirstName, string medicLastName, string comment, string diagnostic, string treatment);

  struct MedicalEntry {
      string medicFirstName;
      string medicLastName;
      string comment;
      string diagnostic;
      string treatment;
      string department;
      uint time;
  }

  MedicalEntry[] medicalEntries;

  mapping(uint => address) public ownerOfMedicalEntry;

  function checkRights(address _medicAddress, address _patientAddress) internal returns (bool) {
    address[] memory medicAddresses = patientMedics[_patientAddress];
    for(uint i = 0; i<medicAddresses.length; i++) {
      if (medicAddresses[i] == _medicAddress){
        return true;
      }
    }
    return false;
  }

  function getMedicalEntryIds(address _patientAddress) public view returns (uint[]) {
      uint[] storage ids;
      uint arrayLength = medicalEntries.length;
      for(uint i=0; i<arrayLength; i++) {
          if(ownerOfMedicalEntry[i] == _patientAddress) {
              ids.push(i);
          }
      }
      return ids;
  }

  function getMedicalEntry(uint _id, address _patientAddress) external view returns(string _firstName, string _lastName, string _comment, string _diagnostic, string _treatment, string _department, uint time) {
      require(ownerOfMedicalEntry[_id] == msg.sender || checkRights(msg.sender , _patientAddress));
      MedicalEntry memory medicalEntry = medicalEntries[_id];

      return(medicalEntry.medicFirstName, medicalEntry.medicLastName, medicalEntry.comment, medicalEntry.diagnostic, medicalEntry.treatment, medicalEntry.department, medicalEntry.time);
  }
}
