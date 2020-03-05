var $ = require('jquery');
window.$ = $;
require('bootstrap');

$('#test-btn').click(
    function(){
        console.log('HIT!!');
    }
);