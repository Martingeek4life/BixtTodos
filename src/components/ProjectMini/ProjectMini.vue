<template>
  <div class="project-mini">
    <img :src="'./static/images/projects/'+project.cover" :alt="project.title" class="project-mini-img">
    <h3 class="project-mini-title">{{ project.title }}</h3>
  </div>
</template>

<script src="./project-mini.js"></script>
<style src="./project-mini.css" scoped></style>
