<template>
  <div>
    <div v-for="checklistElement in this.card.checklists" :key="checklistElement.title">
      <h5>checklist {{checklistElement.title}}</h5>
      <div v-for="task in checklistElement.tasks" :key="task.title">
        <form>
          <div>
            <input type="checkbox" id="checklistItem" name="checklistItem" value="checklistItem">
            <label for="checklistItem">{{task.title}}</label>
          </div>
          <!--div>
            <button type="submit">S'abonner</button>
          </div-->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./ChecklistItem.js"></script>
<style src="./ChecklistItem.css" scoped></style>
