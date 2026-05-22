

var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupPar = "Editor Statement";
groupTitle = 'Maryam_&_JustinDaGoats';

groupDesc = '"Editors: The 2 students that were selected made sure that the rest of the groups had someone other than the teachers for questions and advice."';

groupCont1 = 'Throughout history, opportunities for growth and learning have shifted, and school has always been at the center of that conversation. Today, many students feel that school can be boring or that everything taught in class could just be learned online or outside of a traditional classroom. We believe people feel this way because of the resources their schools provide or sometimes fail to provide, and because of their own personal experiences with education. When schools offer more meaningful opportunities, students become more engaged and start to see learning from different perspectives.';

groupCont2 = 'A good example of this is the editor role we were assigned for this project. While other students focused on writing their narratives, our job was different: we had to oversee their work and help elevate it beyond the usual class assignments. Every day, we checked in with them, monitored their progress, and answered any questions they had. Doing this allowed us to see just how differently each person viewed the essential question based on their own experiences. It pushed us to shift our mindset to be more open-minded, more flexible, and more understanding so that we could support our classmates in telling their stories.';

groupCont3 = 'This role also gave us a new appreciation for our teachers. Watching over a group of students, guiding them through challenges, and helping them produce their best work showed us how much effort teachers put in every single day. Seeing the process from their perspective helped us understand just how much care, patience, and behind-the-scenes work go into helping students succeed.';

groupTag = 'Content by "Justin, Maryam"';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupPar = $("#par").text(groupPar);
  groupDesc = $("#desc").text(groupDesc);
  groupCont1 = $("#cont1").text(groupCont1);
  groupCont2 = $("#cont2").text(groupCont2);
  groupCont3 = $("#cont3").text(groupCont3);
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});
