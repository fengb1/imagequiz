let q1 = {picture: "cherryblossom.png", title: "which word matches this picture?",
choices: ["daisy", "daffodil", "cherry blossom"], correct: "cherry blossom"};
let q2 = {picture: "rose.png", title: "which word matches this picture?",
choices: ["rose", "tulip", "sunflower"], correct: "rose"};
let q3 = {picture: "waterlily.png", title: "which word matches this picture?",
choices: ["daisy", "waterlily", "rose"], correct: "waterlily"};
let q4 = {picture: "daffodil.png", title: "which word matches this picture?",
choices: ["sunflower", "daffodil", "lily"], correct: "daffodil"};
let q5 = {picture: "tulip.png", title: "which word matches this picture?",
choices: ["cherry blossom", "rose", "tulip"], correct: "tulip"};
let q6 = {picture: "sunflower.png", title: "which word matches this picture?",
choices: ["waterlily", "daffodil", "sunflower"], correct: "sunflower"};
let Quiz1 = {id: 1, title: "quiz 1", picture:"cherryblossom.png",
questions: [q1, q2, q3, q4, q5, q6]};

let q7 = {picture: "daisy.jpg", title: "which word matches this picture?",
choices: ["daisy", "daffodil", "cherry blossom"], correct: "daisy"};
let q8 = {picture: "daffodil.png", title: "which word matches this picture?",
choices: ["rose", "tulip", "daffodil"], correct: "daffodil"};
let q9 = {picture: "waterlily.png", title: "which word matches this picture?",
choices: ["daisy", "waterlily", "rose"], correct: "waterlily"};
let q10 = {picture: "rose.png", title: "which word matches this picture?",
choices: ["sunflower", "rose", "lily"], correct: "rose"};
let q11 = {picture: "tulip.png", title: "which word matches this picture?",
choices: ["cherry blossom", "rose", "tulip"], correct: "tulip"};
let q12 = {picture: "lily.jpg", title: "which word matches this picture?",
choices: ["lily", "daffodil", "sunflower"], correct: "lily"};
let Quiz2 = {id: 2, title: "quiz 2", picture:"daisy.jpg",
questions: [q7, q8, q9, q10, q11, q12]};

let q13 = {picture: "lily.jpg", title: "which word matches this picture?",
choices: ["daisy", "lily", "cherry blossom"], correct: "lily"};
let q14 = {picture: "rose.png", title: "which word matches this picture?",
choices: ["rose", "tulip", "sunflower"], correct: "rose"};
let q15 = {picture: "rose.png", title: "which word matches this picture?",
choices: ["daisy", "waterlily", "rose"], correct: "rose"};
let q16 = {picture: "sunflower.png", title: "which word matches this picture?",
choices: ["sunflower", "daffodil", "lily"], correct: "sunflower"};
let q17 = {picture: "daisy.jpg", title: "which word matches this picture?",
choices: ["daisy", "rose", "tulip"], correct: "daisy"};
let q18 = {picture: "cherryblossom.png", title: "which word matches this picture?",
choices: ["waterlily", "cherry blossom", "sunflower"], correct: "cherry blossom"};
let Quiz3 = {id: 3, title: "quiz 3", picture:"lily.jpg",
questions: [q13, q14, q15, q16, q17, q18]};
let quizzes = [Quiz1, Quiz2, Quiz3];
export default quizzes;
