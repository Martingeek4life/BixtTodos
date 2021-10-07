<template>
  <div class="suggested-area">
    SuggestedArea
  </div>
</template>

<script>
// import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    // Suggested
  },
  methods: {
  }
}
</script>

<style scoped>
  .suggested-area {
    background-color: rgb(245, 230, 164);
    width: 70%;
    height: 90%;
  }
</style>
