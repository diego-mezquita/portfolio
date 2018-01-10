console.log('\'Allo \'Allo!');


$(document).ready(function() {
  $( '.js-contact-button' ).click(showContactSidebar);  
});

function showContactSidebar() {
  $( '.js-contact' ).toggleClass('switcher');
  var $buttonText = $( '.js-contact-button-text' );
  $buttonText.text(getContactButtonText($buttonText.text()));
}

function getContactButtonText(currentText) {
  var contactButtonTexts = ['CONTACT', 'CLOSE'];

  return contactButtonTexts.filter(function(text) { return text !== currentText});
}
