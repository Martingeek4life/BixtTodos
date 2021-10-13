<template>
  <div>
    <h5>CHECKLISTS</h5>
    <!-- afficher le inputpour ajout un element dans la checklist -->
    <!--div>
      <button class="btn btn-primary border-5 ml-2"  v-on:click="showInput=true" v-if="!showInput">Add</button>
      <div class="modalContainer" v-if="showInput">
        <form class="flex-grow-1">
          <input type="text" class="input-checklist" v-model="checklistItem" />
        </form>
        <button class="btn btn-primary border-5 ml-2" @click="addItem()">Add</button>
      </div>
    </div-->

    <!--affichage des elements de la checklist-->
    <ChecklistItem :card="card" :checklist="checklist"></ChecklistItem>
  </div>
</template>

<script src="./Checklists.js"></script>
<style src="./Checklists.css" scoped></style>
