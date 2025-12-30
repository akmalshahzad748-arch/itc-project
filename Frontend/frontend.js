 function After_Clicking_Button(){
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value
    const contact = document.getElementById("Number").value;
    const age = document.getElementById("Age").value;
    const city = document.getElementById("City").value;
    const blood_group = document.getElementById("Blood").value;

    let letters_pattern = /^[A-Za-z\s]+$/;
    let Number_Pattern = /^[0-9]+$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let allcorrect = 1;
 
    // if(name===""){
    //     alert("Name is Required");
    //     allcorrect = 0;
        
    // }
    // if(!letters_pattern.test(name)){
    //     alert("Only letters in the name Box");
    //     allcorrect = 0;
        
    // }
    // if(email===""){
    //     alert("Email is required");
    //      allcorrect = 0;
    // }
    // if(!emailPattern.test(email)){
    //     alert("Email format is not correct");
    //      allcorrect = 0;
    // }
    // if(contact===""){
    //     alert("Phone Number is Required");
    //      allcorrect = 0;
    // }
    // if(!Number_Pattern.test(contact)){
    //     alert("Phone Number Contain Numbers only");
    //      allcorrect = 0;
    // }
    // if(age===""){
    //     alert("Age is required");
    //      allcorrect = 0;
    // }
    // if(!Number_Pattern.test(age)){
    //     alert("Age Contain Numbers Only");
    //     allcorrect = 0;
    // }
    // if(city===""){
    //     alert("City is required");
    //     allcorrect = 0;
    // }
    // if(!letters_pattern.test(city)){
    //     alert("City Contain Letters only");
    //     allcorrect = 0;
    // }
    // if(blood_group===""){
    //     alert("Select Blood Group");
    //     allcorrect = 0;
    // }

    if(allcorrect===1){

        const Donor_data = {
            name,
            age,
            city,
            contact,
            email,
            blood_group,
        };

        fetch("http://localhost:5000/add-donor" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(Donor_data)
        })
        .then(res=> res.json())
        .then(data => {
            alert(data.message);
        })
        .catch(err =>{
            alert("Server Error");
            console.log(err);
        });
        
        return false;
    }
    }