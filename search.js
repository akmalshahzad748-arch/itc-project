function search(event){

    event.preventDefault();
    const blood_group = document.getElementById("Blood").value;
    const city = document.getElementById("City").value;

       let letters_pattern = /^[A-Za-z\s]+$/;
       let allcorrects = 1;

       if(city===""){
        alert("Please Enter City Name");
         allcorrects = 0;
       }
       else if (!letters_pattern.test(city)){
        alert("Enter only letters in the City box");
         allcorrects = 0;
       }
       if(blood_group==="" || blood_group==="Select Blood Group"){
        alert("Please Select a blood-Group");
        allcorrects = 0;
       }

       if(allcorrects==1){

        fetch(`http://localhost:5000/search-donor?blood_group=${encodeURIComponent(blood_group)}&city=${encodeURIComponent(city)}`)
        .then(res => res.json())
        .then(data => {
          console.log("FULL RESPONSE:", data);
          const results = document.getElementById("result-container");
          results.innerHTML="";

            if (!data.success) {
              results.innerHTML = "<p>No donor found</p>";
              return;
  }

          if(data.donors.length===0){
            results.innerHTML= "<P> No Donor Found </p>";
            return;
          }

          data.donors.forEach( donor => {
            results.innerHTML += `
            <div class="donor_card">
            <p><b>Name:</b> ${donor.name}</p>
            <p><b>Blood Group:</b> ${donor.blood_group}</p>
            <p><b>City:</b> ${donor.city}</p>
            <p><b>Contact:</b> ${donor.contact}</p>
            <hr>
            </div>`;

          });
        })

        .catch(err => {
          alert("Server Error");
          console.log(err);
        });
       }
}