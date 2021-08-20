$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $('.main__svg-image path');
  var counterUp = $('.main-info__btn-up');
  var counterDown = $('.main-info__btn-down');
  var modal = $('.modal');
  var modalCloseButton = $('.modal__btn-close');
  var viewFlatsButton = $('.main-info__view-flats');

  floorPath.on('mouseover', function (){
    floorPath.removeClass('main__svg-image__current-floor');
    currentFloor = $(this).attr('data-floor');
    $('.main-info__counter').text(currentFloor);
  });

  floorPath.on('click', function () {
    modal.addClass('is-open');
  });

  modalCloseButton.on('click', function (){
    modal.removeClass('is-open');
  });

  viewFlatsButton.on('click', function (){
    modal.addClass('is-open');
  });

  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
      $('.main-info__counter').text(usCurrentFloor);
      floorPath.removeClass('main__svg-image__current-floor');
      $(`[data-floor=${usCurrentFloor}]`).addClass('main__svg-image__current-floor');
    }
  });

  counterDown.on('click', function (){
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGroupping: false});
      $('.main-info__counter').text(usCurrentFloor);
      floorPath.removeClass('main__svg-image__current-floor');
      $(`[data-floor=${usCurrentFloor}]`).addClass('main__svg-image__current-floor');
    }
  });
});