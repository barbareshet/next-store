import axios from "axios";
const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
//Setting up no cache request
const headers = {
    'Cache-Control' : 'no-cache'
};
function StaticSide(props) {
    // console.log(props);

    // console.log(pokemon);
    return (
        <>
            <h1>Pokemons - Server Side Rendering</h1>
            {
                props.pokemon.map( poke => {
                    return(
                        <div className="pokemon" key={poke.name}>
                            <img src={poke.imgUrl} alt={poke.name}/>
                            <h3>{poke.name}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
//Running as part of the build process and returns the props object
export const getStaticProps = async () =>{
    //Getting all the Pokemons
    const res = await axios.get(url,{headers});
    // console.log(res);

    //Iterating all the results (pokemons urls) to the promises array
    const promises = res.data.results.map( result => {
        return axios.get(result.url,{headers});
    });
    // getting all the extra Data about the pokemons
    const responses = await Promise.all(promises);
    // console.log(responses);
    // Mapping the All the data about the Pokemons
    const pokeData = responses.map( r => {
        return {
            name: r.data.name,
            imgUrl: r.data.sprites.front_default
        }
    });
    return{
        props:{
            pokemon: pokeData
        }
    }
}
export default StaticSide
