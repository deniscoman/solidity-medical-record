var medicalRecordABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "medicAddressFromId",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x127989a5"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getMedicAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x13a6244b"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_medicAddress",
        "type": "address"
      }
    ],
    "name": "getMedicData",
    "outputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_specialization",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x194660b0"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPatientMedics",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x1d097eb6"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_patientAddress",
        "type": "address"
      },
      {
        "name": "_comment",
        "type": "string"
      },
      {
        "name": "_diagnostic",
        "type": "string"
      },
      {
        "name": "_treatment",
        "type": "string"
      }
    ],
    "name": "addMedicalEntry",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2ccf7620"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "patientData",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x2e608c02"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMedicsLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x35021cdd"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_patientAddress",
        "type": "address"
      }
    ],
    "name": "getPatientData",
    "outputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x48e81852"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "userRole",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x534f5680"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ownerOfMedicalEntry",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x55b7172c"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPatientAppointmentIds",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x55d70b72"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_patientAddress",
        "type": "address"
      }
    ],
    "name": "getMedicalEntry",
    "outputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_comment",
        "type": "string"
      },
      {
        "name": "_diagnostic",
        "type": "string"
      },
      {
        "name": "_treatment",
        "type": "string"
      },
      {
        "name": "_department",
        "type": "string"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x5af0baa9"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_patientAddress",
        "type": "address"
      }
    ],
    "name": "getMedicalEntryIds",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x61e0aea1"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_medicAddress",
        "type": "address"
      }
    ],
    "name": "getMedicAppointmentIds",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x6282237f"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "medicData",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x63fcc1d7"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x715018a6"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      }
    ],
    "name": "createNewPatient",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x7a243468"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_medicAddress",
        "type": "address"
      },
      {
        "name": "_dateTime",
        "type": "string"
      },
      {
        "name": "_problem",
        "type": "string"
      }
    ],
    "name": "createAppointment",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x84aea919"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_medicAddress",
        "type": "address"
      },
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_specialization",
        "type": "string"
      }
    ],
    "name": "createNewMedic",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x89e83b5b"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_medicAddress",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getMedicAppointment",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8c0d1185"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8da5cb5b"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "patientMedics",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xaac8f226"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "getPatientAppointment",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xabf7050e"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUserRole",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xbf04a10d"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_medicAddress",
        "type": "address"
      }
    ],
    "name": "giveRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xc468f313"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf2fde38b"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "medicPatients",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xfa3256dc"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "patientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "medicFirstName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "medicLastName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "comment",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "diagnostic",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "treatment",
        "type": "string"
      }
    ],
    "name": "newMedicalEntry",
    "type": "event",
    "signature": "0x6fa79efcd662a2062a99ed2e1ae2f27f120041abeb174a93b7b75c5f64a10b9a"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "firstName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "lastName",
        "type": "string"
      }
    ],
    "name": "newPatient",
    "type": "event",
    "signature": "0x7fce1251ba45c4ee6ee5e1a5c4e6769d23fef10998846904ac26b16aab7fe510"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "firstName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "lastName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "specialization",
        "type": "string"
      }
    ],
    "name": "NewMedic",
    "type": "event",
    "signature": "0x68310ca3a15f0cdecf59d15849ecc152d1aefdab1854fcb205a003e1b54abcf1"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipRenounced",
    "type": "event",
    "signature": "0xf8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c64820"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  }
]