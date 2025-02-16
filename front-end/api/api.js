// Fetch ou Axios 
import axios from "axios";

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data); --> Assim, com o .data, só pega os dados do json

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;