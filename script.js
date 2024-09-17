// This script handles modal behavior for the citizenship form
window.onclick = function(event) {
    const modal = document.getElementById('formModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
