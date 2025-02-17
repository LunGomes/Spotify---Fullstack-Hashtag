// Fetch ou Axios 
import "dotenv/config";
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3000/api";
const URL = "https://spotify-hashtag-nisg.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// console.log(responseArtists.data); --> Assim, com o .data, só pega os dados do json

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;