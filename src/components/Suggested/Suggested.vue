<template>
    <div class="suggested-space">
      <div class="suggested">
        <h5>SUGGESTED</h5>
        <ul>
          <li>join</li>
        </ul>
        <h5>ADD TO CARD</h5>
        <ul class="suggestedList">
          <!-- button for show modal of checklist-->
          <li class="btn-modal" v-on:click="showMembers = true">members</li>
            <!-- Modal content -->
            <div class="modal-container" v-if="showMembers">
              <span class="close-check" v-on:click="showMembers = false">&times;</span>
              <div class="header-chack">
                <div class="header title center">Add Member</div>
              </div>
              <form class="flex-grow-1">
                <div class="title left">Name</div>
                <input type="text" class="input-checklist" v-model="member" />
              </form>
              <button class="btn btn-primary border-5 ml-2"  @click="addMember()">Add</button>
              <!--span class="close-check" @click="showTextArea=false">&times;</span-->
            </div>
          <li>labels</li>

          <!-- button for show modal of checklist-->
          <li class="btn-modal" v-on:click="showChecklist = true">checklist</li>
            <!-- Modal content -->
            <div class="modal-container" v-if="showChecklist">
              <span class="close-check" v-on:click="showChecklist = false">&times;</span>
              <div class="header-chack">
                <div class="header title center">Add checklist</div>
              </div>
              <form class="flex-grow-1">
                <div class="title left">Titre</div>
                <input type="text" class="input-checklist" v-model="name" />
              </form>
              <button class="btn btn-primary border-5 ml-2"  @click="createChecklist()">Add</button>
              <!--span class="close-check" @click="showTextArea=false">&times;</span-->
            </div>

          <li>Dates</li>
          <li>attachment</li>
          <li>cover</li>
        </ul>
      </div>
      <SuggestedArea :card="card" :checklist="checklist"></SuggestedArea>
    </div>
</template>
<script src="./Suggested.js"></script>
<style src="./Suggested.css" scoped></style>
