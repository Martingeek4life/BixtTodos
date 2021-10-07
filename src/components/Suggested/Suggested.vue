<template>
    <div class="suggested-space">
      <div class="suggested">
        <h5>SUGGESTED</h5>
        <ul>
          <li>join</li>
        </ul>
        <h5>ADD TO CARD</h5>
        <ul>
          <li>members</li>
          <li>labels</li>
          <li>checklist</li>
          <li>Dates</li>
          <li>attachment</li>
          <li>cover</li>
        </ul>
      </div>
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
    /* background-color: rgb(10, 4, 102); */
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  .suggested {
    /* background-color: rgb(243, 187, 234); */
    width: 30%;
    height: 90%;
  }
  h5 {
    color: #172b4d;
  }
  li {
    height: 40px;
    background-color: #d4daf0;
    list-style: none;
    text-align: left;
    margin-bottom: 7px;
    line-height: 40px;

  }

</style>
