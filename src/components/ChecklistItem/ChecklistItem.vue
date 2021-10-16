<template>
  <div>
    <!-- afficher le inputpour ajout un element dans la checklist -->
    <button class="btn btn-primary border-5 ml-2"  v-on:click="showInput=true" v-if="!showInput">Add</button>
    <div class="modalContainer" v-if="showInput">
      <form class="flex-grow-1">
        <input type="text" class="input-checklist" v-model="task" />
      </form>
      <button class="btn btn-primary border-5 ml-2" @click="addItem()">Add</button>
      <span class="close-check" @click="showInput=false">&times;</span>
    </div>
  </div>
</template>

<script src="./ChecklistItem.js"></script>
<style src="./ChecklistItem.css" scoped></style>
