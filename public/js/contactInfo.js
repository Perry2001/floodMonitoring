const contactForm = document.getElementById('modalSubscriptionForm');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('[name="name"]').value;
    const phoneNumber = contactForm.querySelector('[name="phoneNumber"]').value;

    // Generate a unique UID for the contact (user)
    const uid = firebase.database().ref().child('contacts').push().key;

    // Save the name and phone number under separate child nodes with the same UID
    firebase.database().ref('contacts/name/' + uid).set(name);
    firebase.database().ref('contacts/number/' + uid).set(phoneNumber)
        .then(() => {
            // Data saved successfully
            alert('Contact saved successfully.');
            // Clear the form
            location.reload();
        })
        .catch(error => {
            console.error('Error saving contact:', error);
            alert('An error occurred while saving the contact.');
        });
});



/*/ Function to retrieve all phone numbers
function getAllPhoneNumbers() {
    const phoneNumberRef = firebase.database().ref('contacts/number');

    phoneNumberRef.once('value')
        .then(snapshot => {
            const phoneNumbers = [];
            snapshot.forEach(childSnapshot => {
                const phoneNumber = childSnapshot.val();
                phoneNumbers.push(phoneNumber);
            });

            // Now, phoneNumbers array contains all phone numbers
            console.log(phoneNumbers);
        })
        .catch(error => {
            console.error('Error retrieving phone numbers:', error);
        });
}

// Call the function to retrieve all phone numbers
getAllPhoneNumbers();*/