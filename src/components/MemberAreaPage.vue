<template>
  <div class="container pw0">
    <div class="row justify-content-center m0">
      <div class="col-12 col-lg-4 content-body">
        <div class="row">
          <div class="col-12 pw0 mt-2">
            <img
              class="ribbon"
              src="~@/assets/member_area/img_ribbon_1.png"
              alt="..."
            />
          </div>
          <div class="col-12 mt-2">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="daftar-title">Profile Group</div>
                </div>
                <div class="col-auto daftar-label">Nama Group</div>
                <div class="col text-end wajib-isi">Wajib Diisi</div>
                <div class="col-lg-12">
                  <input
                    type="text"
                    class="form-control form-daftar"
                    placeholder="Group Qasidah Anda"
                  />
                </div>
                <div class="col-auto daftar-label">Kontak Penanggungjawab</div>
                <div class="col text-end wajib-isi">Wajib Diisi</div>
                <div class="col-lg-12">
                  <input
                    type="text"
                    class="form-control form-daftar"
                    placeholder="08XXXXXXXXX"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-4">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="daftar-title">Group Member</div>
                </div>
                <div
                  class="col-lg-12 mt-2"
                  v-for="(tax, index) in taxes"
                  :key="index"
                >
                  <div class="card card-daftar-member">
                    <div class="row align-items-center mb-3">
                      <div class="col-4 text-center">
                        <div class="profile-img">
                          <img
                            src="~@/assets/member_area/ico_profile.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div class="col-8">
                        <div class="foto-member mb-2">Foto Member</div>
                        <div class="btn btn-sm btn-upload">Upload</div>
                      </div>
                      <div class="col-lg-12">
                        <div class="container">
                          <div class="row">
                            <div class="col-auto daftar-label">
                              Nama Member {{ index + 1 }}
                            </div>
                            <div class="col text-end wajib-isi">
                              Wajib Diisi
                            </div>
                            <div class="col-lg-12">
                              <input
                                type="text"
                                class="form-control form-daftar"
                                placeholder="Nama Member"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="container">
                          <div class="row">
                            <div class="col-auto daftar-label">
                              Tanggal Lahir
                            </div>
                            <div class="col text-end wajib-isi">
                              Wajib Diisi
                            </div>
                            <div class="col-lg-12">
                              <div class="d-flex gap-2">
                                <div class="hari-tgl">
                                  <img
                                    class="ico-arrow"
                                    src="~@/assets/member_area/ico_arrow.png"
                                    alt=""
                                  />
                                  <select class="form-control form-daftar">
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                  </select>
                                </div>
                                <div class="hari-tgl">
                                  <img
                                    class="ico-arrow"
                                    src="~@/assets/member_area/ico_arrow.png"
                                    alt=""
                                  />
                                  <select class="form-control form-daftar">
                                    <option value="00">00</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select>
                                </div>
                                <div class="tahun">
                                  <img
                                    class="ico-arrow"
                                    src="~@/assets/member_area/ico_arrow.png"
                                    alt=""
                                  />
                                  <select class="form-control form-daftar">
                                    <option value="0000">0000</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="container">
                          <div class="row">
                            <div class="col-auto daftar-label">
                              Nomor Whatsapp
                            </div>
                            <div class="col text-end wajib-isi">
                              Wajib Diisi
                            </div>
                            <div class="col-lg-12">
                              <input
                                type="text"
                                class="form-control form-daftar"
                                placeholder="08XXXXXXXXX"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 text-center mb-5">
            <div class="btn btn-xl btn-daftar-member mt-5" @click="add">
              TAMBAH MEMBER
            </div>
            <div class="btn btn-xl btn-daftar-member mt-3" @click="remove">
              KURANGI MEMBER
            </div>
            <div class="btn btn-xl btn-daftar-marimar mt-3">SIMPAN</div>
            <router-link to="/">
              <div class="btn btn-xl btn-marimar mt-3">KEMBALI</div>
            </router-link>
          </div>
          <!-- <div class="col-lg-12">
              <div v-for="(tax, index) in taxes" :key="index">
                <input v-model="taxes[index]" />
                <button type="number" @click="remove(index)">Remove</button>
              </div>
              <button type="number" @click="add">Add</button>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemberAreaPage",
  data() {
    return {
      taxes: [0],
    };
  },
  methods: {
    add() {
      this.taxes.push(0);
    },
    remove() {
      if (this.taxes.length > 1) {
        this.taxes.splice(this.taxes, 1);
      }
    },
    // remove(index) {
    //   if (this.taxes.length > 1) {
    //     this.taxes.splice(index, 1);
    //   }
    // },
  },
};
</script>

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

.ribbon {
  width: 100%;
  height: auto;
}

.card-daftar-member {
  box-shadow: 6px 10px 13.9px 0 #da9e9e;
  background-image: linear-gradient(142deg, #ffeded 3%, #ffbdb9 137%);
  border: none;
  transition: all 200ms;
}

.daftar-title {
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a81818;
}
.daftar-label {
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

.form-daftar {
  padding: 10px;
  border-radius: 8px;
  background-color: #ffeaea !important;
  border: 0;

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

.form-daftar::placeholder {
  color: #f2aaaa;
}

.hari-tgl {
  position: relative;
  width: 54px;
}

.tahun {
  position: relative;
  width: 76px;
}

.ico-arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
}

.profile-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  margin: 10px;
  border-radius: 8px;
  border: solid 1px #a81818;
  background-color: #ffdada;
}

.profile-img img {
  width: 57px;
  height: 57px;
  object-fit: contain;
}

.foto-member {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a81818;
}

.btn-upload {
  width: 80px;
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

.btn-upload:hover,
.btn-upload:active {
  background-color: #a81818;
  color: #fff;
}

.btn-marimar {
  width: 225px;
  border-radius: 8px;
  box-shadow: 3px 7px 12.3px 0 rgba(92, 16, 16, 0.15);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
  background-image: linear-gradient(111deg, #ffd2eb -4%, #fd90c8 126%),
    linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
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
  background-image: linear-gradient(104deg, #fc88c7 -4%, #ffc9c9 124%),
    linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
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

.btn-daftar-member {
  width: 225px;
  border-radius: 8px;
  box-shadow: 3px 7px 12.3px 0 rgba(92, 16, 16, 0.15);
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
  background-image: linear-gradient(101deg, #fff -4%, #ffc9c9 175%),
    linear-gradient(109deg, #fcb2c4 2%, #fd8ec9 115%);
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
.btn-daftar-marimar:hover,
.btn-daftar-member:hover {
  color: #850404;
  box-shadow: 3px 7px 12.3px 0 rgba(92, 16, 16, 0.3);
}
</style>
