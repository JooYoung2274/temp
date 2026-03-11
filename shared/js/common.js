$(function () {

  /* ── 1. Hero 슬라이더 ── */
  if ($('.hero__slider').length) {
    $('.hero__slider').slick({
      autoplay: true,
      autoplaySpeed: 4500,
      speed: 1200,
      fade: true,
      cssEase: 'cubic-bezier(0.7,0,0.3,1)',
      arrows: false,
      dots: true,
      pauseOnHover: false
    });
  }

  /* ── 2. Rooms 슬라이더 ── */
  if ($('.rooms__slider').length) {
    $('.rooms__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      speed: 600,
      prevArrow: '<button class="slick-prev" aria-label="이전"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick-next" aria-label="다음"><i class="fa-solid fa-chevron-right"></i></button>',
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 767,  settings: { slidesToShow: 1, arrows: false, dots: true } }
      ]
    });
  }

  /* ── 3. AOS 초기화 ── */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-out-quart' });
  }

  /* ── 4. 헤더 스크롤 효과 ── */
  var $header = $('#header');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 60) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });

  /* ── 5. 모바일 햄버거 메뉴 ── */
  var $mobileNav = $('#mobileNav');

  $('#hamburgerBtn').on('click', function () {
    $mobileNav.addClass('open');
    $('body').css('overflow', 'hidden');
  });

  $('#mobileNavClose, .mobile-nav a').on('click', function () {
    $mobileNav.removeClass('open');
    $('body').css('overflow', '');
  });

  /* ── 6. 스무스 스크롤 ── */
  $('a[href^="#"]').on('click', function (e) {
    var target = $(this).attr('href');
    if (target.length > 1 && $(target).length) {
      e.preventDefault();
      $('html, body').animate(
        { scrollTop: $(target).offset().top - 80 },
        650,
        'swing'
      );
    }
  });

  /* ── 7. 현재 섹션 Nav 활성화 ── */
  var sections = $('section[id]');
  $(window).on('scroll', function () {
    var scrollY = $(this).scrollTop() + 100;
    sections.each(function () {
      var top    = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id     = $(this).attr('id');
      if (scrollY >= top && scrollY < bottom) {
        $('.nav__list a').removeClass('active');
        $('.nav__list a[href="#' + id + '"]').addClass('active');
      }
    });
  });

});
