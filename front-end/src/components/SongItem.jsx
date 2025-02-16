//import React from 'react'
import { Link } from "react-router-dom"

const SongItem = ({ image, name, artist, duration, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
        <div className="song-item__number-album ">
            <p>{Number(index + 1)}</p> {/* key começa no 0 */}
            
            <div className="song-item__album">
                <img
                    className="song-item__image"
                    src={image}
                    alt="Imagem da música X"
                />

                <p className="song-item__name">{name}</p>
            </div>
        </div>
        <p>{duration}</p>
    </Link>
  )
}

export default SongItem