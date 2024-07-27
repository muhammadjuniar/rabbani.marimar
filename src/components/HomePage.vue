<template>
  <div>
    <div class="row">
      <div class="col-12 pw0 mt-5">
        <img class="ribbon" src="~@/assets/img_ribbon_1.svg" alt="..." />
      </div>
      <div class="col-12">
        <img class="logo-marimar" src="~@/assets/img_logo_marimar.png" alt="..." />
      </div>
      <div class="col-12 relative pw0">
        <img class="ribbon-2" src="~@/assets/img_ribbon_2.png" alt="..." />
        <img class="doodle-kiri" width="100px" src="~@/assets/img_kurupuk_kiri.png" alt="..." />
        <img class="doodle-kanan" width="50px" src="~@/assets/img_kurupuk_kanan.png" alt="..." />
      </div>
      <div class="col-12 text-center">
        <img class="marimar" src="~@/assets/img_badge_marimar.png" alt="..." />
        <div class="btn btn-xl btn-daftar-marimar mt-5">DAFTAR SEKARANG</div>
        <div class="text-read-more mt-5 mb-3">Pelajari Lebih Lanjut</div>
      </div>
      <div class="col-12 pw0">
        <img class="ribbon" src="~@/assets/img_ribbon_3.png" alt="..." />
      </div>
      <div class="col-12 relative">
        <div class="video-player">
          <iframe width="100%" height="200" src="https://www.youtube.com/embed/hf7vviUkRno?si=taGSWIiQ00-SvhgY"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <img class="doodle-kiri-video" width="100px" src="~@/assets/img_kurupuk_kiri.png" alt="..." />
        <img class="doodle-kanan-video" width="150px" src="~@/assets/img_kurupuk_kanan.png" alt="..." />
      </div>
      <div class="col-12 text-ajakan">
        <div class="text-title">MARI BU HADROH KEMBALI!!!!</div>
        <div class="text-paragraph mt-4">
          <p>Untuk memeriahkan kemerdekaan Indonesia. Rabbani mengadakan kembali kompetisi
            Qasidah terbaik MARIMAR di Agustus 2024
          </p>
          <p>
            Jangan sampai ketinggalan
            jangan sampai latihan mulu tapi gak manggung-manggung
          </p>
          <p>
            Daftar sekarang juga! Dapatkan hadiah jutaan rupiah
          </p>
          <p>
            ssttt, baru daftar aja udah dikasih
            hadiah lohhh, gak percaya? yuk buktiin sekarang
          </p>
        </div>
      </div>
      <div class="col-12 total-hadiah relative">
        <img class="ribbon" src="~@/assets/img_gege.png" alt="..." />
        <img class="doodle-kiri-gege" width="80px" src="~@/assets/img_kurupuk_kiri.png" alt="..." />
        <img class="doodle-kanan-gege" width="100px" src="~@/assets/img_kurupuk_kanan.png" alt="..." />
      </div>
      <div class="col-12 text-center mt-3">
        <div class="btn btn-xl btn-daftar-marimar mt-3">DAFTAR SEKARANG</div>
        <div class="btn btn-xl btn-marimar mt-3">MEMBER AREA</div>
        <div class="btn btn-xl btn-marimar mt-3">VOTE MERIMAR</div>
      </div>
      <div class="col-12 text-center footer relative">
        <img width="222" src="~@/assets/img_logo_marimar.png" alt="..." />
        <img class="doodle-kiri-footer" width="80px" src="~@/assets/img_kurupuk_kiri.png" alt="..." />
        <img class="doodle-kanan-footer" width="70px" src="~@/assets/img_kurupuk_potong.png" alt="..." />
      </div>
      <div class="col-12 text-center mt-5">
        <div class="text-footer mb-2">MARIMAR 2024 Organize by:</div>
        <img width="54" src="~@/assets/ico_marketeam.png" alt="">
      </div>
      <div class="col-12 text-center mt-5 mb-5">
        <div class="text-footer mb-1">MARIMAR 2024 Sponsored by:</div>
        <img width="52" src="~@/assets/ico_rabbani_dpr.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.ribbon {
  width: 100%;
  height: auto;
}

.ribbon-2 {
  width: 100%;
  height: auto;
  margin-top: -50px;
}

.doodle-kiri {
  position: absolute;
  bottom: 10px;
  left: 20px;
}

.doodle-kanan {
  position: absolute;
  top: 30px;
  right: 70px;
}

.logo-marimar {
  padding: 0 10px;
  width: 100%;
  height: auto;
}

.marimar {
  width: 100%;
  height: auto;
}

.btn-marimar {
  width: 225px;
  border-radius: 8px;
  box-shadow: 3px 7px 12.3px 0 rgba(92, 16, 16, 0.15);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
  background-image: linear-gradient(111deg, #ffd2eb -4%, #fd90c8 126%), linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
  background-origin: border-box;
  padding: 14px 26px;

  font-family: "Hammersmith One", sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a81818;
}

.btn-daftar-marimar {
  width: 225px;
  border-radius: 8px;
  box-shadow: 3px 7px 12.3px 0 rgba(92, 16, 16, 0.15);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
  background-image: linear-gradient(104deg, #fc88c7 -4%, #ffc9c9 124%), linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
  background-origin: border-box;
  padding: 14px 26px;

  font-family: "Hammersmith One", sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a81818;
}

.btn-marimar:hover,
.btn-daftar-marimar:hover {
  color: #850404;
  box-shadow: 3px 7px 12.3px 0 rgba(92, 16, 16, 0.30);
}

.text-read-more {
  font-family: "Hammersmith One", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}

.video-player {
  position: relative;
  z-index: 10;
  padding-top: 20px;
}

.doodle-kiri-video {
  position: absolute;
  bottom: -45px;
  left: -5px;
  z-index: 0;
}

.doodle-kanan-video {
  position: absolute;
  top: -45px;
  right: -5px;
  z-index: 0;
}

.total-hadiah {
  position: relative;
  z-index: 10;
  padding-top: 120px;
}

.doodle-kiri-gege {
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 0;
}

.doodle-kanan-gege {
  position: absolute;
  top: 30px;
  right: 10px;
  z-index: 0;
}

.footer {
  position: relative;
  z-index: 10;
  padding-top: 150px;
}

.doodle-kiri-footer {
  position: absolute;
  top: 50px;
  left: 2px;
  z-index: 0;
}

.doodle-kanan-footer {
  position: absolute;
  top: -20px;
  right: 0;
  z-index: 0;
}

.text-ajakan {
  margin-top: 80px;
}

.text-title {
  font-family: 'Hammersmith One', sans-serif;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a81818;
}

.text-paragraph {
  font-family: 'Hammersmith One', sans-serif;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #a81818;
}

.text-footer {
  font-family: 'Poppins', sans-serif;
  font-size: 8px;
  font-weight: 500;
  font-stretch: normal;
  font-style: italic;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #a81818;
}

.relative {
  position: relative;
}

.pw0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.pt15 {
  padding-top: 150px !important;
}

</style>