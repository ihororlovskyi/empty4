$(document).ready(function(){
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    $('body').toggleClass('is-overflowed');
    e.preventDefault();
  });
});




$(function() {
  $('.sidebar-menu a[href^="/coriolan-ui/' + location.pathname.split("/coriolan-ui/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/game-hall/' + location.pathname.split("/game-hall/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/lottery/' + location.pathname.split("/lottery/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/tournaments/' + location.pathname.split("/tournaments/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/promotions/' + location.pathname.split("/promotions/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/shop/' + location.pathname.split("/shop/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/news/' + location.pathname.split("/news/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/news/' + location.pathname.split("/news/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/video/' + location.pathname.split("/video/")[1] + '"]').addClass('active');
  $('.sidebar-menu a[href^="/plugin/' + location.pathname.split("/plugin/")[1] + '"]').addClass('active');
});




$('.open-popup-link').magnificPopup({
  type: 'inline',
  removalDelay: 500,
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true,
});
