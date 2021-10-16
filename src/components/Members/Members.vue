<template>
  <div class="members">
    <h5>MEMBERS <span class="nb-member">{{this.card.members.length}}</span></h5>
    <div class="member" v-for="member in this.card.members" :key="member.index">
      <button class="member-btn" @click="showModal = true">{{member}}
        <span class="delete-member" @click="deleteMember(member)">&times;</span>
      </button>
    </div>
  </div>
</template>

<script src="./Members.js"></script>
<style src="./Members.css" scoped></style>
