let interviewlist = [];
let rejectedlist = [];

let noJob = document.querySelector(".noJob");
let HtmlFakaArray = document.querySelector(".fala-Array");
let rejectFakaArray = document.querySelector(".fala-Array-rejected");
// console.log(noJob);
let totalTracker = document.querySelector(".totalTracker");
let interviewTracker = document.querySelector(".interviewTracker");
let RejectedTracker = document.querySelector(".RejectedTracker");

let totalJob = document.querySelector(".total-job");
let jobMainContainer = document.querySelector(".job-main-container");

totalTracker.innerText = jobMainContainer.children.length;
totalJob.innerText = jobMainContainer.children.length;

// button color
