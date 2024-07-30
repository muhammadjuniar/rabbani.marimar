<template>
  <div class="container pw0">
    <div class="row justify-content-center m0">
      <div class="col-12 col-lg-4 content-body">
        <div class="container">
          <div class="row">
            <div class="col-12 pw0 mt-2">
              <router-link to="/">
                <img
                  class="logo-marimar"
                  src="~@/assets/img_logo_marimar.png"
                  alt="..."
                />
              </router-link>
            </div>
            <div class="col-lg-12 mt-2 pw0 text-center">
              <div class="voting-title">
                VOTE JAGOAN KAMU JANGAN SAMPAI GANTUNG REBANA
              </div>
            </div>
            <div class="col-lg-12 mt-4">
              <div class="row">
                <div class="col-auto voting-label">Cari Jagoan Kamu</div>
                <div class="col-lg-12">
                  <div class="search">
                    <img
                      class="ico-search"
                      src="~@/assets/ico_search.png"
                      alt=""
                    />
                    <input
                      type="text"
                      class="form-control form-voting"
                      placeholder="Group Qasidah...."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="car card-voting">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="d-flex">
                      <div class="ico-container parent">
                        <img
                          class="ico-member"
                          src="~@/assets/ico_profile_kecil.png"
                          alt=""
                        />
                      </div>
                      <div class="ico-container child">
                        <img
                          class="ico-member"
                          src="~@/assets/ico_profile_kecil.png"
                          alt=""
                        />
                      </div>
                      <div class="ico-container child">
                        <img
                          class="ico-member"
                          src="~@/assets/ico_profile_kecil.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 mt-2">
                    <div>
                      <div class="col-auto voting-label">Nama Group</div>
                      <div class="voting-title">HardRoch Mania</div>
                    </div>
                  </div>
                  <div class="col-lg-12 text-end mt-3">
                    <div class="btn btn-sm btn-vote">Vote</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Inter:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.content-body {
  background: url("~@/assets/member_area/img_background.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100dvh;
  font-family: "Hammersmith One", sans-serif;
}

.m0 {
  margin: 0 !important;
}

.pr0 {
  padding-right: 0 !important;
}

.pw0 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.logo-marimar {
  padding: 30px 0;
  width: 100%;
  height: auto;
}

.voting-title {
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.94;
  letter-spacing: normal;
  color: #a81818;
}

.voting-label {
  padding-top: 10px;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a81818;
}
.wajib-isi {
  padding-top: 15px;

  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #a81818;
}

.form-voting {
  padding: 10px;
  background: radial-gradient(
        circle at 100% 100%,
        #ffeaea 0,
        #ffeaea 7px,
        transparent 7px
      )
      0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffeaea 0, #ffeaea 7px, transparent 7px)
      100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffeaea 0, #ffeaea 7px, transparent 7px)
      0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffeaea 0, #ffeaea 7px, transparent 7px) 100%
      100%/8px 8px no-repeat,
    linear-gradient(#ffeaea, #ffeaea) 50% 50% / calc(100% - 2px)
      calc(100% - 16px) no-repeat,
    linear-gradient(#ffeaea, #ffeaea) 50% 50% / calc(100% - 16px)
      calc(100% - 2px) no-repeat,
    linear-gradient(104deg, #ffeaea -6%, #a81818 108%);
  border-radius: 8px;
  box-sizing: border-box;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a81818;
}

.form-voting::placeholder {
  color: #f2aaaa;
}

.search {
  position: relative;
}

.ico-search {
  position: absolute;
  width: 24px;
  height: 24px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.card-voting {
  margin-top: 20px;
  padding: 10px;
  background: radial-gradient(
        circle at 100% 100%,
        #ffeaea 0,
        #ffeaea 7px,
        transparent 7px
      )
      0% 0%/8px 8px no-repeat,
    radial-gradient(circle at 0 100%, #ffeaea 0, #ffeaea 7px, transparent 7px)
      100% 0%/8px 8px no-repeat,
    radial-gradient(circle at 100% 0, #ffeaea 0, #ffeaea 7px, transparent 7px)
      0% 100%/8px 8px no-repeat,
    radial-gradient(circle at 0 0, #ffeaea 0, #ffeaea 7px, transparent 7px) 100%
      100%/8px 8px no-repeat,
    linear-gradient(#ffeaea, #ffeaea) 50% 50% / calc(100% - 2px)
      calc(100% - 16px) no-repeat,
    linear-gradient(#ffeaea, #ffeaea) 50% 50% / calc(100% - 16px)
      calc(100% - 2px) no-repeat,
    linear-gradient(104deg, #ffeaea -6%, #a81818 108%);
  border-radius: 8px;
  box-sizing: border-box;
  transition: all 200ms;
}

.ico-container {
  display: flex;
  flex-grow: 0;
  padding: 2px;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
}

.ico-member {
  width: 22px;
  height: 22px;
}

.child {
  margin-left: -12px;
}

.btn-vote {
  width: 64px;
  height: 30px;
  border-radius: 8px;
  background-color: #a81818;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}

.btn-vote:hover,
.btn-vote:active {
  background-color: #a81818;
  color: #fff;
}
</style>
