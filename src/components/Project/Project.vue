<template>
  <div class="project-component">
    <h3 class="title-project">Project {{ project.title }}</h3>
    <div class="list-lists">
      <div>
        <Container class="lists" orientation="horizontal" @drop="onDrop" :get-child-payload="getList">
          <Draggable v-for="(list, i) in project.lists" :key="'list-'+i">
            <div class="list">
              <ListCard :list="list"></ListCard>
            </div>
          </Draggable>
          <Draggable>
            <div class="add-list list">
              <AddItem type="list" :add="addList"></AddItem>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>
  </div>
</template>

<script src="./project.js"></script>

<style src="./project.css" scoped></style>
