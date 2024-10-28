console.log("hello")

const question = [
    {
        question: "Which is the biggest animal among them?",
        answer: [
            {text: "Tiger" , correct:false},
            {text: "Elephant" , correct:false},
            {text: "Blue Whale" , correct:true},
            {text: "Hippo" , correct:false},

        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answer: [
            {text: "Austrila" , correct:true},
            {text: "Asia" , correct:false},
            {text: "Arctic" , correct:false},
            {text: "Africa" , correct:false},

        ]
    },

    {
        question: "which is the largest desert in the world?",
        answer: [
            {text: "Sahara" , correct:false},
            {text: "Gobi" , correct:false},
            {text: "Kalahari" , correct:false},
            {text: "Antarctica" , correct:true},

        ]
    },

    {
        question: "which is the smallest country in the world?",
        answer: [
            {text: "vatican city" , correct:true},
            {text: "bhutan" , correct:false},
            {text: "Nepal" , correct:false},
            {text: "Sri Lanka" , correct:false},

        ]
    },

];

const questionEle = document.queryselectorbyId("question");
const answerbtn = document.queryselectorbyId("answer-btn");
const nextbtn = document.queryselectorbyId("next-btn");


let currentIndex = 0;
let score =0;

function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next"
}
