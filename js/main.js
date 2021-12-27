$(function(){

  let sw = 0;

  $('.header .m_btn').click(function(){
    if(sw==0){
      $('.cover').stop().fadeIn(300);
      $('.header .gnb_wrap').animate({'left':0});
      $('.wrap').animate({'left':274});
      $('.m_btn').addClass('on');
      sw = 1;
    }else{
      $('.cover').stop().fadeOut(300);
      $('.header .gnb_wrap').animate({'left':-274});
      $('.wrap').animate({'left':0});
      $('.m_btn').removeClass('on');
      sw = 0;
    }
  });

  $('.header .m_search').click(function(){
      $('.header .search_wrap').show();
  });
  $('.header .btn_close').click(function(){
      $('.header .search_wrap').hide();
  });

  //모바일 버튼 바뀌는 명령
  $('.header .m_btn').click(function(){

  });

  // ***************슬라이더**************
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });























});