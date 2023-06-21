/**
 * 
 * @param {*} evt refers to the event being acted upon, this event is ideally the 'keydown' event
 * function to accept only numbers in an input field
 */
function numbersOnly(evt) {
  evt = evt || window.event;

  const noSpecialKeys =
    !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.key !== "Backspace";

  if (noSpecialKeys) {
    var charCode = typeof evt.which == "undefined" ? evt.keyCode : evt.which;

    const finalTest = charCode && /\d/.test(String.fromCharCode(charCode));

    // console.log("charcode", String.fromCharCode(charCode), finalTest);
    if (!finalTest) evt.preventDefault();
  }
}
