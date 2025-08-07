// Simulated JSON image data
const imageData = [
  { url: "page2.jpg" },
  { url: "page3.jpg" },
  { url: "page4.jpg" },
  { url: "page5.jpg" },
  { url: "/lNews/ali.jpg" },
  { url: "/lNews/bilal.jpg" },
  { url: "/lNews/khyber.jpg" },
  { url: "/lNews/banu.jpg" },
];

const slideshow = document.getElementById("slideshow");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

imageData.forEach((item, indx) => {
  let div = document.createElement("div");
  div.classList.add("slid");
  if (indx === 0) div.style.display = "block";
  div.innerHTML = `<img src="${item.url}" alt="${indx + 1}">`;
  slideshow.appendChild(div);
});

let curindx = 0;
prevBtn.addEventListener("click", () => {
  slidechange(1);
});
nextBtn.addEventListener("click", () => {
  slidechange(-1);
});
let slides = document.querySelectorAll(".slid");

function slidechange(dric) {
  slides[curindx].style.display = "none";
  curindx = (curindx + dric + slides.length) % slides.length;
  slides[curindx].style.display = "block";
}

setInterval(() => {
  slidechange(1);
}, 5000);

// ===================newssection=======================

let nwesCont = document.querySelector(".nwesCont");
const LetestNews = [
  {
    img: "/lNews/ali.jpg",
    name: "Ali Wazir",
    discription:
      "فتنۃ الپنـجاب کے جیلوں میں آج علی وزیر کا ایک سال یعنی 365 دن پورے ہوگئے",
  },
  {
    img: "/lNews/banu.jpg",
    name: "protecter arrist by the pakistani govorment",
    discription: "they all in jail in banu",
  },
  {
    img: "/lNews/bilal.jpg",
    name: "bilal oragzay",
    discription:
      "bilal oragzay arrist by  peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث bilal oragzay arrist by  peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث جوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےbilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث bilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث جوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےجوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےbilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث bilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث جوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےجوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےbilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث bilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث جوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےجوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےbilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث bilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث جوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےجوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےbilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث bilal oragzay arrist by peshawar police اختر مینگل صاحب کہتے ہیں کہ بلوچ مائیں میرے پاس آتی ہیں اور کہتی ہیں کہ خدارہ ہمارے بچوں کو مزید نہ پڑھائیں ، وہ میچور ہوجاتے ہیں لاھور اسلام آباد اور بڑے شھروں میں شھریوں کے حقوق دیکھ لیتے ہیں، پھر اپنے شھروں بلوچستان میں اپنے حقوق کی بات کرتے ہیں جس کے باعث جوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےجوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہےجوانی میں ریاست انکو لاپتہ یا شہید کردیتی ہے",
  },
  {
    img: "/lNews/khyber.jpg",
    name: "د پن جاب په اشاره خپل وطن ورانوې، ته څوک یې",
    discription: "د پن جاب په اشاره خپل وطن ورانوې، ته څوک یې",
  },
  {
    img: "/lNews/banu.jpg",
    name: "protecter arrist by the pakistani govorment",
    discription: "they all in jail in banu",
  },
  {
    img: "/lNews/bilal.jpg",
    name: "bilal oragzay",
    discription: "bilal oragzay arrist by  peshawar police",
  },
  {
    img: "/lNews/khyber.jpg",
    name: "د پن جاب په اشاره خپل وطن ورانوې، ته څوک یې",
    discription: "د پن جاب په اشاره خپل وطن ورانوې، ته څوک یې",
  },
];

LetestNews.forEach((ln) => {
  let news = document.createElement("div");
  news.classList.add("news");
  news.innerHTML = ` <img src="${ln.img}" alt="">
   <h3>${ln.name}</h3>
   <p>${ln.discription}</p>
   <button id="newbtn">more</button>`;
  nwesCont.append(news);
});

let newssec = document.querySelector(".newssec");

let newbtn = document.querySelectorAll("#newbtn");
newbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let mynew = document.createElement("div");
    let i = document.createElement("a");
    mynew.innerHTML = `${btn.parentElement.innerHTML}`;
    newssec.appendChild(mynew);
    newssec.style.opacity = "1";
    newssec.style.zIndex = "1";
    i.classList.add("closebtn");
    i.innerHTML = "X";
    newssec.appendChild(i);
    mynew.style.display = "block";

    i.addEventListener("click", () => {
      newssec.style.opacity = "0";
      newssec.style.zIndex = "-1";
      mynew.style.display = "none";
    });
  });
});

// ===================blog section===============

let nav = document.getElementById("navbar");
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  nav.classList.toggle("newnav");
});
