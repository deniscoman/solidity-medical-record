pragma solidity ^0.4.19;

import "./medical_visit.sol";

contract Appointment is MedicalVisit {
  struct AppointmentData {
    string dateTime;
    uint duration;
    address patient;
  }

  mapping (address => AppointmentData[]) medicAppointments;

  function createAppointment(address _pattientAddress, string _dateTime, uint _duration) public {
    medicAppointments[msg.sender].push(AppointmentData(_dateTime, _duration, _pattientAddress));
  }

  function getMedicAppointmentIds(address _medicAddress) public view returns (uint[]) {
    uint arrayLength = medicAppointments[_medicAddress].length;
    uint[] storage ids;

    for(uint i = 0; i< arrayLength; i++){
      ids.push(i);
    }

    return ids;
  }

  function getMedicAppointment(address _medicAddress, uint _id) public view returns (string, uint, address) {
    AppointmentData[] storage appointments = medicAppointments[_medicAddress];
    AppointmentData storage appointment = appointments[_id];

    return (appointment.dateTime, appointment.duration, appointment.patient);
  }
}
