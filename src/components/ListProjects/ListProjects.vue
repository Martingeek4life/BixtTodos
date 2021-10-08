<template>
  <div class="list-projects-component">
    <!-- <h2 class="title-list-projects">Projects</h2> -->
    <div class="projects">
      <div class="project" v-for="(project, i) in projects" :key="'project-'+i">
        <router-link :to="{name: 'project.show', params: {project_id: project.link}}">
          <ProjectMini :project="project" />
        </router-link>
      </div>
      <div class="add-project">
        <AddItem :add="addProject" type="Project" />
      </div>
    </div>
  </div>
</template>

<script src="./list-projects.js"></script>
<style scoped src="./list-projects.css"></style>
