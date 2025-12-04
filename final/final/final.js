

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!fullname || !email) {
        alert('Please enter your full name and email.');
        return;
    }

    const formData = {
        name: fullname,
        email: email,
        password: password
    };

    alert("Form Submitted Successfully!");
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET","submit.json",true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert ("Form Submitted Successfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            //document.getElementById('myForm')reset();
            document.getElementById('myForm').innerHTML = '';
            // document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState == 4) {
            alert("Error Submitting form.");
        }
    };
    xhr.send(JSON.stringify(formData));

});