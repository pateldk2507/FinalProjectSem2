var opecity=100,saturate=0,brightness="100%",hue=0,grayscale=0,blur_=0;

$(document).on('input', '#opecity', function() {
        $('#perOpecity').html( $(this).val() + "%" );
        opecity = $('#perOpecity').text();
        Filters(opecity,saturate,brightness,hue,grayscale,blur_);
        // $('#myImage').css("opacity", $(this).val()/100);

});

$(document).on('input', '#Saturation', function() {
    $('#perSaturation').html( $(this).val() + "%" );
    saturate = $(this).val();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    // $('#myImage').css("filter", "saturate(" + $(this).val() + ")");
});

$(document).on('input', '#Brightness', function() {
    $('#perBrightness').html( $(this).val() * 2 + "%" );
    brightness =    $('#perBrightness').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    // $('#myImage').css("filter", "brightness(" + brightness + ")");
});

$(document).on('input', '#Hue', function() {
    $('#perHue').html( $(this).val() +"deg");
    hue =  $('#perHue').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    // $('#myImage').css("filter", "hue-rotate(" + $(this).val() + "deg)");
});

$(document).on('input', '#Grayscale', function() {
    $('#perGrayscale').html( $(this).val() +"%" );
    grayscale =   $('#perGrayscale').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    // $('#myImage').css("filter", "grayscale(" + $(this).val()+ "%)");
});

$(document).on('input', '#Blur', function() {
    $('#perBlur').html( $(this).val() +"px" );
    blur_ = $('#perBlur').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    
});
        

function Filters(opecity_,saturation_,brightness_,hue_,grayscale_,blur) {
    console.log("O" + opecity_);
    console.log("s" + saturation_); 
    console.log("B" + brightness_);
    console.log("H" + hue_ );
    console.log("G" + grayscale_);
    console.log("B" + blur);



    if(saturation_ == 0){
        saturation_ = 1;
    }

    $('#myImage').css({
        "opacity" : opecity_,
        "filter" : "saturate("+saturation_ +")",
        "filter" : "brightness("+ brightness_+")",
        "filter" : "hue-rotate("+hue_+")",
    });
}


function clearText() {
    $('#perOpecity').html("0%");
    $('#perSaturation').html("0%");
    $('#perBrightness').html("0%");
    $('#perHue').html("0deg");
    $('#perGrayscale').html("0%");
    $('#perBlur').html("0%");
}


//change image

var caption = ['First Paint','Second Paint','Third  Paint', 'Forth Paint', 'Fifth Paint'];

function changeImg(id) {
    $('#myImage').attr('src','./FP_images/medium/painting' + id + '.jpg');
    $('#figCap').html(caption[id - 1]);   
}

