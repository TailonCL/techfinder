// slider

$(document).ready(function() {
  $('.paw').click(function() {
    $(this).find('.ftbox').slideToggle();
  });

});

// glyphs para los nombres

$(document).ready(function() {
  $('.feat').append('<span class="glyphicon glyphicon-collapse-down"; \
  id="mini-glyph"></span>');
});

// cambio de color con mouse

$(document).ready(function() {
  $('.feat').hover(function() {
    $(this).css('background-color', 'lightcyan');
  }, function() {
    $(this).css('background-color', 'lightblue');
  });
});

// aclaracion del color con mouse

$(document).ready(function() {
  $('.feat').hover(function() {
    $(this).fadeTo('fast', 0.8);
  }, function() {
    $(this).fadeTo('fast', 1);
  });
});
