<template>
  <div class="card-details">
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
  </div>
</template>

<script src="./card-details.js"></script>
<style src="./card-details.css"></style>
