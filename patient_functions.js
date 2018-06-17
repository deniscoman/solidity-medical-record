function newAccount() {
  $("#navigation").empty("");
  $("#details").empty("");
  $("#medic").empty("");
  $("#medicalEntry").empty("");
  $("#personalData").empty("");
  $("#separatorBar").empty("");
  $("#separatorBar").append(`Hello! Press Create Pacient to create a new account.`)
  $("#navigation").append(`
  <ul id="nav">
    <li id="createMedicID">Create Pacient</li>
  </ul>`);
  document.getElementById("createMedicID").addEventListener("click", function() {
    $("#details").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Create new pacient`)
    $("#details").append(`
    <form>
      <table>
        <tr>
          <td class="textOnTheLeft">First name</td>
          <td class="fillInForm"><input type="text" id="patient_first_name"> </td>
        </tr>
        <tr>
          <td class="textOnTheLeft">Last name</td>
          <td class="fillInForm"><input type="text" id="patient_last_name"> </td>
        </tr>
          <td><input type="Button" class="btn" value="Create" onclick="createPatient();"></td>
        </tr>
      </table>
    </form>`);
  })

  var patientCreated = medicalRecord.newPatient({}, {fromBlock: 'latest', toBlock: 'latest'});

  patientCreated.watch(function(error, result) {
    if(!error){
      console.log("here");
      console.log(result);
      $("#separatorBar").empty("");
      $("#separatorBar").append(`Patient ${result.args.firstName} ${result.args.lastName} was created! `)
      window.setTimeout( displayPatient(userAccount), 5000 );
    }else
    console.log(error)
  })
}

function createPatient() {
  var firstName = document.getElementById("patient_first_name").value;
  var lastName = document.getElementById("patient_last_name").value;

  medicalRecord.createNewPatient(firstName, lastName, function(error, result) {
    if (!error) {
      $("#separatorBar").empty("");
      $("#separatorBar").append(`Sign transaction and then wait until it will be validate`)
      $("#details").empty("");
    } else {
      console.log(error);
    }
  })
}

function displayPatient(patientAddress) {
  $("#navigation").empty("");
  $("#details").empty("");
  $("#medic").empty("");
  $("#medicalEntry").empty("");
  $("#personalData").empty("");
  $("#separatorBar").empty("");
  $("#separatorBar").append(`Welcome pacient!`)
  $("#navigation").append(`
  <ul id="nav">
    <li id="personalDataID">Personal Data</li>
    <li id="medicsID">Medics</li>
    <li id="myMedicsID">My Medics</li>
    <li id="medicalRecordID">Medical Record</li>
    <li id="AppointmentsID">My Appointments</li>
  </ul>`);
  document.getElementById("personalDataID").addEventListener("click", function() {
    $("#medic").empty();
    $("#medicalEntry").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Personal Data`)
    getPatientDetails(patientAddress, function(error, result) {
      if (!error) {
        console.log(result);
      } else
        console.log(error);
    });
  });
  document.getElementById("medicsID").addEventListener("click", function() {
    $("#medic").empty();
    $("#medicalEntry").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Here is a list of all available medics`);
    $("#details").empty();
    medicalRecord.getMedicsLength(function(error, result) {
      for (let id = 0; id < result; id++) {
        medicalRecord.medicAddressFromId(id, function(error, medicAddress) {
          if (!error) {
            medicalRecord.getMedicData(medicAddress, function(error, result) {
              if (!error) {
                $("#details").empty();
                $("#medic").append(`
                 <ul>
                    <li><span class="textOnTheLeft">First Name</span>: ${result[0]}</li>
                    <li><span class="textOnTheLeft">Last Name</span>: ${result[1]}</li>
                    <li><span class="textOnTheLeft">Specialization</span>: ${result[2]}</li>
                    <li><input type="button" class="btn" id='${medicAddress}' value="Create appointment" onclick="displayCreateAppointment(this.id);"></li>
                 </ul>`);
              } else
                console.log(error);
            });
          } else
            console.log(error);
        });

      }
    })
  });
  document.getElementById("myMedicsID").addEventListener("click", function() {
    $("#medic").empty();
    $("#medicalEntry").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Here is a list of all your medics!`)
    getAllowedMedics(function(error, result) {
      if (!error) {
        console.log(result);
      } else
        console.log(error);
    });
  });
  document.getElementById("medicalRecordID").addEventListener("click", function() {
    $("#medic").empty();
    $("#medicalEntry").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Here is your medical record`)
    getMedicalEntries(userAccount, function(error, result) {
      if (!error) {
        console.log(result);
      } else
        console.log(error)
    });
  });
  document.getElementById("AppointmentsID").addEventListener("click", function() {
    $("#details").empty();
    $("#medic").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Here is a list with all your appointments`)
    medicalRecord.getPatientAppointmentIds(function(error, ids) {
      if (!error) {
        ids.forEach(function(appointmentId) {
          medicalRecord.getPatientAppointment(appointmentId, function(error, appointment) {
            if (!error) {
              medicalRecord.getMedicData(appointment[3], function(error, result) {
                if (!error) {
                  $("#details").append(`
                  <ul>
                    <li><span class="textOnTheLeft">Date:</span> ${appointment[0]}</li>
                    <li><span class="textOnTheLeft">Problem:</span> ${appointment[1]}</li>
                    <li><span class="textOnTheLeft">First Name:</span> ${result[0]}</li>
                    <li><span class="textOnTheLeft">Last Name:</span> ${result[1]}</li>
                    <li><span class="textOnTheLeft">Specialization:</span> ${result[2]}</li>
                  </ul>`);
                }
              })
            } else
              console.error(error);
          });
        })
      } else
        console.error(error);
    })
  });
}

function preCreateAppointment(id) {
  console.log(id);
  medicalRecord.getMedicAddress(parseInt(id), function(error, medicAddress) {
    if (!error) {
      displayCreateAppointment(medicAddress);
    } else
      console.log(error)

  })
}
$(function() {
  $("#date").datepicker();
});

function displayCreateAppointment(medicAddress) {
  $("#medic").empty();
  $("#medicalEntry").empty();
  $("#details").empty();
  $("#separatorBar").empty("");
  $("#separatorBar").append(`Create new appointment`)
  $("#details").append(`
  <form>
    <table>
      <tr>
        <td><span class="textOnTheLeft">Date</span></td>
        <td><input type="text" id="date"></td>
      </tr>
      <tr>
        <td><span class="textOnTheLeft">Problem</span></td>
        <td><input type="text" id="problem"></td>
      </tr>
      <tr>
        <td><input type="button" class="btn" value="Add" onclick="createAppointment('${medicAddress}');"></td>
      </tr>
    </table>
  </form>`);
  console.log(medicAddress);
}

function createAppointment(medicAddress) {
  console.log(medicAddress);
  var date = document.getElementById("date").value;
  var problem = document.getElementById("problem").value;;
  medicalRecord.createAppointment(web3.toChecksumAddress(medicAddress), date, problem, function(error, result) {
    if (!error) {
      //displayPatient();
    } else
      console.log(error);
  })
}

function addMedic() {
  var medicAddress = document.getElementById("medic_address").value;

  medicalRecord.giveRights(medicAddress, function(error, result) {
    if (!error) {
      displayPatient();
    } else
      console.log(error);
  })
}

function createPatient() {
  var firstName = document.getElementById("patient_first_name").value;
  var lastName = document.getElementById("patient_last_name").value;

  medicalRecord.createNewPatient(firstName, lastName, function(error, result) {
    if (!error) {
      displayPatient(userAccount);
    } else {
      console.log(error);
    }
  })
}

function getMedicalEntry(medicalEntryId, patientAddress) {
  return medicalRecord.getMedicalEntry(medicalEntryId, patientAddress, function(error, result) {
    if (!error) {
      console.log("here");
      $("#details").append(`
       <ul>
          <li><span class="textOnTheLeft">Medic First Name:</span> ${result[0]}</li>
          <li><span class="textOnTheLeft">Medic Last Name:</span> ${result[1]}</li>
          <li><span class="textOnTheLeft">Comment:</span> ${result[2]}</li>
          <li><span class="textOnTheLeft">Diagnostic:</span> ${result[3]}</li>
          <li><span class="textOnTheLeft">Treatment:</span> ${result[4]}</li>
          <li><span class="textOnTheLeft">Department:</span> ${result[5]}</li>
          <li><span class="textOnTheLeft">Date:</span> ${Date(result[6])}</li>
       </ul>`);
    } else
      console.error(error);
  });
}

function getPatientDetails(patientAddress) {
  return medicalRecord.getPatientData(patientAddress, function(error, result) {
    if (!error) {
      $("#details").empty();
      $("#details").append(`
        <ul>
          <li><span class="textOnTheLeft">First Name:</span> ${result[0]}</li>
          <li><span class="textOnTheLeft">Last Name:</span> ${result[1]}</li>
       </ul>`);
    } else
      console.error(error);
  });
}

function getAllowedMedics() {
  return medicalRecord.getPatientMedics(function(error, result) {
    if (!error) {
      result.forEach(function(medicAddress) {
        medicalRecord.getMedicData(medicAddress, function(error, result) {
          if (!error) {
            $("#details").empty();
            $("#medic").append(`
             <ul>
                <li><span class="textOnTheLeft">First Name:</span> ${result[0]}</li>
                <li><span class="textOnTheLeft">Last Name:</span> ${result[1]}</li>
                <li><span class="textOnTheLeft">Specialization:</span> ${result[2]}</li>
                <li><input type="Submit" class="btn" id='${medicAddress}' value="Create appointment" onclick="displayCreateAppointment(this.id);"></li>
             </ul>`);
          } else
            console.log(error);
        });
      })
    } else
      console.log(error);
  });
}

function getMedicalEntries(patientAddress) {
  medicalRecord.getMedicalEntryIds(patientAddress, function(error, result) {
    if (!error) {
      console.log("here2")
      $("#details").empty();
      result.forEach(function(medicalEntryId) {
        getMedicalEntry(medicalEntryId, patientAddress, function(error, result) {
          if (!error) {
            console.log(result);
          } else
            console.log(error);
        });
      });
    }
  })
}