const comments = [
  {
    img: "./images/1.jpg",
    name: "Tural Qasimoff",
    p: "370 manat çıxarmışam dostlarıma qonağlığ verəcəm hamını da kanala aldırmışam 😂😂",
  },
  {
    //g
    img: "./images/g1.jpg",
    name: "Səlimə Mustafayeva",
    p: "Ba bu başka məsələ",
  },
  {
    img: "./images/3.jpg",
    name: "Nurlan Rəhimli",
    p: "Mənim kimi çətin öyrənən adamı öyrətdin halaldı sənə vAllah. Axırki məndə bi gün gördüm pul qazandım",
  },
  {
    img: "./images/2.jpg",
    name: "Garay Rustam",
    p: "Demeli kartima 10 gunde 2300 pul girib cixariwlardandi hamsi qorxuram polis zeng eleye uje bawqa kartlara eleyecem cixariwlari 😂 coxlu kartiviz varsa problem yoxdu girin qazandiqca ferqli kartlara cekin vsyo",
  },
  {
    //g
    img: "./images/user.png",
    name: "Rugiyya",
    p: "Artıq sözə ehtiyac yoxdu prosta super!!!",
  },
  {
    img: "./images/4.jpg",
    name: "Namiq Rustamoff",
    p: "Ceyhun partdadıre bütün ətrafım onnan qazanır məndə dünən başladım uje 98 manat çıxarış eləmişəm kartdadı pul",
  },
  {
    img: "./images/5.jpeg",
    name: "Sladkiy Paren",
    p: "QARDASA YAZIB KANALINA QATILIN DEYER VALLAH KISI ADAMDI SOZUN TUTUR",
  },
  {
    //g
    img: "./images/user.png",
    name: "Gulay Rehimli",
    p: "Men inanmazdim bele wey doqru olsun. Wokdayam helede. Esas odu borclarimin yarsi artiq baqlanib min wukur ILAHI",
  },
  {
    img: "./images/user.png",
    name: "Mensur Eliyev",
    p: "Almazların qənimisən qardaş 😁",
  },
  {
    //g
    img: "./images/g2.jpeg",
    name: "Medine Abdulzada",
    p: "Uşaxlar girin yoxlayın inanın mənə işliyir siqnallar temasında tutsaz vopşem partsadarsız günə 150-200 azn rahat varıvızdı",
  },
  {
    img: "./images/user.png",
    name: "Resul",
    p: "Əladı qatılın 😍",
  },
  {
    img: "./images/6.jpg",
    name: "Ülvi Qurbanlı",
    p: "Sennen yoxdu eziz insan sen meni batagliqdan borcdan xercden cekib cixardin omur boyu minetdaram sene",
  },
  {
    //g
    img: "./images/g3.jpeg",
    name: "Turana Agayeva",
    p: "Ömrümdə birinci dəfədiki 2 günə 400 manat qazanıram. Var ol Ceyhun 🫶🏻",
  },
  {
    img: "./images/7.jpeg",
    name: "Togrul",
    p: "Molodec sene ogul! Hemvetenlerini qazandirirsan igid adamsan 👍🏻",
  },
  {
    //g
    img: "./images/user.png",
    name: "Webnem Nermanli",
    p: "Qardaş dedi ki 2 ay aktiv qalacaq. O vaxtacan maşın almağa çalışıram hələki 800 çıxartmışam 😎",
  },
  {
    img: "./images/8.jpeg",
    name: "Prosta Akif",
    p: "Qubadan salamlar! Real temadı girin partdadin!",
  },
  {
    img: "./images/9.jpeg",
    name: "Ali Aliyev",
    p: "Ailelikce signal tuturug eladi heyqeten real qazandirir hami girsin",
  },
  {
    //g
    img: "./images/g4.jpeg",
    name: "Zeynəb Qasımova",
    p: "2500 kriditim variydi 5 günə bağladıx var ol Ceyhun 😍🥳",
  },
  {
    img: "./images/10.jpeg",
    name: "Emin Babawov",
    p: "Ela temadi qardash Allah sennen razi olsun xaladelnik omrunde birinci defe agzina kimi doldu sayende 😂",
  },
  {
    //g
    img: "./images/user.png",
    name: "Nəzrin Əliyeva",
    p: "Chox zor sohbetdi dayiolgu!!!",
  },
  {
    img: "./images/15.jpeg",
    name: "Rehim Abdulov",
    p: "Allah haqqı belə şey görməmişəm mən. Kartıma 330 manat oturana qədər inanmırdım. Pulu xərcləmişəm hələ indi güclə inanıram 😂",
  },
  {
    img: "./images/16.jpeg",
    name: "Sahil Aliyev",
    p: "Yoxlamaga indi bawdadim bura yazacam ne olsa. Mence duz tema olar qaqaw narmalni adama oxwuyur",
  },
  {
    img: "./images/14.jpeg",
    name: "Teymur Rəhimov",
    p: "Tövsiyə eləyirəm 👍🏻👍🏻",
  },
  {
    //g
    img: "./images/g5.jpeg",
    name: "Gamzeli Khiz",
    p: "Deməli 10 gündü kanaldayam. Təzə iphone aldım uje özümə. Çox zor temadı vaxtında komissiyasın ödəyin sizi narmalni qazandıracaq",
  },
  {
    img: "./images/13.jpeg",
    name: "Farid Qarayeff",
    p: "Oy da mən belə şey görməmişdim də ömür boyu. İlk günümdə 180 manat qazandım 🥳",
  },
  {
    img: "./images/user.png",
    name: "Aze Aze",
    p: "Eladi ela 😍",
  },
  {
    //g
    img: "./images/g6.jpeg",
    name: "Gulnar Rustemli",
    p: "Hamıya tövsiyə eliyirəm həyqətən zor temadı kanaldakı siqnallar çoxsu düz gəlir",
  },
  {
    img: "./images/12.jpeg",
    name: "Soltan Agashov",
    p: "Super! Yoxladim iwdiyir 👍🏻👍🏻",
  },
  {
    img: "./images/11.jpeg",
    name: "Qurban",
    p: "Əladı 😍 yarım saata siqnallar gəldi 100 manat qabağa düşdüm 🤑",
  },
];

function addComment(comment) {
  const root = document.getElementById("root");

  if (root.children.length >= 4) {
    root.removeChild(root.children[0]);
  }

  const newCommentHTML = `
    <li class="list">
      <img src="${comment.img}" alt="User Image">
      <div class="list__wrapper">
        <h4>${comment.name}</h4>
        <p>${comment.p}</p>
      </div>
    </li>
  `;

  root.innerHTML += newCommentHTML;
}

let index = 0;
setInterval(function () {
  addComment(comments[index]);
  index = (index + 1) % comments.length;
}, 2000);

// function go() {
//   addComment(comments[index]);
//   index = (index + 1) % comments.length;
// }
// go();

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function updateTimer() {
  timeElement.textContent = formatTime(timeLeft);
  if (timeLeft === 0) {
    clearInterval(timerInterval);
    timeLeft = initialTime;
    timerInterval = setInterval(updateTimer, 1000);
  }
  timeLeft--;
}

const timeElement = document.getElementById("time");
const initialTime = 2 * 60;
let timeLeft = initialTime;
let timerInterval = setInterval(updateTimer, 1000);
