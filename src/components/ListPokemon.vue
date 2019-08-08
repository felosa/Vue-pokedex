<template>
  <div id="app" class="container">
      <div class="list">
        <h2>How many pokemon do you want to see?</h2>
      <input type="number" v-model="number" placeholder="Seleccione el numero de pokemon a mostrar" @change="this.number= number">
      <button type="button" v-on:click="()=>this.getPokemons()">Show</button>
      
      <div class="pokemon" v-for="(pokemon,index) in pokemons.results" v-bind:key="index">
      <a href="#" v-on:click="()=>getonePokemon(index+1)">{{pokemon.name.toUpperCase()}}</a>
      <p># {{index+1}}</p>
      
      </div>
      </div>
      <div class="one">
         <onePokemon v-bind:pokemon="this.pokemon"></onePokemon>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import onePokemon from "./onePokemon.vue";



export default {
  name: 'app',
  components: {
    onePokemon
  },
  data(){
    return{
      pokemons:"",
      number: 964,
      pokemonId: 0,
      pokemon: {}
    }
  },
  mounted(){
    // this.getPokemon();
  },
  methods: {
    getPokemons(){
      axios.get('https://pokeapi.co/api/v2/pokemon',
      {
        params: {
          limit:this.number
        }
      })
        .then(response=>{
          this.pokemons = response.data
        })
        .catch(e => console.log(e))
    },
    getonePokemon(id){
      axios.get(`https://pokeapi.co/api/v2/pokemon/` +id)
        .then(response=>{
          console.log(response.data, "pok")
          this.pokemon = response.data
        })
        .catch(e => console.log(e))
    }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  display: flex;
}
.pokemon {
  display: flex;
  justify-content: center;
}
.list {
  width: 40%;
  height: 500px;
  overflow:scroll;
}
.one{
  width: 40%;
}
</style>