pragma solidity ^0.4.23;

import "./medical_visit.sol";

contract Appointment is MedicalVisit {

  event newAppointment(string dateTime, string problem);

  struct AppointmentData {
    string dateTime;
    string problem;
    address patient;
    address medic;
  }
  AppointmentData[] appointments;

  mapping (address => uint[]) medicAppointments;
  mapping (address => uint[]) patientAppointments;

  function createAppointment(address _medicAddress, string _dateTime, string _problem) public {
    uint appointmentId = appointments.push(AppointmentData(_dateTime, _problem, msg.sender, _medicAddress)) - 1;
    medicAppointments[_medicAddress].push(appointmentId);
    patientAppointments[msg.sender].push(appointmentId);
    emit newAppointment(_dateTime, _problem);

    if(!checkIfArrayContainsAddress(medicPatients[_medicAddress], msg.sender)) {
      medicPatients[_medicAddress].push(msg.sender);
    }
    if(!checkIfArrayContainsAddress(patientMedics[msg.sender], _medicAddress)) {
      giveRights(_medicAddress);
    }
  }

  function getMedicAppointmentIds(address _medicAddress) public view returns (uint[]) {
    return medicAppointments[_medicAddress];
  }

  function getMedicAppointment(address _medicAddress, uint _id) public view returns (string, string, address, address) {
    AppointmentData memory appointment = appointments[_id];

    return (appointment.dateTime, appointment.problem, appointment.patient, appointment.medic);
  }

  function getPatientAppointmentIds() public view returns (uint[]) {
    return patientAppointments[msg.sender];
  }

  function getPatientAppointment(uint _id) public view returns (string, string, address, address) {
    AppointmentData memory appointment = appointments[_id];

    return (appointment.dateTime, appointment.problem, appointment.patient, appointment.medic);
  }
}
