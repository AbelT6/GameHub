import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { 
        key: 'db034597ceb44be487a8066504409e65'
    }
})