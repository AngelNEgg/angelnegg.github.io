var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'CareerSparrow';
groupPar = "Career Readiness"
groupDesc = 'Career readiness is the most important benefit offered to students by schools.';

groupCont1 = "Every student has heard the question, “What do you want to be when you grow up?” Even though most students don’t have the answer yet. We believe that the most important benefit of schools is career readiness. School is more than just classes and grades, it's a place where students build real-world skills and start preparing for their future careers, even if they don’t realize it yet. Career readiness doesn’t require having everything figured out; it starts with gaining experiences and skills that apply anywhere, and the best place for students to do this is in the safe and supportive environment that schools provide.";

groupCont2 = "Some would argue that if a student is uncertain about their career, then school cannot truly prepare them for the future. This view suggests that career readiness only works for students who already know exactly what job they want. At first glance this argument seems reasonable. If students don't yet know what they want to do in the future then can they truly make use of the experiences and skills they gain in school? It also raises an important question about whether schools would be able to support students across all career paths.";

groupCont3 = 'While these are fair arguments, they miss the bigger picture because schools are designed to help students figure things out, not expect them to already know. Being unsure actually makes school more valuable since it gives students time and opportunities to explore different interests and paths. Schools don’t have to prepare students for every single career out there, because if you really think about it, every career has certain core values that they have in common. It is these core values that schools teach their students and in this way schools are able to prepare students for any career they may choose in the future.';

groupCont4 = 'Our claims are not just speculation, evidence supporting our ideas can be seen in most schools throughout New York. Schools provide electives, career and technical education (CTE) programs, and guidance counselors that expose students to different fields. On top of that, students develop important skills like communication, teamwork, and time management skills that every career requires, no matter the field. Through our own experience with CTE programs at Thomas A. Edison High School we can also personally attest to the effectiveness of these programs in preparing students for future careers. I was able to gain over 100 work based learning hours through my CTE class, I was able to speak in depth with industry professionals and I gained experience collaborating with others to create a finished product. Every CTE program at Edison gives students the opportunity to gain valuable experiences and with more than 130 high schools in New York offering CTE programs, thousands of students are being exposed to these specialized learning opportunities.';

groupCont5 = 'Monica Selagea of OneGoal, a nonprofit dedicated to increasing the postsecondary opportunities for students, says “teachers can provide the academic foundation students need, offering instruction that builds critical thinking, problem-solving, and communication skills essential for both college and the workforce.” This statement aptly describes the benefits that schools offer to students as the skills and knowledge gained by students throughout their time in school will benefit them later in their lives.';

groupCont6 = 'Not knowing your career doesn’t mean you aren’t being prepared, it means you’re in the process of discovering it. That’s exactly why school plays such a strong role in career readiness by giving every student the tools to succeed no matter where they end up. Schools expose students to different opportunities including CTE programs, electives, and guidance counselors while helping them build communication, teamwork, and problem-solving skills that matter in almost every field. One source explains, “career readiness directly influences initial employment and job satisfaction.” Another source also states that “career and technical education programs provide students with academic and technical skills, knowledge, and training necessary to succeed in future careers.” Together, schools are not just places for academics, but environments that prepare students for real careers and future success even if they are still figuring out what path they want to take. In the end, school is not supposed to hand every student a perfect career plan. Its real purpose is to help students grow, explore opportunities, and develop the skills they will carry with them for the rest of their lives.';

groupTag = 'Content by Devesh and Ryan G';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupPar = $("#par").text(groupPar);
  
  groupCont1 = $("#cont1").text(groupCont1);
  groupCont2 = $("#cont2").text(groupCont2);
  groupCont3 = $("#cont3").text(groupCont3);
  groupCont4 = $("#cont4").text(groupCont4);
  groupCont5 = $("#cont5").text(groupCont5);
  groupCont6 = $("#cont6").text(groupCont6);
  
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});