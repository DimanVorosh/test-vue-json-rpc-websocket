<template>
  <div>
   <p class="data">Test data: {{ wsData }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',

  computed: {
    wsData () {
      return this.$store.state.wsData.data
    }
  }
}
</script>

<style>
  .data{
    font-size: 2em;
  }
</style>
