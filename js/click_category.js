
$(document).ready(function(){
  $('.button[filter="all"]').addClass(' active');
});

$(document).ready(function(){
  $('.button[filter="all"]').click(function(){
    if($(this).attr('mode') == 'off') {
      $('.button[filter]').attr('mode', 'off');
      $(this).attr('mode', 'on');
      $('.button[filter]').removeClass('active');
      $(this).addClass(' active');
      $('.itemen').show(300);
    }
  });
});

$(document).ready(function(){
  $('.button[filter="wd"]').click(function(){
    if($(this).attr('mode') == 'off') {
      $('.button[filter]').attr('mode', 'off');
      $(this).attr('mode', 'on');
      $('.button[filter]').removeClass('active');
      $(this).addClass(' active');
      $('.itemen').hide(300);
      $('.itemen[filter="wd"]').show(300);
    }
  });
});

$(document).ready(function(){
  $('.button[filter="moc"]').click(function(){
    if($(this).attr('mode') == 'off') {
      $('.button[filter]').attr('mode', 'off');
      $(this).attr('mode', 'on');
      $('.button[filter]').removeClass('active');
      $(this).addClass(' active');
      $('.itemen').hide(300);
      $('.itemen[filter="moc"]').show(300);
    }
  });
});

$(document).ready(function(){
  $('.button[filter="doc"]').click(function(){
    if($(this).attr('mode') == 'off') {
      $('.button[filter]').attr('mode', 'off');
      $(this).attr('mode', 'on');
      $('.button[filter]').removeClass('active');
      $(this).addClass(' active');
      $('.itemen').hide(300);
      $('.itemen[filter="doc"]').show(300);
    }
  });
});

$(document).ready(function(){
  $('.button[filter="ud"]').click(function(){
    if($(this).attr('mode') == 'off') {
      $('.button[filter]').attr('mode', 'off');
      $(this).attr('mode', 'on');
      $('.button[filter]').removeClass('active');
      $(this).addClass(' active');
      $('.itemen').hide(300);
      $('.itemen[filter="ud"]').show(300);
    }
  });
});