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
