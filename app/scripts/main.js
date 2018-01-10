console.log('\'Allo \'Allo!');


$(document).ready(function() {
  $( '.js-contact-button' ).click(showContactSidebar);  
});

function showContactSidebar() {
  $( '.js-contact' ).toggleClass('switcher');
  $( '.js-contact-button-text' ).text('CLOSE');
}
