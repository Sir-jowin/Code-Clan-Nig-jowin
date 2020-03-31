// write our function that we returned in our form tag using the onsubmit
error = $('#error-id');

$('form input').on('keyup', function () {
    if($(this).attr('id') == 'username') {
        if($(this).val().length < 3) {
            error
            .css('display', 'block')
            .html('Username too short');
            userError=false;
        }else {
            userError=true;
            error
            .css('display', 'none')
        }
    }
    
    if($(this).attr('id') == 'password'){
        if($(this).val().length < 6){
            error
            .css('display', 'block')
            .html('Password is a little too short!');
            passError = false;
        }else {
            passError = true;
            error
            .css('display', 'none')
        }
    };
    console.log(userError, passError);
    if(userError && passError) {
        $('.submit').removeAttr('disabled');
    } else {
        $('.submit').attr('disabled', 'disabled');
    }
});