<template>
    <div class="list-card-component">
        <div class="list-card-header">
            <h4 class="title-list-cards">{{ list.title }}</h4>
            <div class="count-cards">{{ list.cards.length }} cards</div>
        </div>
        <div>
            <Container class="cards">
                <Draggable class="card" v-for="(card, i) in list.cards" :key="'card'+i">
                    <card :card="card" :list="list"></card>
                </Draggable>
            </Container>
            <div class="add-card">
                <transition>
                    <div class="adding-card" v-if="isAddingCard">
                        <textarea name="" id="add-card-textarea-title" autofocus="" cols="30" rows="9" v-model="newCardTitle" placeholder="Type title for a new card..."></textarea>
                        <div class="btn-group controls-add-card">
                            <button type="button" class="btn btn-info btn-add-card" @click="addCard">Add card</button>
                            <button type="button" class="btn btn-light btn-cancel-add-card" @click="isAddingCard=false">cancel</button>
                        </div>
                    </div>
                    <div class="show-add-card" v-else>
                        <button class="btn btn-show-add-card" @click="isAddingCard=true">Add card</button>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script src="./list-card.js"></script>
<style src="./list-card.css"></style>
