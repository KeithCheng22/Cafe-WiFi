function fadeOutTextLogin() {
  var textElement = document.getElementById('textToFadeOut');
  textElement.classList.add('hidden');

  // You can add a delay and then navigate to another page using window.location.href
  setTimeout(function() {
    window.location.href = 'login';
  }, 500); // 500 milliseconds (adjust as needed)
}

function fadeOutTextRegister() {
  var textElement = document.getElementById('textToFadeOut');
  textElement.classList.add('hidden');

  // You can add a delay and then navigate to another page using window.location.href
  setTimeout(function() {
    window.location.href = 'register';
  }, 500); // 500 milliseconds (adjust as needed)
}

// Check if the text was faded out when the page is loaded or shown
document.addEventListener('DOMContentLoaded', checkTextState);
window.addEventListener('pageshow', checkTextState);

function checkTextState() {
  var textElement = document.getElementById('textToFadeOut');
  var isTextFadedOut = sessionStorage.getItem('textFadedOut');

  if (isTextFadedOut === 'true') {
    textElement.classList.add('hidden');
  } else {
    textElement.classList.remove('hidden');
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();