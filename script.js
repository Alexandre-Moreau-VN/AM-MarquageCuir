document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const maxSize = 20 * 1024 * 1024; 
    
    if (file && file.size > maxSize) {
        alert('Taille de fichier maximum authorisée 20MB');
        this.value = ''; // Clear the input
    }
});

// focus sur label name dans form pour matoirs
document.getElementById("contact-link-matoirs").addEventListener("click", function() {
    setTimeout(function() {
    document.getElementById("input-name").focus();
    }, 300); // délai à ajuster selon la durée du scroll
});

// focus sur label name dans form pour ALP
document.getElementById("contact-linkalp").addEventListener("click", function() {
    setTimeout(function() {
    document.getElementById("input-name").focus();
    }, 300); // délai à ajuster selon la durée du scroll
});

// focus sur label name dans form pour EP
document.getElementById("contact-linkep").addEventListener("click", function() {
    setTimeout(function() {
    document.getElementById("input-name").focus();
    }, 300); // délai à ajuster selon la durée du scroll
});
