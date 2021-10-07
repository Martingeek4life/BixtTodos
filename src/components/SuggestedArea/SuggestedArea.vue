<template>
  <div class="suggested-area">
    <h5>MEMBERS</h5>
    <ul>
      <li>join</li>
    </ul>
    <h5>DESCRIPTION</h5>
    <textarea name="" id="add-card-textarea-title" autofocus="" cols="100" rows="5" v-model="description" placeholder="Type title for a new card..."></textarea>
      <div class="btn-group controls-add-card">
        <button type="button" class="btn btn-info btn-add-card" @click="addCard">Add card</button>
        <button type="button" class="btn btn-light btn-cancel-add-card" @click="isAddingCard=false">cancel</button>
      </div>
    <h5>CHECKLIST</h5>
    <ul>
      <li>members</li>
      <li>labels</li>
      <li>checklist</li>
      <li>Dates</li>
      <li>attachment</li>
      <li>cover</li>
    </ul>
  </div>
</template>

<script>
// import Suggested from '@/components/Suggested/Suggested.vue'
export default {
  data () {
    return {
      description: ''
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
    padding-left: 10px;
  }
  h5 {
    color: #172b4d;
    text-align: left;
  }
  li {
    height: 20px;
    background-color: #d4daf0;
    list-style: none;
    text-align: left;
    margin-bottom: 3px;
    line-height: 20px;

  }
</style>
