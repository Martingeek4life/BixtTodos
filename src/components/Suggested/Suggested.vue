<template>
    <div class="suggested-space">
      <div class="suggested">suggested</div>
      <SuggestedArea :card="card"></SuggestedArea>
    </div>
</template>

<script>
import SuggestedArea from '@/components/SuggestedArea/SuggestedArea.vue'
export default {
  data () {
    return {
    }
  },
  props: {
    card: {type: Object, required: true}
  },
  components: {
    SuggestedArea
  },
  methods: {
  }
}
</script>

<style scoped>
  .suggested-space {
    background-color: rgb(10, 4, 102);
    height: 100%;
    display: flex;
  }
  .suggested {
    background-color: rgb(243, 187, 234);
    width: 30%;
    height: 90%;
  }

</style>
