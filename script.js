document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    document.getElementById('dataOutput').innerText = `Submitted: ${name}`;
});
