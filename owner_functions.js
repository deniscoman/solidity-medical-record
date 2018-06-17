function displayOwner() {
  $("#navigation").empty("");
  $("#details").empty("");
  $("#medic").empty("");
  $("#medicalEntry").empty("");
  $("#personalData").empty("");
  $("#separatorBar").empty("");
  $("#separatorBar").append(`Welcome Owner!`)
  $("#navigation").append(`
    <ul id="nav">
      <li id="createMedicID">Create Medic</li>
    </ul>`);
  document.getElementById("createMedicID").addEventListener("click", function() {
    $("#details").empty();
    $("#separatorBar").empty("");
    $("#separatorBar").append(`Create new medic`)
    $("#details").append(
    `<form>
      <table>
        <tr>
          <td class="textOnTheLeft">Medic public address </td>
          <td class="fillInForm"><input type="text" id="medic_address"> </td>
        </tr>
        <tr>
          <td class="textOnTheLeft">First name </td>
          <td class="fillInForm"><input type="text" id="medic_first_name"> </td>
        </tr>
        <tr>
          <td class="textOnTheLeft">Last name </td>
          <td class="fillInForm"><input type="text" id="medic_last_name"> </td>
        </tr>
        <tr>
          <td class="textOnTheLeft">Specialization </td>
          <td class="fillInForm"><input type="text" id="medic_specialization"> </td>
        </tr>
        <tr>
          <td><input type="button" class="btn" value="Create Medic" onclick="createMedic();"></td>
        </tr>
      </table>
    </form>`);
  });

  var medicCreated = medicalRecord.NewMedic({}, {fromBlock: 'latest', toBlock: 'latest'});

  medicCreated.watch(function(error, result) {
    if(!error){
      console.log("here");
      console.log(result.args.firstName);
      $("#separatorBar").empty("");
      $("#separatorBar").append(`Medic ${result.args.firstName} ${result.args.lastName} specialized in ${result.args.specialization} was created!`)
    }else
    console.log(error)
  })
}

function createMedic() {
  var medicAddress = document.getElementById("medic_address").value;
  var firstName = document.getElementById("medic_first_name").value;
  var lastName = document.getElementById("medic_last_name").value;
  var specialization = document.getElementById("medic_specialization").value;

  medicalRecord.createNewMedic(medicAddress, firstName, lastName, specialization, function(error, result) {
    if (!error) {
      $("#separatorBar").empty("");
      $("#separatorBar").append(`Wait for transaction to be validate`);
      $("#details").empty("");
    } else {
      console.log(error);
    }
  });
}

