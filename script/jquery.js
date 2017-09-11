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
var checkBoxes

$('body').on('click', '.custom-toggle', function(){
    $(this).toggleClass('active');
    checkBoxes = $(this).parent().find('input');
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
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

//jo-checkbox
var template = '<div class="custom-toggle" id=""><div class="toggle-belt">On <div class="toggle-ball"></div> Off</div></div>';
var templateActive = '<div class="custom-toggle active" id=""><div class="toggle-belt">On <div class="toggle-ball"></div> Off</div></div>';
$('.jo-checkbox').each(function(i){
    if ($(this).is(':checked')) {
        $(this).wrap('<div class="jo-checkparent">'+templateActive+'</div>');
    }
    else {
        $(this).wrap('<div class="jo-checkparent">'+template+'</div>');
    }
});
//jo-checkbox

//UI-DRAGGABLE-------------START
$(function() {
    $(".product-sortable").sortable({
        cancel: ".product-header",
        update: function( event, ui ) {priorityArranger();}
    });
    $(".product-sortable").disableSelection();
});
priorityArranger();
function priorityArranger(){
    $('.product-flex-group').not('.uncounted').each(function(i){
        $(this).find('.product-id').html(i);
    });
}
//UI-DRAGGABLE-------------END

//pallette-background
$('.product-handle').on('click', function(){
    $(this).toggleClass('active');
    if (!$(this).parents('.product-flex-group').hasClass('selected') ) {
        $(this).parents('.product-flex-group').addClass('semi-selected');
    }
    else {

    }
});

$('.product-flex-group').on('mouseleave', function(){
    $('.product-handle').removeClass('active');
    $(this).removeClass('semi-selected');
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

var currentMode;

$('.product-select').on('click', function(){
    if (!$(this).parents('.product-flex-group').hasClass('selected') ) {
        $(this).parents('.product-flex-group').addClass('selected');
        $(this).parents('.product-flex-group').removeClass('semi-selected');
        $(this).html('Unselect');
        currentMode = 'SelectionMode';
    }
    else {
        $(this).parents('.product-flex-group').removeClass('selected');
        $(this).html('Select');
    }
});


//PRODUCT DELETION AND NOTIFICATION
var idTemp = 0;
var popupTemplate = $('<div class="popup-notif-parent delete-popup" id="'+idTemp+'">Product Deleted<div class="undo-button">Undo</div><div class="close-button">x</div></div>');
var popupCounter = 0;
var productCounter = 0;
var myInterval;
$('.product-delete').on('click', function(){
    popupCounter = $('.popup-notif-parent').length;
    productCounter = $('.product-flex-group.selected').length + $('.product-flex-group.semi-selected').length;
    $('.product-flex-group.selected').hide(300).addClass('deleteGroup-'+popupCounter).addClass('uncounted').removeClass('selected');
    $(this).parents('.product-flex-group').hide(300).addClass('deleteGroup-'+popupCounter).addClass('uncounted').removeClass('selected');
    notifPopup();
    setTimeout(function(){notifPositioner();}, 10);
    clearInterval(myInterval);
    notifTimer();
    priorityArranger();
});
$('body').on('click', '.undo-button', function(){
    $(this).parent().remove();
    idTemp = $(this).parent().attr('id');
    $('.'+idTemp).show(300);
    $('.'+idTemp).removeClass('uncounted');
    $('.'+idTemp).find('.product-select').html('Select');
    $('.product-flex-group').removeClass(idTemp);
    notifPositioner();
    priorityArranger();
});
$('body').on('click', '.close-button', function(){
    $(this).parent().remove();
    idTemp = $(this).parent().attr('id');
    $('.'+idTemp).remove();
    notifPositioner();
    priorityArranger();
});
function notifPopup(){
    popupCounter = $('.popup-notif-parent').length;
    idTemp = 'deleteGroup-'+popupCounter;
    $('body').append('<div class="popup-notif-parent delete-popup" id="'+idTemp+'"><div class="timer-parent"><div class="timer-bar"></div></div><span class="number">"'+productCounter+'" </span> product(s) deleted.<div class="undo-button">Undo</div><div class="close-button">x</div></div>');
}
function notifPositioner(){
    $('.popup-notif-parent').each(function(i){
        $(this).css({
            bottom: (i*70)+65 +'px',
            opacity: 1
        });
    });
}
var tempWidth, curEl;
function notifTimer(){
    myInterval = setInterval(function () {
        console.log('checkInterval');
        $('.popup-notif-parent').each(function(){
            tempId = $(this).attr('id');
            tempWidth = $(this).find('.timer-bar').width();
            $(this).find('.timer-bar').css({
                width: tempWidth -1+'px'
            });
            if (tempWidth == 0) {
                $(this).remove();
                $('.'+tempId).remove();
                priorityArranger();
            }
            notifPositioner();
        });
        if ($('.popup-notif-parent').length == 0) {
            clearInterval(myInterval);
        }

        // clearInterval(myInterval);
    }, 100);

}
//PRODUCT DELETION AND NOTIFICATION

//variation
// var variationParent = '<div class="variation-parent"><input type="text" class="variation-name" value="Variable Name"><input type="text" class="form-input" style="width:70px;"><div class="delete-icon">-</div></div>';
// $('#addVariation').on('click', function(){
//     $(this).parent().find('.form-input.temp').remove();
//     $(this).parent().prepend(variationParent);
// })
// var thisEl;
// $('.main-content').on('click', '.delete-icon',function(){
//     thisEl = $(this);
//     $(this).parents('.variation-parent').remove();
//     if ($('.variation-parent').length == 0 ) {
//         $('#variationGroup').prepend('<input type="text" class="form-input temp" style="width:90px;">');
//     }
// })

var variationParent = '<div class="variation-parent"><input type="text" class="variation-name varname" placeholder="Variation Text" name="varname[]" required><input type="text" class="form-input varqty qtyinput" style="width:70px;" name="varqty[]" value="1"><div class="unlimited-icon unpressed">~</div><div class="delete-icon">-</div></div>';

$('#addVariation').on('click', function(){
    $(this).parent().find('#qty').remove();
    $(this).parent().prepend(variationParent);
})
var thisEl;
$('.main-content').on('click', '.delete-icon',function(){
    thisEl = $(this);
    $(this).parents('.variation-parent').remove();
    if ($('.variation-parent').length == 0 ) {
        $('#variationGroup').prepend('<input type="text" min="1" id="qty" name="qty" placeholder="Input stock" class="form-input qtyinput temp" value="1" style="width:90px;">');
    }
})

$('.main-content').on('keyup', '.variation-name', function(){
    if ($(this).val() == "") {
        console.log('empty');
        $(this).css({
            'border': '1px solid red'
        });
    }
    else {
        $(this).css('border', '')
    }
});

// var deleteNotif = 0;
//
// function notifHandle(){
//
// }
