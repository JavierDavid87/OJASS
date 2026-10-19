/* Add files here; no database is used. Put each file in its matching folder first.
Example: { name: "Quiz 1", path: "files/quiz/quiz-1.jpg", type: "image" }
For documents use type: "file". Add as many objects as you want in each files array. */
const portfolioData = {
  profileImage: "assets/profile-placeholder.svg", // Change to your own image path
  categories: [
    { id:"quiz", title:"Quiz", icon:"✎", description:"Short quizzes and assessments.", files:[
      // { name:"Quiz 1", path:"QUIZ1.JPEG.jpg, type:"image" },
      // { name:"Quiz 2 PDF", path:"files/quiz/quiz-2.pdf", type:"file" }
    ]},
    { id:"long-quiz", title:"Long Quiz", icon:"▤", description:"Long quizzes and extended assessments.", files:[
      // { name:"Long Quiz 1", path:"files/long-quiz/long-quiz-1.pdf", type:"file" }
    ]},
    { id:"midterms", title:"Midterms", icon:"◫", description:"Midterm examination outputs.", files:[
      // { name:"Midterm Exam", path:"files/midterms/midterm.pdf", type:"file" }
    ]},
    { id:"finals", title:"Finals", icon:"▣", description:"Final examination outputs.", files:[
      // { name:"Final Exam", path:"files/finals/final-exam.pdf", type:"file" }
    ]},
    { id:"activities", title:"Activities", icon:"✦", description:"Class activities and exercises.", files:[
      // { name:"Activity 1", path:"files/activities/activity-1.png", type:"image" }
    ]},
    { id:"projects", title:"Projects", icon:"⌘", description:"Projects, presentations, and completed work.", files:[
      // { name:"Project Report", path:"files/projects/project-report.pdf", type:"file" }
    ]}
  ]
};
