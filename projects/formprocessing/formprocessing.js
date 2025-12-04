console.log("loaded");
document.getElementById('myform').addEventListener('submit', function(event) {
    console.log("Submit pressed")
    event.preventDefault();

    const fullname = document.getElementById('name').value;
    const idnum = document.getElementById('phone').value.trim();
    const password = document.getElementById('pass').value.trim();


    if (!fullname.includes(" ") || fullname.split(" ").length < 2) {
        alert('Please provide your full name (first and last).');
        return;
    }

    // 10 digits only
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(idnum)) {
        alert('Your phone number must be exactly 10 digits.');
        return;
    }

    // alert("Form Submitted Succesfully!");

    const formData = {
        name: fullname,
        phone: idnum,
        password: pass
    };
    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;character=UTF-8");
            
    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            // document.getElementById('myForm').reset();
            document.getElementById('myform').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
});