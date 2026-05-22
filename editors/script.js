var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'Maryam_&_JustinDaGoats';
groupDesc = '"Editors: The 2 students that were selected made sure that the rest of the groups had someone other than the teachers for questions and advice."';
groupCont = '"Group blog writing here"';
groupTag = 'Content by "Jesus, Gurcheatn"';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupCont = $("#cont").text(groupCont);
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});