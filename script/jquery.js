$('.sub-parent > a').on('click', function(){
    $(this).parent().toggleClass('show');
});
var curId;
$('.settings-flex > .flex-module').on('click', function(){
    $('.settings-flex > .flex-module').removeClass('active');
    $(this).addClass('active');
    curId = $(this).find('.toggle-id').html();
    $('#theme-pallette .section-parent').removeClass('active');
    $('#' + curId).addClass('active');
});

var classLay;

$('#layoutSettings  .layout-choice').on('click', function(){
    $('#layoutSettings  .layout-choice').removeClass('picked');
    classLay = $(this).find('.layout-class').html();
    $('.product-flex').attr('id', classLay);
    $(this).addClass('picked');
})

$('.pin-handle').on('click', function(){
    $(this).toggleClass('active');
    $('#theme-pallette').toggleClass('pinned');
})


if ($(window).width() < 900 ) {
    $("#theme-pallette > .section-parent").mCustomScrollbar({
        scrollInertia: 200,
        axis: "x",
        advanced:{ autoExpandHorizontalScroll:true}
    });
}
else {
    $("#theme-pallette > .section-parent").mCustomScrollbar({
        scrollInertia: 200,
    });
}

var curVal;
$('.custom-range-slider').on('mousedown', function(){
    $(this).on('mousemove', function(){
        curVal = $(this).val();
        $('#mainStoreHeader').css({
            'font-size' : curVal +'px'
        });
    });
});
$('.custom-range-slider').on('click', function(){
    curVal = $(this).val();
    $('#mainStoreHeader').css({
        'font-size' : curVal +'px'
    });
});

//pallette-fonts
var curFont;
$('.font-flex > .font-module').on('click', function(){
    $('.font-flex > .font-module').removeClass('active');
    $(this).addClass('active');
    curFont = $(this).css('font-family');
    $('#mainStoreHeader').css({
        'font-family' : curFont
    });
});
var curBg;
$('#group1Color > .color-module').on('click', function(){
    $('.font-color-flex .color-module').removeClass('active');
    $(this).addClass('active');
    curBg = $(this).css('background-color');
    $('.font-group-1').css({
        'color' : curBg
    });
});
//pallette-fonts
//pallette-background

$('#bgColorFlex > .color-module').on('click', function(){
    $('.color-flex .color-module').removeClass('active');
    $(this).addClass('active');
    curBg = $(this).css('background-color');
    $('.main-store').css({
        'background' : curBg
    });
});

$('#bgImgFlex > .bg-img-module').on('click', function(){
    $('#bgImgFlex .bg-img-module').removeClass('active');
    $(this).addClass('active');
    curBg = $(this).css('background-image');
    $('.main-store').css({
        'background' : curBg
    });
});

$('#productModuleBg > .color-module').on('click', function(){
    $('#productModuleBg .color-module').removeClass('active');
    $(this).addClass('active');
    curBg = $(this).css('background-color');
    $('.product-module').css({
        'background' : curBg
    });
});

$('.custom-toggle').on('click', function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        //Activated state, case in ID
        if ($(this).attr('id') == 'productBgToggle') {
            $('.product-module').css('background', "");
        }
        else if ($(this).attr('id') == 'productFrameToggle') {
            $('.product-module').css('padding', "");
        }
        else if ($(this).attr('id') == 'productDetailBg') {
            $('.product-module > .product-detail').css('background', "");
        }
        else if ($(this).attr('id') == 'productDetailShow') {
            $('.product-module > .product-detail').removeClass('hover-hidden');
        }
        else if ($(this).attr('id') == 'productShadow') {
            $('.product-module').css({
                'box-shadow': '2px 2px 2px 2px rgba(0,0,0,0.23)'
            });
        }
    }
    else {
        //Deactivated state, case in ID
        if ($(this).attr('id') == 'productBgToggle') {
            $('.product-module').css({
                'background': 'none'
            });
        }
        else if ($(this).attr('id') == 'productFrameToggle') {
            $('.product-module').css('padding', "0");
        }
        else if ($(this).attr('id') == 'productDetailBg') {
            $('.product-module > .product-detail').css({
                'background': 'none'
            });
        }
        else if ($(this).attr('id') == 'productDetailShow') {
            $('.product-module > .product-detail').addClass('hover-hidden');
        }
        else if ($(this).attr('id') == 'productShadow') {
            $('.product-module').css({
                'box-shadow': '2px 2px 2px 2px rgba(0,0,0,0)'
            });
        }
    }
});
//pallette-background

$('.product-handle').on('click', function(){
    $(this).toggleClass('active');
});

$('.product-flex-group').on('mouseleave', function(){
    $('.product-handle').removeClass('active');
});



$('#imageController').on('click', '.image-box.ready', function(){
    $('.image-box.ready').first().removeClass('ready').addClass('uploaded').append('<img src="img/dummy/p5.jpg" alt=""> <div class="uploaded-hover"><div class="function-button">Edit</div><div class="function-button remove-image-button">Remove</div></div>');
    // $(this).removeClass('ready').addClass('uploaded').append('<img src="img/dummy/p5.jpg" alt=""> <div class="uploaded-hover"><div class="function-button">Edit</div><div class="function-button remove-image-button">Remove</div></div>');
});

$('#imageController').on('click', '.remove-image-button', function(){
    $(this).parent().parent().removeClass('uploaded');
    $(this).parent().parent().addClass('ready');
    $(this).parent().parent().empty();
});

$('.product-select').on('click', function(){
    if (!$(this).parents('.product-flex-group').hasClass('selected') ) {
        $(this).parents('.product-flex-group').addClass('selected');
        $(this).html('Unselect');
        $('.product-flex-group').addClass('selection-mode');
    }
    else {
        $(this).parents('.product-flex-group').removeClass('selected');
        $(this).html('Select');
    }
});

$('.product-delete').on('click', function(){
    $('.product-flex-group.selected').hide(300);
    // $(this).parents('.product-flex-group').hide(300);
})

var variationParent = '<div class="variation-parent"><input type="text" class="variation-name" value="Variable Name"><input type="text" class="form-input" style="width:70px;"><div class="delete-icon">-</div></div>';


$('#addVariation').on('click', function(){
    $(this).parent().find('.form-input.temp').remove();
    $(this).parent().prepend(variationParent);
})
var thisEl;
$('.main-content').on( 'click', '.delete-icon',function(){
    thisEl = $(this);
    $(this).parents('.variation-parent').remove();
    if ($('.variation-parent').length == 0 ) {
        $('#variationGroup').prepend('<input type="text" class="form-input temp" style="width:90px;">');
    }
})
