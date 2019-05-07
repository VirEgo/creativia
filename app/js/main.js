$('.carousel').carousel({
    interval: 3000
});

$(function() {
    $('.chart').easyPieChart({
        barColor:'#ff0036',
    });
});

$('#accordion-icon').on('click', function(){
  $(this).toggleClass('closed');
  console.log("click");
});

