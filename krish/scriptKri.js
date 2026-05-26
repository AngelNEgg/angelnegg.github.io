var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'FrndsFV';
groupDesc = 'Friends are the family we choose';
groupPar = 'Making Friends';

groupCont1 = 'Attending school is a big part of being a student, but school is about more than just going to class, doing homework, and taking tests (i.e., going to school for classes, doing homework and taking tests), a school experience consists of forming friendly bonds with peers, interacting with students who are not necessarily friends and building connections that make the school experience more meaningful.. The social aspect of school is just as important (if not more so) than the academic side of school. Establishing friendship bonds has a positive influence on the ability of students to succeed academically. Studies show that students often do better in school when they have at least one friend or classmate they can relate to and trust, which supports the assertion that friendship goes far beyond simple socialization. In other words, friendships can help students feel more comfortable and confident with their schoolwork. For this reason, having friends at school may help reduce feelings of isolation and increase levels of student engagement, willingness to seek help and determination to do their best even when facing obstacles to the completion of their academic work. Because of this, making friends should be seen as one important purpose of going to school.';

groupCont2 = 'A friend can help with small things that end up making a big difference. They could clarify an assignment, tell you what you missed while you were away, study with you before an exam, or simply support you through a tough time. These things may seem small, but they can make school feel much easier to handle. According to the article “Building Friends at School” the relationship between the development of healthy friendships and the mental health of children are interconnected. This is important because school itself is typically filled with a lot of stress, and being surrounded by people who love and support you can be vital to your coping with stressors in the school environment. Additionally, having friends within the school can also allow students to explore and expose themselves to new interests. A friend may suggest a new activity for you, such as joining a club or sport, or perhaps introducing you to a place to volunteer, or even a job, or even tell you that you should consider pursuing something that you had never even thought of in terms of a career. Therefore, having friends is not simply an additional part of attending school; rather, they are there for your support, and encourage you to feel good about yourself and be available to new ideas.';

groupCont3 = `Friends can also provide assistance in contemplating one's future. “The diverse group of friends I made opened up new avenues for personal or work-related aspirations,” said one author in an article about how schools should encourage more diverse student friendships during the coronavirus pandemic. This shows that friends can introduce us to new people, ideas, and opportunities we may not have thought about before.. In some situations, being among others who share your goals and values can provide you with the same level of support that having the right answers would normally give. A common objection made against this is that school should be about learning content and obtaining good grades. However, even though grades are important for college and future jobs, friendships still play an important role in school. In fact, developing friendships enhances the likelihood that you will remain loyal to your school and ultimately achieve success.`;

groupCont4 = 'According to the article “Strengthening School Connectedness to Increase Student Success,” students who feel connected to their school are more likely to attend regularly, perform well academically, and graduate in comparison to those who do not. This indicates that if a student feels connected to their school through friendships, those connections will aid with academic success and success later in life as well. In addition to being a location to learn, school is a location where students develop relationships with other people who will support and influence them positively throughout their lives as learners and as individuals. Both friendships and relationships can also assist students during challenging times, help them with schoolwork, expose them to new activities, and provide them with a sense of belonging. School is not just about sitting in a classroom; there are also opportunities to interact and communicate, develop relationships, and make those relationships work positively. Therefore, another important reason to go to school is to create friends, as those friendships will assist students throughout their educational journey and in the future with regards to their academics, emotions, and personal growth.';

groupTag = 'Content by Krish Kumar';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupPar = $("#par").text(groupPar);
  
  groupCont1 = $("#cont1").text(groupCont1);
  groupCont1 = $("#cont2").text(groupCont2);
  groupCont1 = $("#cont3").text(groupCont3);
  groupCont1 = $("#cont4").text(groupCont4);
  
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});