import { MongoClient } from "mongodb"

const URI = "mongodb+srv://luanagomesdasilva281106:Luana1228@react-spotify.zeagh.mongodb.net/?retryWrites=true&w=majority&appName=react-spotify"

const client = new MongoClient(URI);

export const db = client.db("Spotify-Hashtag");
// const songCollection = await db.collection("songs").find({}).toArray(); 

// console.log(songCollection);