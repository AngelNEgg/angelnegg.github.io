var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'Straightouttalectures';
groupDesc = 'Schools should teach real life experiences';
groupPar = "Real Life Experience"

groupCont1 = 'During my first two years of high school I didn’t fully appreciate the opportunities that were available to me. I believed that being on cheer and dance was enough to make me stand out on a college application. However, by Junior year I realized schools should encourage students to gain experiences outside the classroom that prepare them for the real-world. I wanted to become more involved in activities beyond sports and push myself out of my comfort zone. That realization led me to join clubs focused on community service, food drives, park cleanups and cultural appreciation. Through these experiences I developed important skills like communication, problem-solving, collaboration and leadership. From my perspective, while I was doing community service I had to collaborate with the other volunteers and hand out food to the hundreds of families that were waiting in line for hours. Although volunteering didn’t really last a while, I still acquired a set of skills that I use in my day-to-day life. While academic knowledge is important, it alone is not enough to prepare students for adulthood. Many students graduate without knowing how to manage responsibilities, work professionally, or handle real-life challenges. By incorporating more real-world learning opportunities into schools, students can build independence, gain practical life skills and feel more prepared for their future careers and responsibilities.';

groupCont2 = 'Real-world learning is important because it helps students prepare for situations they will eventually face in life. In the article “The Importance of Real-World Learning for Students” by Amanda Avallone suggests that “real-world learning also provides the unique benefits, motivations, and opportunities of tackling real problems in the environments in which they occur, in all their messiness and urgency”.This quote creates an idea that real world learning can provide “unique benefits” that can be applied in real world environments and helps students handle unpredictable and difficult situations and become unpredictable and messy. I personally found this relatable because as students we learn better when we experience things for ourselves instead of only reading about them in an article. Real-world learning helps students be taught to socialize, gain opportunities and learn how to solve problems in different situations.';

groupCont3 = 'Students that are exposed to real-life situations that can possibly happen as they get older. Are able to develop a clearer sense of direction for their own future. To Include, from the article “The Power Of Real World Learning” it states “These experiences help students gain a clear understanding of their strengths and interests, aiding them in making informed choices about future careers - whether in a trade, a profession, or entrepreneurship.”This strengthens the idea that when we practice real world skills, we get a clearer understanding about the steps we can take for our future and start to have a clearer path of the different opportunities we have available. In my own experience the shop classes in my school offer a trade that you can use for your future careers, if you choose to pursue them .This gives me an option for a career and a set of skills  I can use for a possible future. In short, I am able to use my specialized classes to help me get a clearer sense of direction to my own future. ';

groupCont4 = `On the other hand, some people may believe schools providing real-world experience is unrealistic to actual job environments, and it’s important to understand that school is a time to enjoy their adolescence without the pressure of “work”. While it is true that some school simulations can feel artificial, the alternative is leaving students completely unprepared. Psychological studies often suggest that “over-schedueling” students with professional responsibilities can lead to burnout and a loss of the creative freedom that is essential to teenage development. With that being said, learning life skills doesn't have to be stressful. In fact, research from the American Psychological Association shows that students who learn real-world skills in school feel more confident and less anxious about life after graduation. By teaching these things now, we actually make life easier for students later." Instead of being stressed and confused when they move out, they will feel ready and prepared to tackle problems they may have struggled with before`;

groupCont5 = 'In short, while grades are important and enjoying your youth is important, they are not the only thing that matters or defines a student’s success. Schools should make sure students are prepared for the real world, not just for a test. When schools teach essential skills like communication, problem solving, and money management, they help students become independent. By giving students these tools now, we make sure that when they graduate they feel ready and excited for their future instead of being confused or overwhelmed by adult responsibilities. Learning how to be an adult should start in the classroom so everyone has a fair chance to succeed after they leave school.';

groupTag = 'Content by Sherlyn';

$(document).ready(function () {
  groupTitle = $("#title").text(groupTitle);
  groupDesc = $("#desc").text(groupDesc);
  groupPar = $("#par").text(groupPar);
  
  groupCont1 = $("#cont1").text(groupCont1);
  groupCont2 = $("#cont2").text(groupCont2);
  groupCont3 = $("#cont3").text(groupCont3);
  groupCont4 = $("#cont4").text(groupCont4);
  groupCont5 = $("#cont5").text(groupCont5);
  
  groupTag = $("#tag").text(groupTag);
  $('body').fadeIn(1000);
});