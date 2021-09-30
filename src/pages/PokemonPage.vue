<template>
  <div>
      <h1>¿Que Pokemon es?</h1>

        <PokemonPicture :pokemonId="17" :showPokemon="true" />
        <PokemonOptions />
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

export default {
    components: {
        PokemonOptions, PokemonPicture
    }
}
</script>