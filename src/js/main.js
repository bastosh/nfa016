/**!
Navigation Button Toggle class
*/
(function() {

// old browser or not ?
if ( !('querySelector' in document && 'addEventListener' in window) ) {
return;
}
window.document.documentElement.className += ' js-enabled';

function toggleNav() {

  // Define targets by their class or id
  var button = document.querySelector('.nav-button');
  var target = document.querySelector('body > nav');

  // click-touch event
  if ( button ) {
    button.addEventListener('click',
    function (e) {
        button.classList.toggle('is-active');
      target.classList.toggle('is-opened');
      e.preventDefault();
    }, false );
  }
} // end toggleNav()

toggleNav();
}());


$(".typed").typed({
    strings: ["assistant d’édition.","traducteur.","relecteur-correcteur.","chargé de comm’.", "développeur web.","Sébastien Pereda."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 5,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: false,
    // false = infinite
    //loopCount: 5,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'text',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
});

$( "#tabs" ).tabs();