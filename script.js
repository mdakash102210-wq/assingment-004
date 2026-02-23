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

function btnColorChange(id) {
  let allBtn = document.querySelector("#btn001");
  let interviewBtn = document.querySelector("#interview");
  let rejectBtn = document.querySelector("#reject");

  allBtn.classList.remove("bg-primary", "text-white");
  interviewBtn.classList.remove("bg-primary", "text-white");
  rejectBtn.classList.remove("bg-primary", "text-white");

  document.getElementById(id).classList.add("bg-primary", "text-white");

  // hidden section
  jobMainContainer.classList.add("hidden");
  HtmlFakaArray.classList.add("hidden");
  rejectFakaArray.classList.add("hidden");
  noJob.classList.add("hidden");

  if (id === "btn001") {
    jobMainContainer.classList.remove("hidden");
    totalJob.innerText = jobMainContainer.children.length;
  } else if (id === "interview") {
    HtmlFakaArray.classList.remove("hidden");
    totalJob.innerText = interviewlist.length;
    interviewFunction();
  } else if (id === "reject") {
    rejectFakaArray.classList.remove("hidden");
    totalJob.innerText = rejectedlist.length;
    RejectedFunction();
  }
}
