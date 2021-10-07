<template>
    <div class="list-card-component">
        <div class="list-card-header">
            <h4 class="title-list-cards">{{ list.title }}</h4>
            <div class="count-cards">{{ list.cards.length }} cards</div>
        </div>
        <div>
          <Container
              class="cards"
              group-name="card"
              :get-child-payload="getCard"
              drag-class="draging-card"
              @drop="onDrop">
              <Draggable class="card" v-for="(card, i) in list.cards" :key="'card'+i">
                  <CardComponent :card="card" :list="list" />
              </Draggable>
            </Container>
          <div class="add-card">
              <AddItem type="card" :add="addCard" :is-textarea="true"></AddItem>
          </div>
        </div>
    </div>
</template>

<script src="./list-card.js"></script>
<style src="./list-card.css"></style>
