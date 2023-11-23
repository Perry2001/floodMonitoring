fetch('scraped_table2.html')
  .then(response => response.text())
  .then(table2HTML => {
    // Insert the scraped table HTML into the 'tideContainer' div
    const tideContainer = document.getElementById('tideContainer');
    tideContainer.innerHTML = table2HTML;

    // Find the specific img element within the table
    var imgToRemove = document.querySelector('.table th img[alt="Sunrise and sunset"]');

    if (imgToRemove) {
      // Create a new text node with the content "Sunrise and sunset"
      var textNode = document.createTextNode('Sunrise and sunset');

      // Replace the img element with the text node
      imgToRemove.parentNode.replaceChild(textNode, imgToRemove);
    } else {
      console.error('Image not found in scraped_table2.html');
    }
  })
  .catch(error => console.error('An error occurred for table2:', error));