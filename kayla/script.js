var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'Kayla_TanishaBloom';
groupDesc = 'School is fwhere values become habits';
groupCont = '"Group blog writing here"';
groupTag = 'Content by Kayla and Tanisha';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupCont = $("#cont").text(groupCont);
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});