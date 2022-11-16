import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  count: 0,
  loading: true,
  search: {
    query: 'a',
    language: 'it-IT'
},
  apiURL: "https://api.themoviedb.org/3/",
  searchEndPoint: 'search/',
  endPointMovie: "movie",
  endPointTv: "tv",
  popular: "popular/",
  key_ath: '?api_key=8ace785dd1f96b68334521629f5dadaf',
  errormessage: '',
  ListMovie: [],
  ListSeries: [],
  params: {},
  getMovie() {
    this.ListMovie = [];
    this.ListSeries = [];
    this.loading = true;
    const params = { ...this.search };
    axios.get(this.apiURL + this.searchEndPoint + this.endPointMovie + this.key_ath, { params } )
    .then((res) => {
      this.ListMovie = res.data.results;
      this.loading = false;
      console.log(this.params);
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.errormessage = error.message;
        
          this.loading = false;
      
      });
      
      axios.get(this.apiURL + this.searchEndPoint + this.endPointTv + this.key_ath,{ params } )
      .then((res) => {
        
        this.ListSeries = res.data.results;
      
      })
      .catch((error) => {
        this.ListMovie.length = 0;
        this.loading = false;
        this.errormessage = error.message;
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
