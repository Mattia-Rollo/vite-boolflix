import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  count: 0,
  loading: true,
  apiURL: "https://api.themoviedb.org/3/search/",
  endPointMovie: "movie",
  endPointTv: "tv",
  key_ath: '?api_key=8ace785dd1f96b68334521629f5dadaf',
  errormessage: '',
  ListMovie: [],
  ListSeries: [],
  params: {},
  getMovie() {
    const params = { ...this.params };
    axios
      .get(this.apiURL + this.endPointMovie + this.key_ath,{ params } )
      .then((res) => {
        this.ListMovie = res.data.results;
        console.log()
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.loading = false;
        this.errormessage = error.message;
      });
      
      axios
      .get(this.apiURL + this.endPointTv + this.key_ath,{ params } )
      .then((res) => {
        const list = res.data.results;
        this.ListSeries = res.data.results;
      
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.loading = false;
        this.errormessage = error.message;
      });
  },
  getSeries() {
    
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
