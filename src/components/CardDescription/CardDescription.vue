<template>
  <div class="details-space">
    <header class="headerModal">
      <h3>{{this.card.title}}</h3>
      <h3>{{this.card.description}}</h3>
    </header>
    <Suggested :card="card"></Suggested>
  </div>
</template>

<script>
import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    Suggested
  },
  methods: {
  }
}
</script>

<style scoped>
  .headerModal{
    background-color: rgb(63, 133, 30);
    height: 10%;
  }
  .details-space {
    height: 100%;
    background-color: rgb(247, 97, 209);
  }

</style>
