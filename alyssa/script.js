var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'TheSchoolCircle';
groupDesc = 'This is where school becomes more than just classes, it becomes a community, connecting students one story at a time ';
groupCont = '"Group blog writing here"';
groupTag = 'Content by Alyssa Ali';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupCont = $("#cont").text(groupCont);
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});