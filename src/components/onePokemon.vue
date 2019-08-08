<template v-on:load="this.getPokemon()">
<div>
<img :src="this.pokemon.sprites.back_default" alt="">
<img :src="this.pokemon.sprites.front_default" alt="">
<img :src="this.pokemon.sprites.back_shiny" alt="">
<img :src="this.pokemon.sprites.front_shiny" alt="">
<h2>#{{this.pokemon.id}}</h2>
<h2>{{this.pokemon.name}}</h2>
<h3>{{this.pokemon.weight}} KG</h3>
</div>
</template>


<script>
import axios from 'axios'

export default {
    props: 
        ['pokemon'],
    data(){
    return{ 
      
    }
  },
  mounted(){
      
    
  },
  methods: {
    
    
  }
        
    
}

</script>
