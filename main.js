$(function(){

  // 紐⑤컮�� gnb

  $('.btn_m_gnb').click(function(){
    $('.m_gnb').animate({'right':0},300).css({'overflow':'auto'});
    $('body').css({'overflow':'hidden'});
  });
  $('.btn_m_close').click(function(){
    $('.m_gnb').animate({'right':'-100%'},300).css({'overflow':'hidden'});
    $('body').css({'overflow':'auto'});
  });

  $('.m_gnb_list>li').click(function(){
    $(this).toggleClass('on').find('.m_depth2').slideToggle(300).parent().siblings().removeClass('on').find('.m_depth2').slideUp(300);
  });

  // �ㅻ뜑 gnb

  $('.header_gnb>li').mouseenter(function(){
      $('.depth2').slideDown(300);
      $('.header_top').css({'background':'#f2f2f2'}).addClass('on');
      $('.header_inner').addClass('on');
      $('.gnb_background').stop().animate({'height':325},300);
  });
  $('.header_gnb').mouseleave(function(){
      $('.depth2').hide();
      $('.header_top').css({'background':'none'}).removeClass('on');
      $('.header_inner').removeClass('on');
      $('.gnb_background').stop().animate({'height':0},300);
  });
  
  var lang_sw = true;
  $('.btn_lang>a').click(function(){
      if(lang_sw==true){
          $('.lang_list').show();
          $('.btn_lang').addClass('on');
          lang_sw=false;
      } else {
          $('.lang_list').hide();
          $('.btn_lang').removeClass('on');
          lang_sw=true;
      }
  });
  $('.btn_lang').mouseleave(function(){
      $('.lang_list').hide();
      $('.btn_lang').removeClass('on');
      lang_sw=true;
  });


  var i = 0;
  setInterval(function(){
      if(i<vod.length&&i%2==1){
          $('.main_vod1').fadeIn(1000).attr('src',vod[i]);
          $('.main_vod2').fadeOut(1000);
          setTimeout(function(){
            $('.main_vod2').attr('src','');
          },1000);
          i++;
      } else if(i<vod.length&&i%2==0){
          $('.main_vod2').fadeIn(1000).attr('src',vod[i]);
          $('.main_vod1').fadeOut(1000);
          setTimeout(function(){
            $('.main_vod1').attr('src','');
          },1000);
          i++;
      }
      else {
          i=0;
      }
  },9000);
  


  // 硫붿씤 鍮꾩＜�� 紐⑤떖

  $('.btn_modal>li').click(function(){
      var modal_index = $(this).index();
      $(this).addClass('on').siblings().removeClass('on');
      $('.cover').fadeIn(300);
      $('.list_modal>li').eq(modal_index).addClass('on');
  });
  $('.btn_modal_close').click(function(){
      $('.cover').fadeOut(300);
      $('.list_modal>li').removeClass('on');
  });
  
  // �ㅼ쓬 �섏씠吏� �대룞 踰꾪듉

  $('.btn_scroll').click(function(){
      var s1_scroll = $('#section1_area').offset().top;
      $('body,html').animate({scrollTop:s1_scroll},300);
  })

  $('.btn_m_play').click(function(){
      if(confirm("�숈쁺�곸쓣 �ъ깮�섏떆寃좎뒿�덇퉴?") == true){
      }
      else{
          return false;
      }
  })

  // �뱀뀡 1

  $(window).scroll(function(){
      var section1_top = $('#section1_area').offset().top-500;
      var section2_top = $('#section2_area').offset().top-500;
      if($(this).scrollTop()>=section1_top){
          $('.section1_wrap').addClass('on');
      } 
      if($(this).scrollTop()>=section2_top){
          $('.s2_left_wrap').addClass('on');
          $('.s2_rightTop_wrap').addClass('on');
      }
  });


  // �뱀뀡1 �몃쾭 �쒖뼱

  $('.list_service>li').mouseenter(function(){
      $(this).siblings().addClass('off');
  });
  $('.list_service>li').mouseleave(function(){
      $(this).siblings().removeClass('off');
  });

  // �뱀뀡1 紐⑤컮�� �щ씪�대뱶

  const swiper_m_s1 = new Swiper('.m_visual_slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });




  // �뱀뀡 2 �щ씪�대뱶

  const swiper_news = new Swiper('.news_slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      simulateTouch: false,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });


    const swiper_m_news = new Swiper('.m_news_slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 15,
      simulateTouch: false,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });


  //   �명꽣

    $('.btn_family').click(function(){
      $('.family_list').slideToggle(300);
      $('.btn_family').toggleClass('on');
    });




  //   紐⑤컮�� 諛섏쓳��

  

  $(window).resize(function(){
      var rewidth = $(this).width();
      console.log(rewidth);
      if(rewidth<=1153&&rewidth>741){
        $('.main_modal>h2>img').attr('src','./images/m_mainVis_tit1.png');
        $('.modalImg1').attr('src',"./images/m_mainVis_pop1.jpg");
        $('.modalImg2').attr('src',"./images/m_mainVis_pop2.jpg");
        $('.modalImg3').attr('src',"./images/m_mainVis_pop3.jpg");
        $('.modalImg4').attr('src',"./images/m_mainVis_pop4.jpg");
        $('.modalImg5').attr('src',"./images/m_mainVis_pop5.jpg");
        $('.modalImg6').attr('src',"./images/m_mainVis_pop6.jpg");
        $('.btn_scroll').attr('src','./images/m_mainVis_scroll_btn.png');
        $('.section1>h2>img').attr('src',"./images/mainCon1_tit.png");
      } else if(rewidth<=741){
          $('.modalImg1').attr('src',"./images/m_mainVis_pop1.jpg");
          $('.modalImg2').attr('src',"./images/m_mainVis_pop2.jpg");
          $('.modalImg3').attr('src',"./images/m_mainVis_pop3.jpg");
          $('.modalImg4').attr('src',"./images/m_mainVis_pop4.jpg");
          $('.modalImg5').attr('src',"./images/m_mainVis_pop5.jpg");
          $('.modalImg6').attr('src',"./images/m_mainVis_pop6.jpg");
          $('.btn_scroll').attr('src','./images/m_mainVis_scroll_btn.png');
          $('.main_modal>h2>img').attr('src','./images/m_mainVis_tit2.png');
          $('.btn_view>img').attr('src','./images/m_mainVis_pop_btn.gif');
          $('.section1>h2>img').attr('src',"./images/m_mainCon1_tit.png");
          $('.more').attr('src','./images/m_main_over_btn.png');
          $('.s2_boxArrow').attr('src','./images/m_main_over_btn.png');
      } else{
          $('.main_modal>h2>img').attr('src','./images/mainVis_tit1.png');
          $('.modalImg1').attr('src',"./images/mainVis_pop1.jpg");
          $('.modalImg2').attr('src',"./images/mainVis_pop2.jpg");
          $('.modalImg3').attr('src',"./images/mainVis_pop3.jpg");
          $('.modalImg4').attr('src',"./images/mainVis_pop4.jpg");
          $('.modalImg5').attr('src',"./images/mainVis_pop5.jpg");
          $('.modalImg6').attr('src',"./images/mainVis_pop6.jpg");
          $('.btn_view>img').attr('src','./images/mainVis_pop_btn.gif');
          $('.section1>h2>img').attr('src',"./images/mainVis_tit1.png");
          $('.more').attr('src','./images/main_over_btn.png');
          $('.s2_boxArrow').attr('src','./images/main_over_btn.png');
          location.reload()
      }
  });

  var rewidth = $(this).width();
  console.log(rewidth);
  if(rewidth<=1153&&rewidth>741){
    $('.main_modal>h2>img').attr('src','./images/m_mainVis_tit1.png');
    $('.modalImg1').attr('src',"./images/m_mainVis_pop1.jpg");
    $('.modalImg2').attr('src',"./images/m_mainVis_pop2.jpg");
    $('.modalImg3').attr('src',"./images/m_mainVis_pop3.jpg");
    $('.modalImg4').attr('src',"./images/m_mainVis_pop4.jpg");
    $('.modalImg5').attr('src',"./images/m_mainVis_pop5.jpg");
    $('.modalImg6').attr('src',"./images/m_mainVis_pop6.jpg");
    $('.btn_scroll').attr('src','./images/m_mainVis_scroll_btn.png');
    $('.section1>h2>img').attr('src',"./images/mainCon1_tit.png");
  } else if(rewidth<=741){
      $('.modalImg1').attr('src',"./images/m_mainVis_pop1.jpg");
      $('.modalImg2').attr('src',"./images/m_mainVis_pop2.jpg");
      $('.modalImg3').attr('src',"./images/m_mainVis_pop3.jpg");
      $('.modalImg4').attr('src',"./images/m_mainVis_pop4.jpg");
      $('.modalImg5').attr('src',"./images/m_mainVis_pop5.jpg");
      $('.modalImg6').attr('src',"./images/m_mainVis_pop6.jpg");
      $('.btn_scroll').attr('src','./images/m_mainVis_scroll_btn.png');
      $('.main_modal>h2>img').attr('src','./images/m_mainVis_tit2.png');
      $('.btn_view>img').attr('src','./images/m_mainVis_pop_btn.gif');
      $('.section1>h2>img').attr('src',"./images/m_mainCon1_tit.png");
      $('.more').attr('src','./images/m_main_over_btn.png');
      $('.s2_boxArrow').attr('src','./images/m_main_over_btn.png');
      $('.main_vod1').attr('src','');
      $('.main_vod2').attr('src','');
  } else{
      $('.main_modal>h2>img').attr('src','./images/mainVis_tit1.png');
      $('.modalImg1').attr('src',"./images/mainVis_pop1.jpg");
      $('.modalImg2').attr('src',"./images/mainVis_pop2.jpg");
      $('.modalImg3').attr('src',"./images/mainVis_pop3.jpg");
      $('.modalImg4').attr('src',"./images/mainVis_pop4.jpg");
      $('.modalImg5').attr('src',"./images/mainVis_pop5.jpg");
      $('.modalImg6').attr('src',"./images/mainVis_pop6.jpg");
      $('.btn_view>img').attr('src','./images/mainVis_pop_btn.gif');
      $('.section1>h2>img').attr('src',"./images/mainVis_tit1.png");
      $('.more').attr('src','./images/main_over_btn.png');
      $('.s2_boxArrow').attr('src','./images/main_over_btn.png');
  }
});