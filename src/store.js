import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  count: 0,
  loading: true,
  apiURL: "https://api.themoviedb.org/3/search/movie?api_key=8ace785dd1f96b68334521629f5dadaf",
  endPoint: "",
  errormessage: '',
  ListMovie: [],
  
  params: {},
  getMovie() {
    const params = { ...this.params };
    axios
      .get(this.apiURL,{params} )
      .then((res) => {
        this.ListMovie = res.data.results;
        setTimeout(() => {
          
          this.loading = false;
        }, 3000);
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
