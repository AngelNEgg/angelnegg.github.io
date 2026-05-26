var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'SceneStarLarmin';
groupDesc = 'Students utilize school as a place to create a support system whether its with staff or friends. If students are doing well emotionally, they will perform much better academically. ';
groupCont = '"Group blog writing here"';
groupTag = 'Content by Lamia and Narmin';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupCont = $("#cont").text(groupCont);
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});
