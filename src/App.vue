<template>
  <div id="app">
    <img class="img" alt="Vue logo" src="./assets/pokemon.png" />
    <ListPokemon></ListPokemon>
   
    
  </div>
</template>

<script>
import axios from "axios";
import ListPokemon from "./components/ListPokemon.vue";

export default {
  name: "app",

  components: {
    ListPokemon,
    
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img{
  height: 250px;
}

</style>
