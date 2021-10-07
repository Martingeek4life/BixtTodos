<template>
  <div class="checklist-component">
    <div class="checklist-header">
      <h6 class="checklist-title">{{ checklist.title }}</h6>
      <div class="controls-checklist">
        <transition>
          <button type="button" class="btn btn-light btn-mask-tasks-done" @click="hideTasksDone = true" v-if="!hideTasksDone">Hide tasks done</button>
          <button type="button" class="btn btn-light btn-show-tasks-done" @click="hideTasksDone = false" v-else>Show tasks done</button>
        </transition>
        <button type="button" class="btn btn-light btn-delete-checklist" @click="deleteChecklist">Delete</button>
      </div>
    </div>
  </div>
</template>

<script type="./checklist.js"></script>
<style src="./checklist.css"></style>
