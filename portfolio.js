var typed = new Typed('.text', {
    strings: ["Data Analyst", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.getElementById('contact_form').addEventListener('submit', function() {
    setTimeout(function(){
        const inputs = document.querySelectorAll('#contact_form input');
    inputs.forEach(input => input.value = '');

    },1000);
    
});