document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Order has been placed!');
    
    setTimeout(function() {
        window.location.href = 'new.html'; 
    }, 2000); 
});