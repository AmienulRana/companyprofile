alert("ini hanya website landing page, tidak ada lagi halaman selain ini");
const menuParent = document.querySelector(".menu-parent");
const sscParent = document.querySelector(".ssc-parent");
window.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("svg-menu")) {
    menuParent.classList.toggle("muncul");
  }
});

let objSsc = [
  {
    img: "wastafel.jpg",
    nama: "Service",
    paragraf:
      "thank to the solusitions available you can afford a brick finish even in a small apartement",
  },
  {
    img: "meja-makan.jpg",
    nama: "Contact",
    paragraf:
      "thank to the solusitions available you can afford a brick finish even in a small apartement",
  },
  {
    img: "kamar-mandi.jpg",
    nama: "Support",
    paragraf:
      "thank to the solusitions available you can afford a brick finish even in a small apartement",
  },
];

let strSsc = "";
objSsc.forEach((ssc) => {
  sscParent.innerHTML = strSsc += writeSsc(ssc);
});
// sscParent.appendChild(strSsc)

function writeSsc(ssc) {
  return `<div class="child-ssc" style="width: 21%" data-aos="fade-up">
    <img
      src="img/${ssc.img}"
      class="img-ssc shadow-2xl"
      style="height: 400px;"
    />
    <h1 class="small-header text-center my-3">${ssc.nama}</h1>
    <div class="ssc-paragraf text-center">
      <p
        class="text-explanation text-gray-400 text-base"
      >
        ${ssc.paragraf}
      </p>
    </div>
  </div>`;
}
