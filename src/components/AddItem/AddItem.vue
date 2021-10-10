<template>
  <div class="add-item">
    <transition>
      <div class="adding" v-if="isAdding">
        <label for="add-input-title">
          Title of new {{ type }}:
        </label>
        <input
          type="text"
          autofocus
          class="form-control"
          :name="'add-'+type"
          id="add-input-title"
          v-model="newItemTitle"
          :placeholder="'Type title for a new ' + type +'...'"
          @keyup.enter="addItem"
          v-if="!isTextarea">
        <textarea
          v-else name=""
          rows="9"
          class="form-control"
          autofocus cols="30"
          v-model="newItemTitle"
          id="add-input-title"
          :placeholder="'Type title for a new ' + type +'...'"
          @keyup.enter="addItem"></textarea>
        <div class="btn-group controls-add">
          <button type="button" class="btn btn-primary btn-add" @click="addItem">Add {{ type }}</button>
          <button type="button" class="btn btn-danger btn-cancel-add" @click="isAdding = false">Cancel</button>
        </div>
      </div>
      <div class="show-add" v-else>
        <button class="btn btn-show-add btn-light" @click="isAdding = true">Add {{ type }}</button>
      </div>
    </transition>
  </div>
</template>

<script src="./add-item.js"></script>

<style src="./add-item.css"></style>
