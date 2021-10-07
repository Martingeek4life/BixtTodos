<template>
  <div class="suggested-area">
    <h5>MEMBERS</h5>
    <ul>
      <li>join</li>
    </ul>
    <h5>DESCRIPTION</h5>
    <textarea name="" id="add-card-textarea-title" autofocus="" cols="70" rows="5" v-model="descriptionInput" placeholder="Type title for a new card..."></textarea>
      <div class="btn-group controls-add-card">
        <button type="button" class="btn btn-info btn-add-card" @click="addDescription">Add card</button>
        <!--button type="button" class="btn btn-light btn-cancel-add-card" @click="isAddingCard=false">cancel</button-->
      </div>
    <h5>CHECKLIST</h5>
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

<script src="./SuggestedArea.js"></script>
<style src="./SuggestedArea.css" scoped></style>
