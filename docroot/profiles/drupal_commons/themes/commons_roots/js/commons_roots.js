function commons_search_site(){
  $('#search .search_submit').trigger('click');
}

function commons_search_user(){
  window.location = "/search/user/" + $('#search .search-input').val();
}

function commons_search_group(){
  window.location = commons_search_group_action + '?keys=' + $('#search .search-input').val();
}

function commons_search_pos(){
  var search_pos = $('#search-box').offset();
  var search_width = $('#search-box').width();
  var search_height = $('#search-box').height();
  var options_width = $('#commons-search-options').width();
  
  $('#commons-search-options').width(options_width);
  
  $('#commons-search-options').css({
    'left':search_pos.left + search_width - options_width + 'px',
    'top':search_pos.top + search_height + 'px'
  });
}

var commons_search_group_action;

$(document).ready(function(){
  var commons_search_links = '<li class="commons-search-site"><a href="javascript:commons_search_site();">Site</a></li><li class="commons-search-user"><a href="javascript:commons_search_user();">People</a></li>';
  
  if($('#views-exposed-form-og-search-default').length > 0){
    commons_search_group_action = $('#views-exposed-form-og-search-default').attr('action');
    commons_search_links = commons_search_links + '<li class="commons-search-group"><a href="javascript:commons_search_group();">' + $('h1.title').text() + '</a></li>';
  }
  
  $('body').append('<ul id="commons-search-options">' + commons_search_links + '</ul>');
  
  commons_search_pos();
  
  $('.commons-search-user, .commons-search-group').hide();
  
  $('#commons-search-options').hover(function(){
    $('#commons-search-options').addClass('search-options-open');
    $('.commons-search-user, .commons-search-group').show();
  },function(){
    $('#commons-search-options').removeClass('search-options-open');
    $('.commons-search-user, .commons-search-group').hide();
  });
  
  $(window).resize(function() {
    commons_search_pos();
  });
});