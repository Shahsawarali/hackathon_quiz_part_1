document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var rollNumber = document.getElementById('rollNumber').value;
    var name = document.getElementById('name').value;
    var batch = document.getElementById('batch').value;
    var section = document.getElementById('section').value;
    
    var formData = [rollNumber, name, batch, section];//array    
    document.getElementById('studentForm').reset();
});
