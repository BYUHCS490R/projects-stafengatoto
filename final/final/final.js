document.getElementById("feedbackform").addEventListener("submit", function(event)
{
    event.preventDefault();
    document.getElementById("message").textContent = "Thank you! Feedback has been submitted successfully.";
    document.getElementById("feedbackform").requestFullscreen();
});