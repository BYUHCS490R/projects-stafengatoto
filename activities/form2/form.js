document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementByID("name").value.trim();
    const idnum = document.getElementByID("idnum").value.trim();

    if (!name.includes(" ") || name.split(" ").length < 3) {
        alert("Please provide your full name (first and last).");
        return;
    }

    // Phone number must be exactly 10 digits
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Your phone number must be exactly 10 digits.");
        return;
    }

    alert("Form Submitted Succesfully!");

    const formData = {
        name: name,
        phone: phone
    };



    console.log(formData);


    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.jason", true);
    xhr.setRequestHeader("Content-Type", "application/jason;character=UTF-8");
            
    xhr.onreadystatechange = function() {
        if (xhr.readystate === 4 && xhr.status === 200) {
            alert("Form submitted successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm').reset();
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));
});