var images = {
    man: {
        heading: 'Man Image',
        description: 'Image of a man.',
        path: 'images/man.jpg'
    },
    wizard: {
        heading: 'Wizard Image',
        description: 'Image of a wizard.',
        path: 'images/wizard.jpg'
    },
    beast: {
        heading: 'Beast Image',
        description: 'Image of a beast.',
        path: 'images/beast.jpg'
    }
};


$(document).ready(function() {

    var bodyTarget = $('body');
    var subNavBtn = bodyTarget.find('#subnav-button');

    //when arrow button is clicked add and remove class subnav-toggle
    subNavBtn.on('click', function(event) {
        event.preventDefault();
        bodyTarget.toggleClass('subnav-toggle');
    });

    //when mobile menu is clicked add and remove class show
    $('#menuButton').on('click', function(event) {
        event.preventDefault();
        $('nav ul').toggleClass('show');
    });


    function getImageProps(images) {
        if (images.length == 0) {
            return false;
        } else {
            var imageProps = [];

            Object.keys(images).forEach(function(props) {
                imageProps.push(images[props]);
            });
            return imageProps;
        }
    };

    function onLoad() {
        //after dom is loaded pass images object to getImageProps
        var imageData = getImageProps(images);
        giveAttributes(imageData);
    };

    function giveAttributes(data) {
        $('#image1').attr('src', data[0].path).attr('data-heading', data[0].heading).attr('data-description', data[0].description);
        $('#image2').attr('src', data[1].path).attr('data-heading', data[1].heading).attr('data-description', data[1].description);
        $('#image3').attr('src', data[2].path).attr('data-heading', data[2].heading).attr('data-description', data[2].description);
    };

    onLoad();

});

//event listeners
$('#image1').on('mouseover', function() {
    var image1Heading = $('#image1').attr('data-heading');
    var image1Description = $('#image1').attr('data-description');
    $('#image1-heading').html(image1Heading);
    $('#image1-text').html(image1Description);
    $(this).css({
        'opacity': '0.5'
    });
});

$('#image1').on('mouseout', function() {
    $(this).css({
        'opacity': '1'
    });
    $('#image1-heading').html('');
    $('#image1-text').html('');
});

$('#image2').on('mouseover', function() {
    var image2Heading = $('#image2').attr('data-heading');
    var image2Description = $('#image2').attr('data-description');
    $('#image2-heading').html(image2Heading);
    $('#image2-text').html(image2Description);
    $(this).css({
        'opacity': '0.5'
    });
});

$('#image2').on('mouseout', function() {
    $(this).css({
        'opacity': '1'
    });
    $('#image2-heading').html('');
    $('#image2-text').html('');
});

$('#image3').on('mouseover', function() {
    var image3Heading = $('#image3').attr('data-heading');
    var image3Description = $('#image3').attr('data-description');
    $('#image3-heading').html(image3Heading);
    $('#image3-text').html(image3Description);
    $(this).css({
        'opacity': '0.5'
    });
});

$('#image3').on('mouseout', function() {
    $(this).css({
        'opacity': '1'
    });
    $('#image3-heading').html('');
    $('#image3-text').html('');
});