<template>
  <div>
    <h5>CHECKLIST {{this.card.checklists}}</h5>
    <!-- afficher le inputpour ajout un element dans la checklist -->
    <button class="btn btn-primary border-5 ml-2"  v-on:click="showInput=true" v-if="!showInput">Add</button>
    <div class="modalContainer" v-if="showInput">
      <!--span class="closeCheck" v-on:click="showInput = false">&times;</span-->
      <form class="flex-grow-1">
        <input type="text" class="input-checklist" v-model="checklistItem" />
      </form>
      <button class="btn btn-primary border-5 ml-2" @click="addItem()">Add</button>
    </div>
    <!--form class="flex-grow-1">
      <h6>Titre</h6>
      <input type="text" class="input-checklist" v-model="checklistItem" />
    </form>
    <button class="btn btn-primary border-5 ml-2"  @click="addChecklist()">Add</button-->
    <ul>
      <li>checklist 1</li>
      <li>checklist 1</li>
      <li>checklist 1</li>
      <li>checklist 1</li>
      <li>checklist 1</li>
      <li>checklist 1</li>
    </ul>
  </div>
</template>

<script src="./Checklists.js"></script>
<style src="./Checklists.css" scoped></style>
