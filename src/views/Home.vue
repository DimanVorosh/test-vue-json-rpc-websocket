<template>
  <v-content>
    Home page
    <v-btn @click="$router.push('/about')">
      About
    </v-btn>
  </v-content>
</template>

<script>
export default {
  name: 'Home'
}
</script>
