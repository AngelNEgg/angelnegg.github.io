var groupTitle;
var groupDesc;
var groupCont;
var groupTag;

groupTitle = 'N4ZIHA';
groupDesc = 'Schools educate people and teach students the basics of what is necessary to become an active citizen in a democracy.';
groupPar = 'Balance' 

groupCont1 = "School teaches you balance. It's quite similar to being in the workforce and finding time for your other responsibilities. People have different ways of managing different tasks. You can apply balance by making a detailed schedule and a to-do list with everything that needs to be done. This may include taking a 15 minute break every hour you take to complete your work, or even taking a walk to get your mind out of stress mode. School teaches you how to juggle different responsibilities through different resources and support systems.";

groupCont2 = `Many students believe that it is near impossible to find balance with school. “Part of the problem…is that prioritizing school over every other aspect of life is so normalized,” said Natalie Hatchue. As a student myself, I can definitely find it is extremely difficult to get out of the mindset that school isn't the only important thing in our lives. Especially, with parents and a school system that prioritizes success, but success can't be found without taking care of yourself first. “A strong support system is crucial for balancing school, work, and life because it helps manage stress, boosts motivation, and enhances overall well-being.” Being able to balance multiple things in your life is an essential skill. It allows you to feel less overwhelmed, and can significantly decrease stress. It is important to have people in your life that you can lean back on, whether it be a friend or a counselor.  I can definitely say having a strong support system is essential. You’ll be more aware of your own feelings, what you need, and much more. I’ve always been in touch with my guidance counselors over the years, since elementary school to high school. Struggling with my mental health since I was a kid definitely took a toll on my school-life quality. In the past, I had trouble with submitting assignments on time and communicating my needs and struggles. Having a conversation with my counselor and explaining what exactly was going on allowed them to help me. They did this by proposing I submit a request for a 504 plan. A 504 plan is an accommodation for students who struggle with different things. The weight that was lifted off my shoulders was immense. Due to this extra support, I feel much more at ease. I can complete assignments without any worries, and when I struggle I know I have my 504 plan to fall back on. The support of my counselors and outside help allowed me to strengthen my mental well being while balancing it with school. `;

groupCont3 = `Schools offer many different types of support for academics. “By providing options like study halls, tutoring programs, and online learning resources, schools give students the tools they need to keep up with their studies while managing other responsibilities” Students can find different opportunities within their school that can help them balance their studies while also caring for other important factors in their lives. School is a learning place, but it's also a place of community and personal growth.`;

groupCont4 = `It is crucial to not neglect your mental well being just to do well in school. “If left unaddressed, high levels of stress in an academic setting can lead to student burnout, dropout and overall impairment to academic functioning”. If you don't fit breaks into your schedule, you will feel overwhelmed and overburdened. However consistently overworking yourself is quite common amongst adolescents. School can help you multitask and teaches you to balance breaks and important school work. They do this by offering different types of resources that are available to students. This includes social workers, guidance counselors, and even school meetings about mental health. “Rates of adolescent depression increased from 8.1% in 2009 to 15.8% in 2019,” It is recognized that the rate of depression has nearly doubled from 2009 to 2019. With the rise of declining mental health, schools have been putting an emphasis on support for students. “Balance does not necessarily mean an even split, as true balance between all the different components in life is elusive for most individuals, “ Finding balance is not something you can do immediately. It takes time, and its something that is different for everyone. What balance may look for you may not look the same for somebody else, which is why it's important to focus on what works for you.`;

groupCont5 = `Many people believe that with school, it's hard to maintain balance. Despite this, maintaining balance is a lot easier than what people may believe. For example, many students are successful in the future because they created balanced schedules that gave them enough time to finish everything necessary. Along with this, they also prioritized their mental health. I will not deny that school makes things difficult to juggle, but it doesn’t make it impossible. School allows many students to have several responsibilities at home such as taking care of their siblings, cleaning the house, while being able to complete homework, being able to study and finish any missing assignments to be up to date.  Due to all this, students are able to succeed because they are able to prioritize their time.`;

groupCont6 = `The ability to balance multiple things is difficult. Nonetheless, it's a very necessary skill to have, whether it be to know when you need a break or recognizing that you haven't been doing anything besides school work. Finding balance could even mean that you should take a nap after working a certain amount of time. Balance looks different for everyone, but it's important to know that balance starts with school.`;

groupTag = 'Content by Naziha';

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