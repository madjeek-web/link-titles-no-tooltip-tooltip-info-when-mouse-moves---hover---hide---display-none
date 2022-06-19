$('a').hover(function(e) {

    $(this).attr('data-title', $(this).attr('title'));
    $(this).removeAttr('title');

  },
  function(e) {

    $(this).attr('title', $(this).attr('data-title'));

  });