<template>
  <div class="card-details-component">
    <div class="header-card">
      <h5 class="title-card">{{ card.title }}</h5>
      <div class="list-detail">Dans la liste
        <span class="list-of-card">
          <span class="list-title" @click="editListOfCard = true">{{ list.title }}</span>
          <div class="edit-list-of-card" v-if="editListOfCard">
            <EditListOfCard :card="card"></EditListOfCard>
          </div>
          </span>
        <div class="edit-list-of-card"></div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-details">
        <div class="card-description">
          <h6 class="card-description-title">Description</h6>
          <textarea name="card-description" id="card-description-textarea" cols="30" rows="10" class="card--description-textarea" v-model="card.description" placeholder="Add full description for this card"></textarea>
        </div>
        <div class="card-checklists">
          <div class="checklist" v-for="(checklist, i) in card.checklists" :key="'checklist-'+i">
            <CheckList :checklist="checklist" @delete="deleteChecklist($event, i)"></CheckList>
          </div>
        </div>
      </div>
      <div class="card-controls-btn">
        <div class="add*checklist">
          <transition>
            <div class="adding-checklist" v-if="isAddingChecklist">
              <div class="header-show-add-checklist">Add checklist</div>
              <div class="input-div">
                <label for="input-add-checklist-title">Title</label>
                <input type="text" id="input-add-checklist-title" v-model="newtChecklistTitle" autofocus="">
                <div class="adding-checklist-controls">
                  <button type="button" class="btn btn-light btn-cancel-add-checklist" @click="isAddingChecklist = false">Cancel</button>
                </div>
                <button type="button" class="btn btn-light btn-add-checklist" @click="addChecklist">Add</button>
              </div>
            </div>
            <div class="show-add-checklist" v-else>
                <button type="button" class="btn btn-light btn-show-add-checklist" @click="isAddingChecklist = true">Add checklist</button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./card-details.js"></script>
<style src="./card-details.css"></style>
