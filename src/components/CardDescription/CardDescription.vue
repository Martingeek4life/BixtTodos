<template>
  <div class="details-space">
    <div class="headerModal">
      <h2>{{this.card.title}}</h2>
      <!--h3>{{this.card.description}}</h3-->
    </div>
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
    background-color: white;
    height: 10%;
  }
  .details-space {
    height: 100%;
    /* background-color: rgb(247, 97, 209); */
  }
  h2 {
    color: #172b4d;
    height: 50%;
    margin-top: auto;
    margin-bottom: auto;
    background-color: rgb(247, 97, 209);
  }

</style>
