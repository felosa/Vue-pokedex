<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/pokemon.png" />
    <ListPokemon></ListPokemon>
    <onePokemon></onePokemon>
    
  </div>
</template>

<script>
import axios from "axios";
import onePokemon from "./components/onePokemon.vue";
import ListPokemon from "./components/ListPokemon.vue";

export default {
  name: "app",

  components: {
    ListPokemon,
    onePokemon
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

</style>
