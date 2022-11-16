import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  count: 0,
  loading: false,
  apiURL: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=a&language=it-IT",
  endPoint: "",
  ListMovie: [],
  params: {},
  getMovie() {
    // const params = { ...this.params };
    axios
      .get(this.apiURL,this.params)
      .then((res) => {
        this.ListMovie = res.data.results;
        this.loading = false;
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.loading = false;
        this.errormessage = error.message;
      });
  }
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
