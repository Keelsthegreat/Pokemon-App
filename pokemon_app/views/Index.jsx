const React = require('react')

const pokemon = require('./models/pokemon')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };


const Index = () => {
    return (
        <div>
            <h1>See All The Pokemon!</h1>
            <ul>
        {pokemon.map((pkmn)=>{
            <li key={pkmn.id}>
               <h2>{pkmn.name}</h2> 
                <br></br> 
                <img src={pkmn.img}/>
            </li>
        })}
            </ul>
        </div>
    )
} 
