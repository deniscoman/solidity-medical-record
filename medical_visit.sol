pragma solidity ^0.4.19;

import "./ownable.sol";

contract MedicalVisit is Ownable {
    struct Patient {
        string firstName;
        string lastName;
    }

    struct Medic {
        string firstName;
        string lastName;
        string specialization;
    }

    struct MedicalEntry {
        string comment;
        string diagnostic;
        string treatment;
    }

    Patient[] patients;
    Medic[] medics;
    MedicalEntry[] medicalEntries;

    mapping(address => uint) public patientData;
    mapping(address => uint) public medicData;
    mapping(uint => address) public ownerOfMedicalEntry;
    mapping(address => address[]) public medicPatients;

    //medic
    function createNewMedic(address _medicAddress, string _firstName, string _lastName, string _specialization) external onlyOwner {
        uint medicId = medics.push(Medic(_firstName, _lastName, _specialization)) - 1;
        medicData[_medicAddress] = medicId;
    }

    function getMedicData(address _medicAddress) external view returns (string _firstName, string _lastName, string _specialization) {
        uint medicId = medicData[_medicAddress];
        Medic memory medic = medics[medicId];
        return (medic.firstName, medic.lastName, medic.specialization);
    }

    //patient

    function createNewPatient(string _firstName, string _lastName) external {
        uint patientId = patients.push(Patient(_firstName, _lastName)) - 1;
        patientData[msg.sender] = patientId;
    }

    function getPatientData() external view returns (string _firstName, string _lastName) {
        uint patientId = patientData[msg.sender];
        Patient memory patient = patients[patientId];
        return (patient.firstName, patient.lastName);
    }

    //give medic rights

    function giveRights(address _medicAddress) public {
        medicPatients[_medicAddress].push(msg.sender);
    }

    function checkRights(address _medicAddress, address _patientAddress) internal returns (bool) {
        address[] memory patientsAddresses = medicPatients[_medicAddress];
        for(uint i = 0; i<patientsAddresses.length; i++) {
            if (patientsAddresses[i] == _patientAddress){
                return true;
            }
        }

        return false;
    }

    //add new MedicalEntry

    function addMedicalEntry(address _patientAddress, string _comment, string _diagnostic, string _treatment) public {
        require(checkRights(msg.sender, _patientAddress));
        uint medicalEntryId = medicalEntries.push(MedicalEntry(_comment, _diagnostic, _treatment));
        ownerOfMedicalEntry[medicalEntryId] = _patientAddress;
    }

    function getMedicaEntryIds() external constant returns (uint[]) {
        uint[] storage ids;

        for(uint i=0; i<medicalEntries.length; i++) {
            if(ownerOfMedicalEntry[i] == msg.sender) {
                ids.push(i);
            }
        }

        return ids;
    }

    function getMedicalEntry(uint _id) external view returns(string _comment, string _diagnostic, string _treatment) {
        require(ownerOfMedicalEntry[_id] == msg.sender);
        MedicalEntry memory medicalEntry = medicalEntries[_id];

        return(medicalEntry.comment, medicalEntry.diagnostic, medicalEntry.treatment);
    }
}
