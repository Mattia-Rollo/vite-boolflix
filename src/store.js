import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  activeIndex: null,
  count: 0,
  loading: true,
  search: {
    query: "",
    language: "it-IT",
    include_adult: false,
    page: 1,
  },
  apiURL: "https://api.themoviedb.org/3/",
  searchEndPoint: "search/",
  endPointMovie: "movie",
  endPointTv: "tv",
  popular: "popular/",
  key_ath: "?api_key=8ace785dd1f96b68334521629f5dadaf",
  errormessage: "",
  ListMovie: [],
  ListSeries: [],
  params: {},
  getMovie() {
    this.ListMovie = [];
    this.ListSeries = [];
    this.popularTV = [];
    this.loading = true;
    const params = { ...this.search };
    axios
      .get(
        this.apiURL + this.searchEndPoint + this.endPointMovie + this.key_ath,
        { params }
      )
      .then((res) => {
        setTimeout(() => {
          this.loading = false;
          this.ListMovie = res.data.results;
        }, 1500);
        console.log(this.params);
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.errormessage = error.message;
      });

    axios
      .get(this.apiURL + this.searchEndPoint + this.endPointTv + this.key_ath, {
        params,
      })
      .then((res) => {
        this.ListSeries = res.data.results;
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.loading = false;
        this.errormessage = error.message;
      });
  },
  flagApiUrl: "https://countryflagsapi.com/png/",
  getCountryFlag(country) {
    country == "uk" ? (country = "gb") : "";
    country == "en" ? (country = "us") : "";
    country == "ja" ? (country = "jp") : "";
    country == "cs" ? (country = "cz") : "";
    country == "ko" ? (country = "kr") : "";
    country == "hi" ? (country = "in") : "";
    country == "el" ? (country = "gr") : "";

    const flagApi = this.flagApiUrl + country;
    return flagApi;
  },
  paramsPopular: {},
  popularTV: [],
  getPopular() {
    this.ListMovie = [];
    this.ListSeries = [];
    axios
      .get(this.apiURL + "tv/popular" + this.key_ath, {
        params: {
          language: "it-IT",
        },
      })
      .then((res) => {
        this.popularTV = res.data.results;
        this.loading = false;
      });
  },

  // getCharacters() {
  //   this.errormessage = "";
  //   this.loading = true;
  //   const params = { ...this.params };
  // axios
  //   .get(this.apiURL + this.endPoint, { params })
  //   .then((res) => {
  //     this.characterList = res.data.results;
  //     this.loading = false;
  //   })
  //   .catch((error) => {
  //     this.characterList.length = 0;
  //     this.loading = false;
  //     this.errormessage = error.message;
  //   });
  // },
});
