<template>
  <div>
    <h5>CHECKLISTS</h5>
    <div v-for="checklistElement in this.card.checklists" :key="checklistElement.title">
      <!--h5>checklist {{checklistElement.title}}</h5-->
      <div class="checklist-header">
      <div class="checklist-title">checklist {{checklistElement.title}}</div>
      <div class="checklist-button">
        <button @click="showModal = true">Hide checked items</button>
        <button @click="deleteChecklist(checklistElement)">Delete</button>
      </div></div>

      <div class="progress-bar" v-if="checklistElement.progress >= 0">
        <progress-bar size="small" :val="checklistElement.progress" :text="checklistElement.progress + '%'" />
      </div>

      <!--affichage des elements de la checklist-->
      <div v-for="task in checklistElement.tasks" :key="task.title">
        <form>
          <div>
            <input type="checkbox" @click="cheched(checklistElement,task)">
            <label>{{task.title}}</label>
            <span class="close-task" @click="deleteTask(checklistElement,task)">&times;</span>
          </div>
        </form>
      </div>
      <!-- afficher le input pour ajout un element dans la checklist -->
      <ChecklistItem :card="card" :checklistElement="checklistElement"></ChecklistItem>
    </div>
  </div>
</template>

<script src="./Checklists.js"></script>
<style src="./Checklists.css" scoped></style>
