
 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";


    apiKey: "AIzaSyAu7k7yB-HsTQfYBw4zrm-Qwagqs5BGGS0",
    authDomain: "seeker-25366.firebaseapp.com",
    databaseURL: "https://seeker-25366-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "seeker-25366",
    storageBucket: "seeker-25366.appspot.com",
    messagingSenderId: "251850028530",
    appId: "1:251850028530:web:45a2e9b4e2ebe30c32a76b"
  };

 
  const app = initializeApp(firebaseConfig);

  import {getDatabase, ref, get, set, child, update, remove}
        from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"

        const db = getDatabase();


        var name = document.querySelector("#name");
        var id = document.querySelector("#id");
        var license = document.querySelector("#license");
        var number = document.querySelector("#number");
        var id1 = document.querySelector("#id1");
        var address = document.querySelector("#address");
        var phone = document.querySelector("#phone");
        var email = document.querySelector("#email");

        var insertBtn = document.querySelector("#insert");


        function InsertData() {
            set(ref(db, "People/"+ id.value),{
                Pharmacy_Name: name.value,
                Pharmacy_Id_number:id.value,
                Pharmacy_License_Number: license.value,
                Pharmacy_identification_number: number.value,
                Tax_identification_number: id1.value,
                Pharmacy_Address: address.value,
                Phone_Number: phone.value,
                Email_Address: email.value
                
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        insertBtn.addEventListener('click', InsertData);
