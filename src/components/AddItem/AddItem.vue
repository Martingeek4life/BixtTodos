<template>
  <div class="add-item">
    <transition>
      <div class="adding" v-if="isAdding">
        <input
          type="text"
          id="add-input-title"
          autofocus
          v-model="newItemTitle"
          :name="'add-'+type"
          :placeholder="'Type title for a new ' + type +'...'"
          @keyup.enter="addItem"
          v-if="!isTextarea">
        <textarea v-else name="" id="add-textarea-title" autofocus cols="30" rows="9" v-model="newItemTitle" :placeholder="'Type title for a new ' + type +'...'" @keyup.enter="addItem"></textarea>
        <div class="btn-group controls-add">
          <button type="button" class="btn btn-info btn-add" @click="addItem">Add {{ type }}</button>
          <button type="button" class="btn btn-light btn-cancel-add" @click="isAdding = false">Cancel</button>
        </div>
      </div>
      <div class="show-add" v-else>
        <button class="btn btn-show-add" @click="isAdding = true">Add {{ type }}</button>
      </div>
    </transition>
  </div>
</template>

<script src="./add-item.js"></script>

<style src="./add-item.css"></style>
