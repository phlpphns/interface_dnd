// Get the drop zone element
const dropZone = document.getElementById('dropZone');

// Handle the dragover event to allow the drop
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = '#f7f7f7'; // Optional visual effect
});

// Handle the dragleave event to reset the styling
dropZone.addEventListener('dragleave', () => {
  dropZone.style.backgroundColor = '';
});

// Handle the drop event
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = '';

  // Access the dropped files
  const files = e.dataTransfer.files;

  // Process each file
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Display the file name
    const fileInfo = document.createElement('p');
    fileInfo.textContent = file.name;
    document.getElementById('fileList').appendChild(fileInfo);

    // Perform further file handling, such as uploading or reading the file contents
    // You can use FileReader API or make AJAX requests to handle the file as needed
    // Example:
    // const reader = new FileReader();
    // reader.onload = (event) => {
    //   const fileContents = event.target.result;
    //   // Do something with the file contents
    // };
    // reader.readAsText(file);
  }
});
