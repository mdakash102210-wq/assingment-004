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

function handleCardClick(event) {
  let target = event.target;

  if (target.closest(".delete-btn")) {
    // "All" tab card delete (section element)
    let card = target.closest("section");
    if (card) {
      let jobName = card.querySelector(".job-name").innerText;
      let currentStatus = card.querySelector("#states-btn").innerText;

      if (currentStatus === "interview") {
        interviewlist = interviewlist.filter(
          (item) => item.jobName !== jobName,
        );
        interviewTracker.innerText = interviewlist.length;
      } else if (currentStatus === "Rejected") {
        rejectedlist = rejectedlist.filter((item) => item.jobName !== jobName);
        RejectedTracker.innerText = rejectedlist.length;
      }

      card.remove();
      totalTracker.innerText = jobMainContainer.children.length;
      totalJob.innerText = jobMainContainer.children.length;

      if (jobMainContainer.children.length === 0) {
        noJob.classList.remove("hidden");
      }
    } else {
      let divCard = target.closest(".tab-card");
      if (divCard) {
        let jobName = divCard.querySelector(".job-name").innerText;

        let inInterview = interviewlist.find(
          (item) => item.jobName === jobName,
        );
        let inRejected = rejectedlist.find((item) => item.jobName === jobName);

        if (inInterview) {
          interviewlist = interviewlist.filter(
            (item) => item.jobName !== jobName,
          );
          interviewTracker.innerText = interviewlist.length;
          totalJob.innerText = interviewlist.length;
          interviewFunction();
        } else if (inRejected) {
          rejectedlist = rejectedlist.filter(
            (item) => item.jobName !== jobName,
          );
          RejectedTracker.innerText = rejectedlist.length;
          totalJob.innerText = rejectedlist.length;
          RejectedFunction();
        }
      }
    }
    return;
  }

  if (target.classList.contains("interview")) {
    let parentnode = target.parentNode.parentNode;
    let jobName = parentnode.querySelector(".job-name").innerText;
    let jobQuliti = parentnode.querySelector(".job-quliti").innerText;
    let jobsistem = parentnode.querySelector(".job-sistem").innerText;
    let descripsion = parentnode.querySelector(".descripsion").innerText;
    let statusBtn = parentnode.querySelector("#states-btn");
    let currentStatus = statusBtn.innerText;

    if (currentStatus === "interview") return;

    if (currentStatus === "Rejected") {
      rejectedlist = rejectedlist.filter((item) => item.jobName !== jobName);
      RejectedTracker.innerText = rejectedlist.length;
    }

    statusBtn.innerText = "interview";

    let exists = interviewlist.find((item) => item.jobName === jobName);
    if (!exists) {
      interviewlist.push({
        jobName,
        jobQuliti,
        jobsistem,
        states: "interview",
        descripsion,
      });
    } else {
      exists.states = "interview";
    }

    interviewTracker.innerText = interviewlist.length;

    if (!rejectFakaArray.classList.contains("hidden")) {
      totalJob.innerText = rejectedlist.length;
      RejectedFunction();
    }
    return;
  }

  if (target.classList.contains("Rejected")) {
    let parentnode = target.parentNode.parentNode;
    let jobName = parentnode.querySelector(".job-name").innerText;
    let jobQuliti = parentnode.querySelector(".job-quliti").innerText;
    let jobsistem = parentnode.querySelector(".job-sistem").innerText;
    let descripsion = parentnode.querySelector(".descripsion").innerText;
    let statusBtn = parentnode.querySelector("#states-btn");
    let currentStatus = statusBtn.innerText;

    if (currentStatus === "Rejected") return;

    if (currentStatus === "interview") {
      interviewlist = interviewlist.filter((item) => item.jobName !== jobName);
      interviewTracker.innerText = interviewlist.length;
    }

    statusBtn.innerText = "Rejected";

    let exists = rejectedlist.find((item) => item.jobName === jobName);
    if (!exists) {
      rejectedlist.push({
        jobName,
        jobQuliti,
        jobsistem,
        states: "Rejected",
        descripsion,
      });
    } else {
      exists.states = "Rejected";
    }

    RejectedTracker.innerText = rejectedlist.length;

    if (!HtmlFakaArray.classList.contains("hidden")) {
      totalJob.innerText = interviewlist.length;
      interviewFunction();
    }
    return;
  }
}

jobMainContainer.addEventListener("click", handleCardClick);
HtmlFakaArray.addEventListener("click", handleCardClick);
rejectFakaArray.addEventListener("click", handleCardClick);

function interviewFunction() {
  HtmlFakaArray.innerHTML = "";

  if (interviewlist.length === 0) {
    noJob.classList.remove("hidden");
    return;
  }

  noJob.classList.add("hidden");

  for (let item of interviewlist) {
    let div = document.createElement("div");
    div.className =
      "tab-card flex justify-between mb-4 pb-4 border-b last:border-b-0";
    div.innerHTML = `
      <div class="space-y-3">
        <h1 class="job-name text-xl font-semibold">${item.jobName}</h1>
        <h1 class="job-quliti text-neutral/60">${item.jobQuliti}</h1>
        <h1 class="job-sistem text-neutral/60">${item.jobsistem}</h1>
        <button id="states-btn" class="text-xl bg-[#EEF4FF] py-2 px-5 rounded-xl">${item.states}</button>
        <h1 class="descripsion">${item.descripsion}</h1>
        <div class="flex gap-3">
          <button class="interview btn btn-outline btn-success uppercase py-3 px-6 rounded-xl">interview</button>
          <button class="Rejected btn btn-outline btn-secondary uppercase py-3 px-6 rounded-xl">Rejected</button>
        </div>
      </div>
      <div class="delete-btn cursor-pointer w-7 h-7 border-neutral/50 border-2 rounded-[50%] flex justify-center items-center self-start">
        <img src="asset/Trash.png" alt="">
      </div>
    `;
    HtmlFakaArray.appendChild(div);
  }
}

function RejectedFunction() {
  rejectFakaArray.innerHTML = "";

  if (rejectedlist.length === 0) {
    noJob.classList.remove("hidden");
    return;
  }

  noJob.classList.add("hidden");

  for (let item of rejectedlist) {
    let div = document.createElement("div");
    div.className =
      "tab-card flex justify-between mb-4 pb-4 border-b last:border-b-0";
    div.innerHTML = `
      <div class="space-y-3">
        <h1 class="job-name text-xl font-semibold">${item.jobName}</h1>
        <h1 class="job-quliti text-neutral/60">${item.jobQuliti}</h1>
        <h1 class="job-sistem text-neutral/60">${item.jobsistem}</h1>
        <button id="states-btn" class="text-xl bg-[#EEF4FF] py-2 px-5 rounded-xl">${item.states}</button>
        <h1 class="descripsion">${item.descripsion}</h1>
        <div class="flex gap-3">
          <button class="interview btn btn-outline btn-success uppercase py-3 px-6 rounded-xl">interview</button>
          <button class="Rejected btn btn-outline btn-secondary uppercase py-3 px-6 rounded-xl">Rejected</button>
        </div>
      </div>
      <div class="delete-btn cursor-pointer w-7 h-7 border-neutral/50 border-2 rounded-[50%] flex justify-center items-center self-start">
        <img src="asset/Trash.png" alt="">
      </div>
    `;
    rejectFakaArray.appendChild(div);
  }
}
