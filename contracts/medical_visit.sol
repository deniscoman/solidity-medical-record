pragma solidity ^0.4.23;


import "./medic_data.sol";
import "./medical_record.sol";

contract MedicalVisit is MedicData, MedicalRecord {

  function addMedicalEntry(address _patientAddress, string _comment, string _diagnostic, string _treatment) public {
    //only medic
    require(checkRights(msg.sender, _patientAddress));
    uint medicId = medicData[msg.sender];
    Medic memory medic = medics[medicId];
    uint medicalEntryId  = medicalEntries.push(MedicalEntry(medic.firstName, medic.lastName, _comment, _diagnostic, _treatment, medic.specialization, now)) - 1;
    ownerOfMedicalEntry[medicalEntryId] = _patientAddress;
    emit newMedicalEntry(_patientAddress, medic.firstName, medic.lastName, _comment, _diagnostic, _treatment);
  }
}
