var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'MetaphorMuncher';
groupDesc = '"School helps build social skills by placing students in a shared environment with other students where they must learn how to navigate throughout their years in school with cooperation, conflict and communication."';
groupCont = '"Group blog writing here"';
groupTag = 'Content by "Cordell and Muhammad"';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupCont = $("#cont").text(groupCont);
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});