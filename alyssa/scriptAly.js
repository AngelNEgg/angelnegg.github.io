var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'TheSchoolCircle';
groupDesc = '"This is where school becomes more than just classes, it becomes a community, connecting students one story at a time."';

groupCont1 = 'What is school truly for? Many argue that school is for education, building skills, or even for character development. But we think that school is for creating a community; A place where students feel comfortable meeting new people and expressing themselves. Building a community allows students to connect with their classmates and teachers and provides them with a safe space beyond their homes. Overall, this enhances the classroom environment and makes school a more enjoyable experience.';

groupCont2 = 'According to the article, “A Framework for Building Schoolwide Community,” children learn best in caring communities where they feel safe and significant. This emphasizes the importance of healthy relationships and how it really impacts a classroom. More specifically, having a sense of mentorship from teachers can offer personalized support and guidance which is an opportunity many students may not have at home.';

groupCont3 = ("Others believe that school is only for learning and they don't understand the parts that allow us to socialize. But in the New York Times article,“What Grown-Ups Don’t Understand About School” there are several reasons as to why building a community is essential in schools from students perspective . In the article, students state, “People think that school is only for learning, but they’re incorrect, because for me, school is where I spend time with my friends. That’s where I have fun. We spend 80 percent of our life in school.” This quote makes you realize how much time students spend in school, and having a community makes school something to look forward to. I experienced this same feeling when first starting high school but I quickly found my community within my shop class and joined the after school club my freshman year. Joining that club gave me a place where I looked forward to being myself and getting along with other people who have similar interests as me. I met new people from all different grades and school didn't start to feel like a place where I didn’t want to be. Bringing attention to having pure connections will ultimately allow those relationships to last longer and be more genuine.");

groupCont4 = 'Some may argue that building a school community does not benefit every single student. Specifically, it might not benefit more introverted students. These students might feel excluded from the community rather than connected. Although this may be true, a well-developed community does not necessarily require every student to interact the same way. Instead, students can have opportunities to find their own group or community with people just like them. Introverted students can connect with groups that are smaller or quieter instead of being forced into big social groups. So, by recognizing different personality types, schools can create a diverse and inclusive community that benefits both introverted and extroverted students.';

groupCont5 = 'This idea is supported by students and teachers who recognize that social experiences are important, but not the same for everyone. Mr Burdick, an english teacher at Thomas Edison shares that social interactions are a big part of his classroom. He creates a community for his students starting from the beginning of the year. He has opportunities for students to meet new people and incorporates groupwork all throughout the year. In addition, ms hall, another english teacher states, ‘a community means being collaborative and looking out for each other.’';

groupCont6 = 'Furthermore, many students have perspectives on how a community impacts them. Manvir Singh, a student at Thomas Edison shares that a community is when multiple different backgrounds get together to participate and have fun. This highlights how having a diverse community plays a big role is how enjoyable school is. Another student, Abir, states ‘when i play sports at school, winning or losing, we are going through it together and supporting each other.’ This emphasizes the sports aspect in school communities and that whatever happens, you will always have your community with you.';

groupCont7 = 'Ultimately, school is more than just a place for education, it is a place where students build connections that shape their personal experiences. While not every student interacts the same way, creating an inclusive environment allows everyone to feel a part of something. Through these relationships with teachers and students, students gain meaningful connections that will impact them for the rest of their lives. By prioritizing these communities, school will become a place where students feel valued and important.';

groupTag = 'Content by Alyssa Ali';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  
  groupCont1 = $("#cont1").text(groupCont1);
  groupCont2 = $("#cont2").text(groupCont2);
  groupCont3 = $("#cont3").text(groupCont3);
  groupCont4 = $("#cont4").text(groupCont4);
  groupCont5 = $("#cont5").text(groupCont5);
  groupCont6 = $("#cont6").text(groupCont6);
  groupCont7 = $("#cont7").text(groupCont7);
  
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});
