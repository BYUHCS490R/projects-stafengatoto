document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('name').values;
    const idnum = document.getElementById('phone').value.trim();
    const password = document.getElementById('pass').value.trim();


    if (!fullname.includes(" ") || fullname.split(" ").length < 2) {
        alert("Please provide your full name (first and last).");
        return;
    }

    // // Phone number must be exactly 10 digits
    // const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Your phone number must be exactly 10 digits.");
        return;
    }

    alert("Form Submitted Succesfully!");

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
            //document.getElementById('myForm').reset();
            document.getElementById('myform').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
});