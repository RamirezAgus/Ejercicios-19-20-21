import { ThumbDown, ThumbUp } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getRandomeJoke } from '../services/axiosServices';

const AxiosExample = () => {

    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const likeJokes = () => {
        setLikes(likes + 1);
    };

    const dislikeJokes = () => {
        setDislikes(dislikes + 1);
    };

    useEffect(() => {
        obtainJoke()
    }, []);

    const obtainJoke = () => {
        getRandomeJoke()
         .then((response) => {
            if (response.status === 200) {
                //console.table(response.data.results[0])
                setJoke(response.data)
            }
         })
         .catch((error) => {
            alert(`Something went wrong: ${error}`)
         })
    };
    
    return (
        <div>
            <h1>Axios Example</h1>
            <h2>Chuck Norris Jokes!</h2>
            {joke != null ? (
                <div>
                    <h3>Here is your joke</h3>
                    <p>{joke.value}</p>
                </div>
            ): null}
                <div style={{display: 'flex', justifyContent: 'center', columnGap: 30}}>
                    <ThumbUp onClick={likeJokes} color='success'/>
                    <ThumbDown onClick={dislikeJokes} color='error'/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', columnGap: 45}}>
                    <span>{likes}</span>
                    <span>{dislikes}</span>
                </div>
                <div>
                    <p>Do you want another joke?</p>
                    <Button variant="outlined" onClick={obtainJoke}>Random Joke</Button>
                </div>
        </div>
    );
}

export default AxiosExample;
