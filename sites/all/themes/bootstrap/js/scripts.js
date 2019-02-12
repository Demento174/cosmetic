jQuery( document ).ready(function() {
  jQuery('.header_button.active').attr('href','');
  jQuery('.header_button.active').css({
    'pointer-events':'none'
  })


  jQuery("#carousel_testing").owlCarousel({
    items:1,
    nav: true,
    dots:false,
    navContainer: "#customNav"
  });

  jQuery("#customNav").children("span").text("");

  selectForm();

  jQuery(".block_8 form button").click(function (e) {
    e.preventDefault();
    var form=jQuery(".block_8 form");
    jQuery.ajax({
      type: 'POST',
      method:"POST",
      dataType: "html",
      url: 'custom_form.php',

      data: form.serialize()

    }).success(function(response) {
      jQuery(".block_8 form").css({
        'display':'none'
      });
      jQuery('.form_message').fadeIn('slow');
    }).fail(function() {
      jQuery(".block_8 form").css({
        'display':'none'
      });
      jQuery('.form_message').text('Произошла ошибка свяжитесь с Администратором');
      jQuery('.form_message').fadeIn('slow');
    });
  });




 setInterval(function () {
   stepOpacity()
 },6000)
});
function selectForm(){
  jQuery(' .block_8 form select').change(function () {
    var optionSelected = jQuery(this).find("option:selected");
    var valueSelected  = optionSelected.val();
    var labelText=jQuery('.jq_select');
    if(valueSelected=='phone'){
      labelText.text('НА КАКОЙ ТЕЛЕФОН ПОЗВОНИТЬ?');
    } else if(valueSelected=='viber'){
      labelText.text('Ваш номер телефона в Viber');
    }else if(valueSelected=='whatsApp'){
      labelText.text('Ваш номер телефона в Whataspp');
    }else if(valueSelected=='vk'){
      labelText.text('введите ссылку на Вашу страницу в Вконтакте');

    }else{
      return;
    }
  });
}

function stepOpacity(){

  jQuery('.circle').eq(0).animate({
    opacity:'1'
  },1000);
  setTimeout(function(){
    jQuery('.circle').eq(1).animate({
      opacity:'1'
    },500)
  }, 1000);
  setTimeout(function(){
    jQuery('.circle').eq(2).animate({
      opacity:'1'
    },1000)
  }, 2000);
  setTimeout(function(){
    jQuery('.circle').eq(3).animate({
      opacity:'1'
    },1000)
  }, 3000);
  setTimeout(function(){
    jQuery('.circle').eq(4).animate({
      opacity:'1'
    },1000)
  }, 4000);
  setTimeout(function(){
    jQuery('.circle').eq(0).animate({
      opacity:'0'
    },1000)
    jQuery('.circle').eq(1).animate({
      opacity:'0'
    },1000)
    jQuery('.circle').eq(2).animate({
      opacity:'0'
    },1000)
    jQuery('.circle').eq(3).animate({
      opacity:'0'
    },1000)
    jQuery('.circle').eq(4).animate({
      opacity:'0'
    },1000)
  }, 5000);
}


