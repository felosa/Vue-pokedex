<template>
  <div id="app">
    
      <input type="number" v-model="number" placeholder="Seleccione el numero de pokemon a mostrar" @change="this.number= number">
      <button type="button" v-on:click="()=>this.getPokemon()">Mostrar</button>
    
    <div class="pokemon" v-for="(pokemon,index) in pokemons.results" v-bind:key="index">
      <h2>{{pokemon.name.toUpperCase()}}</h2>
      <p># {{index+1}}</p>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      pokemons:"",
      pokemonId: 0,
      number: 964
    }
  },
  mounted(){
    this.getPokemon();
  },
  methods: {
    getPokemon(){
      console.log(this.number, "numero")
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
.pokemon {
  display: flex;
  justify-content: center;
}
</style>