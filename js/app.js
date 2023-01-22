// DOM object model bu bizning htmml limiz
// const bilan let ning farqi constga velu bergandan keyin uzgartirib bulmaydi letga esa buladi
// console.log(document); documentning uzini chaqirsak htmlning hammasini chqirib beradi
const p = document.getElementById("p1"); // p1 bizda textning id si p1 bizga p ga velu yani qiymat qilib beradi

// p.innerHTML = '<span class="samething">sjhakfwihfskjsfvj</span>'; bunday qilsak ham buladi  "innerHTML"---->bergandan keyin taglar berishi mumkin
p.textContent = "lerem lerem lerem lerem lerem"; // "textContent faqat textlar uchun"
p.className = 'new-class'; // textga class qushib beradi
console.log(p); // endi text bizda jsdan chiqyapti