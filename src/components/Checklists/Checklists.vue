<!--template>
  <div>
    <h5>CHECKLISTS</h5>
    <afficher le inputpour ajout un element dans la checklist -->
    <!--div>
      <button class="btn btn-primary border-5 ml-2"  v-on:click="showInput=true" v-if="!showInput">Add</button>
      <div class="modalContainer" v-if="showInput">
        <form class="flex-grow-1">
          <input type="text" class="input-checklist" v-model="checklistItem" />
        </form>
        <button class="btn btn-primary border-5 ml-2" @click="addItem()">Add</button>
      </div>
    </div-->

    <!--affichage des elements de la checklist-->
    <!--ChecklistItem :card="card" :checklist="checklist"></ChecklistItem>
  </div>
</template>

<script src="./Checklists.js"></script>
<style src="./Checklists.css" scoped></style-->

<template>
  <div>
    <h5>CHECKLISTS</h5>
    <div v-for="checklistElement in this.card.checklists" :key="checklistElement.title" :index="checklistElement.index">
      <!--h5>checklist {{checklistElement.title}}</h5-->
      <span>checklist {{checklistElement.title}}</span>
      <span class="close-check" @click="deleteChecklist(checklistElement)">&times;</span>

      <!-- <div class="progress-bar" v-if="increasing_pct !== 0 && increasing_pct > 0">-->
      <div class="progress-bar">
        <progress-bar size="small" :val="increasing_pct" :text="increasing_pct + '%'" />
      </div>

      <!--affichage des elements de la checklist-->
      <div v-for="task in checklistElement.tasks" :key="task.title">
        <form>
          <div>
            <!--input type="checkbox" id="checklistItem" name="checklistItem" value="checklistItem" @click="cheched(checklistElement,task)">
            <label for="checklistItem">{{task.title}}</label-->
            <input type="checkbox" @click="cheched(checklistElement,task)">
            <label>{{task.title}}</label>
            <span class="close-check" @click="deleteTask(checklistElement,task)">&times;</span>
          </div>
        </form>
      </div>
      <!-- afficher le input pour ajout un element dans la checklist -->
      <ChecklistItem :card="card" :checklist="checklist" :checklistElement="checklistElement" @changePercent="changePercentValue"></ChecklistItem>
    </div>
  </div>
</template>

<script src="./Checklists.js"></script>
<style src="./Checklists.css" scoped></style>
