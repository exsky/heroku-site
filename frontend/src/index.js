var $ = require('jquery');
window.$ = $;

require('bootstrap');
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

$('#test-btn').click(
    function(){
        console.log('HIT!!');
    }
);