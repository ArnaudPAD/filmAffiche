import { useState } from 'react'



function Film(props) {
    const [like, setLike] = useState(0);
    const [hasLike, setHasLike] = useState(false);

    const addLike = () => {
        setLike(like + 1);
        setHasLike(true);
    }


    const deleteLike = () => {
        setLike(like - 1);
        setHasLike(false);
    }

    const likeOrUnlike = () => {
        if (hasLike == false) {
            return (
                <button onClick={addLike}>Like</button>
            )
        } else {
            return (<button onClick={deleteLike}>UnLike</button>
            )
        }
    }

    return (
        <>
            <h1>TITRE: {props.titre}</h1>
            <h2>RESUME: {props.resume}</h2>
            <span>Image:{props.image}</span>
            <h1>Heure de séance:{props.seance}</h1>
            <span>{props.index}</span>
            <h3>Nb like: {like}</h3>
            {likeOrUnlike()}
        </>
    )

}

export default Film
