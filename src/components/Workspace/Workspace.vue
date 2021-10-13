<template>
  <div class="dashboard">
    <div class="header-workspace">
      <h1 class="title-workspace">My workspaces</h1>
      <div class="add-workspace">
        <AddItem :add="addWorkspace" type="workspace" />
      </div>
    </div>
    <div class="body-workspace">
      <div class="list-workspaces">
        <div class="workspaces">
          <div class="workspace" v-for="(workspace, i) in workspaces" :key="'workspace-' + i">
            <h2 class="workspace-title">{{ workspace.title }}</h2>
            <ListProjects class="list-projects" :projects="workspace.projects" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./workspace.js"></script>

<style src="./workspace.css"></style>
