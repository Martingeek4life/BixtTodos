<template>
  <div class="list-tables">
    <h2 class="title-worspace">All tables of your workspace {{ workspace.title }}</h2>
    <div class="tables">
      <div class="table" v-for="(table, i) in listTables" :key="'table-'+i">
        <router-link :to="{name: 'table.show', params: {table_id: table.link}}">
          <MiniTable :table="table"></MiniTable>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src="./list-tables.js"></script>
<style scoped src="./list-tables.css"></style>
