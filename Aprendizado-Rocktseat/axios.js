import axios from "axios";
axios.get("https://api.github.com/users/GaaraSan01").then((res) => {
    console.log(res.data);
})