$(document).on('input', '#opecity', function() {
        $('#perOpecity').html( $(this).val() + "%" );
        $('#myImage').css("opacity", $(this).val()/100);

});

$(document).on('input', '#Saturation', function() {
    $('#perSaturation').html( $(this).val() + "%" );
    $('#myImage').css("filter", "saturate(" + $(this).val() + ")");
});

$(document).on('input', '#Brightness', function() {
    $('#perBrightness').html( $(this).val() + "%" );
    $('#myImage').css("filter", "brightness(" + $(this).val()/50 + ")");
});

$(document).on('input', '#Hue', function() {
    $('#perHue').html( $(this).val() +"deg");
    $('#myImage').css("filter", "hue-rotate(" + $(this).val() + "deg)");
});

$(document).on('input', '#Grayscale', function() {
    $('#perGrayscale').html( $(this).val() +"%" );
    $('#myImage').css("filter", "grayscale(" + $(this).val()+ "%)");
});

$(document).on('input', '#Blur', function() {
    $('#perBlur').html( $(this).val() +"px");
    Filters();
    // $('#myImage').css("filter", "blur(" + $(this).val()/50+ "px)");
    // $('#myImage').css('-webkit-filter','grayscale(20%)  blur(1px)');
});
        

function Filters(opecity,saturation,brightness,hue,grayscale,blur) {
    $('#myImage').css('-webkit-filter','grayscale('+ $('#perGrayscale').val() +')  blur('+ $('#perBlur').val()+')');

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

