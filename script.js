const g = (e) => document.getElementById(e);
const c = (e) => document.querySelector("." + e);

let cView = "";

const bRight = c("right");
const bLeft = c("left");
const bUp = c("up");
const bDown = c("down");
const bBack = c("back");

const navButtons = [bRight, bLeft, bUp, bDown, bBack];

function clearNav() {
  navButtons.forEach((btn) => btn?.classList.remove("v"));
}

function setView(v) {
  cView = v;
  g("thing").className = v;
  clearNav();

  if (v === "tl") {
    bRight?.classList.add("v");
    bDown?.classList.add("v");
    bBack?.classList.add("v");
  } else if (v === "tr") {
    bLeft?.classList.add("v");
    bDown?.classList.add("v");
    bBack?.classList.add("v");
  } else if (v === "bl") {
    bUp?.classList.add("v");
    bRight?.classList.add("v");
    bBack?.classList.add("v");
  } else if (v === "br") {
    bUp?.classList.add("v");
    bLeft?.classList.add("v");
    bBack?.classList.add("v");
  }
}

function move(direction) {
  if (cView === "tl") {
    if (direction === "right") setView("tr");
    if (direction === "down") setView("bl");
  } else if (cView === "tr") {
    if (direction === "left") setView("tl");
    if (direction === "down") setView("br");
  } else if (cView === "bl") {
    if (direction === "up") setView("tl");
    if (direction === "right") setView("br");
  } else if (cView === "br") {
    if (direction === "up") setView("tr");
    if (direction === "left") setView("bl");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  g("lid").addEventListener("click", () => {
    g("lid").classList.toggle("out");
  });

  g("top-left").addEventListener("click", () => setView("tl"));
  g("top-right").addEventListener("click", () => setView("tr"));
  g("bot-left").addEventListener("click", () => setView("bl"));
  g("bot-right").addEventListener("click", () => setView("br"));

  bRight?.addEventListener("click", () => move("right"));
  bLeft?.addEventListener("click", () => move("left"));
  bUp?.addEventListener("click", () => move("up"));
  bDown?.addEventListener("click", () => move("down"));

  bBack?.addEventListener("click", () => setView(""));
});