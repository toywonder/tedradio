// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require materialize-sprockets
//= require_tree .

//= require serviceworker-companion
//
$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(function() {
  $(".form_to_appear").on('click',function(){
    console.log("hoge");
    $(".form_to_close").show();
    $(".form_to_appear").hide();
    $('.search_form').show();
    $('h1').hide();
  });

  $(".form_to_close").on('click',function(){
    $(".form_to_appear").show();
    $(".form_to_close").hide();
    $('.search_form').hide();
    $('h1').show();
  });
});
