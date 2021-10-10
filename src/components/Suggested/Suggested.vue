<template>
    <div class="suggested-space">
      <div class="suggested">
        <h5>SUGGESTED</h5>
        <ul>
          <li>join</li>
        </ul>
        <h5>ADD TO CARD</h5>
        <ul class="suggestedList">
          <li>members</li>
          <li>labels</li>
          <!-- button for show modal -->
          <li id="myBtnCheck" v-on:click="showChecklist = true">checklist</li>
            <!-- Modal content -->
            <div class="modalContainer" v-if="showChecklist">
              <span class="closeCheck" v-on:click="showChecklist = false">&times;</span>
              <div class="headerChack">
                <h5>Add checklist</h5>
              </div>
              <form class="flex-grow-1">
                <h6>Titre</h6>
                <!--input type="text" class="form-control" v-model="checklistName" /-->
                <input type="text" class="input-checklist" v-model="checklistName" />
              </form>
              <button class="btn btn-primary border-5 ml-2"  @click="createChecklist()">Add</button>
            </div>
          <li>Dates</li>
          <li>attachment</li>
          <li>cover</li>
        </ul>
      </div>
      <SuggestedArea :card="card"></SuggestedArea>
    </div>
</template>
<script src="./Suggested.js"></script>
<style src="./Suggested.css" scoped></style>
