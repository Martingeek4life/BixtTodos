<template>
    <select name = "nom de la liste" class = "DropDownList">
        <option> categorie 1 </option>
        <option> categorie 2 </option>
    </select>
</template>
<style>
    .DropDownList {
        box-sizing:border-box;
        padding: 4px;
        padding-right: 8px;
        width: 240px;
        background-color:transparent;
        border: solid 2px #DFE1E6;
        color: #888989;
        font-size: 15px;
        -moz-appearance: none;
        -webkit-appearance: none;
        background-size: 7%;
        background-repeat: no-repeat;
        background-position: right;
        background-origin: content-box;
        background-image: url('./image/down_arrow.svg');
    }
    .DropDownList::-ms-expand {
        display: none;
    }
</style>
