document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollButton');
    const lowerSections = Array.from(document.querySelectorAll('.lower'));
    const numberOfImagesToShow = 3;
    let startIndex = 0;

    showImages(startIndex);

    scrollButton.addEventListener('click', () => {
        
        startIndex += numberOfImagesToShow;

        if (startIndex >= lowerSections.length) {
            startIndex = 0;
        }

        showImages(startIndex);

        lowerSections[startIndex].scrollIntoView({ behavior: 'smooth' });
    });

    function showImages(startIndex) {
        for (let i = 0; i < lowerSections.length; i++) {
            if (i >= startIndex && i < startIndex + numberOfImagesToShow) {
                lowerSections[i].style.display = 'block';
            } else {
                lowerSections[i].style.display = 'none';
            }
        }
    }
});

function redirectToForm() {
    window.location.href = "form.html";
}
