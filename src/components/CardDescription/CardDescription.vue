<template>
  <div class="details-space">
    <div class="header-modal">
      <h1>{{card.title}}</h1>
      <!--h2>{{card.description}}</h2-->
    </div>
    <Suggested :card="card"></Suggested>
  </div>
</template>
<script src="./CardDescription.js"></script>
<style src="./CardDescription.css" scoped></style>
