var opecity=100,saturate=0,brightness="100%",hue=0,grayscale=0,blur_=0;

$(document).on('input', '#opecity', function() {
        $('#perOpecity').html( $(this).val() + "%" );
        opecity = $('#perOpecity').text();
        Filters(opecity,saturate,brightness,hue,grayscale,blur_);
});

$(document).on('input', '#Saturation', function() {
    $('#perSaturation').html( $(this).val() + "%" );
    saturate = $(this).val();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    
});

$(document).on('input', '#Brightness', function() {
    $('#perBrightness').html( $(this).val() * 2 + "%" );
    brightness =    $('#perBrightness').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    
});

$(document).on('input', '#Hue', function() {
    $('#perHue').html( $(this).val() +"deg");
    hue =  $('#perHue').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    
});

$(document).on('input', '#Grayscale', function() {
    $('#perGrayscale').html( $(this).val() +"%" );
    grayscale =   $('#perGrayscale').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    
});

$(document).on('input', '#Blur', function() {
    $('#perBlur').html( $(this).val()/10 +"px" );
     blur_ = $('#perBlur').text();
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
    
});
        

function Filters(opecity_,saturation_,brightness_,hue_,grayscale_,blur) {

    if(saturation_ == 0){
        saturation_ = 1;
    }

    $('#myImage').css({
        "opacity" : opecity_,
        "filter" : "saturate("+saturation_ +") brightness("+ brightness_+") hue-rotate("+hue_+") grayscale("+grayscale_+") blur("+ blur +")",
    });
}


function clearText() {
    opecity=100,saturate=0,brightness="100%",hue=0,grayscale=0,blur_=0;
    $('#myForm').trigger("reset");
    $('#perOpecity').html("100%");
    $('#perSaturation').html("0%");
    $('#perBrightness').html("50%");
    $('#perHue').html("0deg");
    $('#perGrayscale').html("0%");
    $('#perBlur').html("0px");
    Filters(opecity,saturate,brightness,hue,grayscale,blur_);
}


//change image

var caption = ['First Paint','Second Paint','Third  Paint', 'Forth Paint', 'Fifth Paint'];

function changeImg(id) {
    clearText();
    $('#myImage').attr('src','./FP_images/medium/painting' + id + '.jpg');
    $('#figCap').html(caption[id - 1]);   
}

