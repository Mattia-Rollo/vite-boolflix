import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  count: 0,
  loading: false,
  apiURL: "https://rickandmortyapi.com/api/",
  endPoint: "",
  characterList: [],
  getCharacters() {
    this.errormessage = "";
    this.loading = true;
    const params = { ...this.params };
    axios
      .get(this.apiURL + this.endPoint, { params })
      .then((res) => {
        this.characterList = res.data.results;
        this.loading = false;
      })
      .catch((error) => {
        this.characterList.length = 0;
        this.loading = false;
        this.errormessage = error.message;
      });
  },
});
