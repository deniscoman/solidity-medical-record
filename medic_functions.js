function displayMedic(medicAddress) {
  $("#navigation").empty("");
  $("#details").empty("");
  $("#medic").empty("");
  $("#medicalEntry").empty("");
  $("#personalData").empty("");
  $("#separatorBar").empty("");
  $("#separatorBar").append(`Welcome Medic!`)
  $("#navigation").append(`
    <ul id="nav">
      <li id="personalDataID">Personal Data</li>
      <li id="appointmentsID">Appointments</li>
    </ul>`);
  document.getElementById("personalDataID").addEventListener("click", function() {
    $("#medic").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Persoanl Data`)
    getMedicDetails(medicAddress, function(error, result) {
      if (!error) {
        console.log(result);
      } else
        console.log(error);
    });
  })
  document.getElementById("appointmentsID").addEventListener("click", function() {
    $("#medic").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Here is a list of all your appointments`)
    getMedicAppointments(userAccount, function(error, result) {
      if (!error)
        console.log(result);
      else
        console.log(error);
    });
  });
}

function displayCreateMedicalEntry(patientAddress) {
  $("#medic").empty();
  $("#details").empty();
  $("#details").append(
    `<div>
    <form>
      <table>
        <tr>
          <td><span class="textOnTheLeft">Diagnostic</span></td>
          <td><input type="text" id="diagnostic"</td>
        </tr>
        <tr>
          <td><span class="textOnTheLeft">Treatment</span></td>
          <td><input type="text" id="treatment"</span></td>
        </tr>
        <tr>
          <td><span class="textOnTheLeft">Comment</span></td>
          <td><input type="text" id="comment"</td>
        </tr>
        <tr>
          <td><input type="button" class="btn" value="Add appointment" onclick="createMedicalEntry('${patientAddress}');"></td>
        </tr>
      </table>
  </div>`);

  var medicalEntryCreated = medicalRecord.newMedicalEntry({}, {fromBlock: 'latest', toBlock: 'latest'});

  medicalEntryCreated.watch(function(error, result) {
    if(!error){
      console.log("here");
      console.log(result);
      $("#separatorBar").empty("");
      $("#separatorBar").append(`Medical entry was created!`)
    }else
    console.log(error)
  })
}

function getMedicAppointments(userAccount) {
  $("#details").empty();
  medicalRecord.getMedicAppointmentIds(userAccount, function(error, ids) {
    if (!error) {
      console.log(ids);
      ids.forEach(function(appointmentId) {
        console.log(appointmentId);
        $("#details").append(`

                `);
        getMedicAppointmentsDetails(appointmentId, userAccount, function(error, result) {
          if (!error) {
            console.log("here2");
          } else
            console.log(error);
        })
      })
    }
  })
}

function getMedicAppointmentsDetails(appointmentId, userAccount) {
  medicalRecord.getMedicAppointment(userAccount, appointmentId, function(error, appointment) {
    if (!error) {
      medicalRecord.getPatientData(appointment[2], function(error, result) {
        if (!error) {
          $("#details").append(`
          <ul>
            <li><span class="textOnTheLeft">Date:</span> ${appointment[0]}</li>
            <li><span class="textOnTheLeft">Problem:</span> ${appointment[1]}</li>
            <li><span class="textOnTheLeft">First Name:</span> ${result[0]}</li>
            <li><span class="textOnTheLeft">Last Name:</span> ${result[1]}</li>
            <li><input type="button" class="btn" id='${appointment[2]}' value="Show Medical Record" onclick="getMedicalEntries(this.id)";></li>
            <li><input type="button" class="btn" id='${appointment[2]}' value="Create Medical Entry" onclick="displayCreateMedicalEntry(this.id)";></li>
         </ul>`);
        } else
          console.error(error);
      });
    } else
      console.log(error);
  })
}

function createMedicalEntry(patientAddress) {
  var diagnostic = document.getElementById("diagnostic").value;
  var treatment = document.getElementById("treatment").value;
  var comment = document.getElementById("comment").value;

  medicalRecord.addMedicalEntry(patientAddress, comment, diagnostic, treatment, function(error, result) {
    if (!error) {
      displayMedic(userAccount);
    } else {
      console.log(error);
    }
  })
}

function getMedicDetails(medicAddress) {
  return medicalRecord.getMedicData(medicAddress, function(error, result) {
    if (!error) {
      $("#details").empty();
      $("#medic").append(`
       <ul>
          <li><span class="textOnTheLeft">First Name:</span> ${result[0]}</li>
          <li><span class="textOnTheLeft">Last Name:</span> ${result[1]}</li>
          <li><span class="textOnTheLeft">Specialization:</span> ${result[2]}</li>
       </ul>
      `);
    } else
      console.log(error);
  });
}