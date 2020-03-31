$("a").click(function(e){
    e.preventDefault();
    switch($(this).attr('href')) {
        case ('#student-div'):
            curr = $('div#student-div');
            break;
        case ('#mentor-div') :
            curr = $('div#mentor-div');
            break;
        case ('#testimonials') :
            curr = $('div#testimonials');
            break;
        case ('#introduction') :
            curr = $('div#introduction');
            break;
        default: 
            curr = $('div#contact');
    }
    $('html, body').animate({
        scrollTop: curr.offset().top
    }, 1000);
});

/**
 * Navigation
 */

$('button.sign').on('click', function() {
    switch ($(this).hasClass('login')) {
        case (true):
            window.location = 'login.html';
            break;
        case (false):
            window.location = 'register.html';
    }  
})

$('button.be-mentor').on('click', function() {
    window.location = 'mentor.html';
});



