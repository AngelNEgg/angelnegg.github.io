var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'Hiddenhalos152';
groupDesc = 'School is for making mistakes.';

groupCont1 = 'No one is perfect, school should be a  place where every student is given the opportunity to grow and learn from making mistakes. Making mistakes in high school are not signs of failure,  it’s a very essential step toward becoming a stronger and better individual. Throughout these four years of high school, students undergo significant changes that shape their character, values, and future. Without the freedom to make and learn from mistakes, students are denied the chance to truly develop into their best selves.';

groupCont2 = ' In the article “Turning Mistakes into-learning opportunities” it states  “Not only are mistakes a crucial step in the learning process, but making them can actually enhance our recall and depth of knowledge.” This confirms  that mistakes are an essential part of both learning and personal growth. Without making mistakes, students would miss valuable opportunities to improve, gain confidence, and deepen their understanding.  There  was a time when I chose not to go to school because I did not feel like attending, and as a result, I missed an important test. I was not able to make it up and this significantly affected my grades. From this experience, I have  learned a lot  about responsibility and consequences. This situation also opened my eyes to the fact that opportunities are not always given a second chance, and I need to take my responsibilities more seriously.';

groupCont3 = 'School is a place where students are expected to make mistakes because mistakes are necessary for learning. In her article Why We Should Embrace Mistakes in School, Amy L. Eva argues that students often benefit more from making errors than from getting everything right the first time. She explains the idea of “productive failure,” where students may struggle or get something wrong at first, but end up understanding the solution even better. This  proves that mistakes are part of the learning process. For example,   in school I did not ask for help when I didn’t understand the material in my chemistry class. I struggled to keep up but stayed quiet instead of speaking up or getting extra help. In my mind this was a mistake because the outcome could have been much better if I had asked questions and used the resources available to me.';

groupCont4 = 'While some people argue that students shouldn’t be allowed to repeatedly make mistakes in school because they may not learn from them, some may  also say high school is the “golden age” where students need to do everything perfectly in order to succeed. They may argue that mistakes can hurt chances of getting into college or earning scholarships. That isn’t entirely true. Many students actually grow and improve through their mistakes.Mistakes are a natural part of learning, and school is a place where students can make those mistakes, reflect on them, and develop new skills and understanding. This proves that failure can be an important step toward growth and success.';

groupCont5 = 'In conclusion, school is much more than a place to memorize information. It is meant to prepare young people for the real world through trial and error. Without mistakes, there is no real learning. Students need opportunities to make mistakes, recover from them, and grow before entering adulthood. In many ways, school is the perfect place to mess up, learn a lesson, and become stronger because of it.';

groupTag = 'Content by Abigail Charlton';

groupPar = 'Making Mistakes'

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupPar = $("#par").text(groupPar);
  groupDesc = $("#desc").text(groupDesc);
  
  groupCont1 = $("#cont1").text(groupCont1);
  groupCont2 = $("#cont2").text(groupCont2);
  groupCont3 = $("#cont3").text(groupCont3);
  groupCont4 = $("#cont4").text(groupCont4);
  groupCont5 = $("#cont5").text(groupCont5);
  
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});