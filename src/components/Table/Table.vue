<template>
    <div class="table-component">
        <h3 class="title-table">Table {{ table.title }}</h3>
        <div class="list-lists">
            <div>
                <Container class="lists" orientation="horizontal">
                    <Draggable v-for="(list, i) in table.lists" :key="'list-'+i">
                        <div class="list">
                            <ListCard :list="list"></ListCard>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div class="add-list list">
                            <transition>
                                <div class="show-add-list" v-if="!isAddingList">
                                    <button type="button" class="btn btn-light btn-show-add-list" @click="isAddingList=true">Add list</button>
                                </div>
                                <div class="adding-list" v-else>
                                    <input type="text" v-model="newListTitle" class="add-list-input-title" max="30" id="add-list-input-title" autofocus="">
                                    <div class="controls-add-list">
                                        <button type="button" class="btn btn-info btn-add-list" @click="addList">Add list</button>
                                        <button type="button" class="btn btn-info btn-cancel-add-list" @click="isAddingList=false">Cancel</button>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </Draggable>
                </Container>
            </div>
        </div>
    </div>
</template>

<script src="./table.js"></script>

<style src="./table.css" scoped></style>
