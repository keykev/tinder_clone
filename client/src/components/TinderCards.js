import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card"
import "../tinder_cards.css"
import axios from "axios"


function TinderCards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('/tinder/card')
            .then(res => {
                console.log(res.data)
                setPeople(res.data)
            })
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
        
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return(
        <div className = "tinder-cards">
            <div className = "card-container">
                {people.map(person => {
                return (
                    <TinderCard 
                    className = "swipe"
                    key = {person.name}
                    preventSwipe = {['up', 'down']}
                    onSwipe = {(dir) => swiped(dir,person.name)}
                    onCardLeftScreen =  {() => outOfFrame(person.name)}
                    >
                        <div style = {{backgroundImage:`url(${person.imgUrl})`, backgroundRepeat: "no-repeat"}} className = "card">
                            <h1>{person.name}</h1>
                        </div>
                    </TinderCard>
                )
            })}
            </div>
        </div>
    )

}


export default TinderCards

