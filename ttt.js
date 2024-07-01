let bo = document.querySelectorAll(".b");
let k = document.querySelector(".id");
let s = document.querySelector(".s");
let p = document.querySelector("p");
let t = document.querySelector(".nb");
let b = document.querySelector(".m");

let u = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
let t0 = true;
let z = false;
bo.forEach((b) => {
  b.addEventListener("click", () => {
    if (t0) {
      console.log("0 box wwas clocked");
      b.innerText = "0";
      t0 = false;
    } else {
      console.log("x box was clocked");
      b.innerText = "x";
      t0 = true;
    }
    b.disabled = true;
    cw();
  });
});
const r = () => {
  t0 = true;
  eb();
  s.classList.add("h");
};
const db = () => {
  for (let b of bo) {
    b.disabled = true;
  }
};
const eb = () => {
  for (let b of bo) {
    b.disabled = false;
    b.innerText = "";
  }
};
const sw = (w) => {
  p.innerText = `Contratulations! ${w} has won`;

  s.classList.remove("h");
  t.classList.remove("h");
};
const cw = () => {
  for (let c of u) {
    let p1 = bo[c[0]].innerText;
    let p2 = bo[c[1]].innerText;
    let p3 = bo[c[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        console.log("winner", p1);
        sw(p1);
        db();
      }
    }
  }
};
t.addEventListener("click", () => {
  r();
  if (z) {
    z = true;
    t.style.display = "none";
  } else {
    z = false;

    t.style.visibilty = "hidden";
  }
});
k.addEventListener("click", () => {
  r();
});
