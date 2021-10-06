<template>
    <button class ="ButtonA1">
        <div :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }"></div>
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .ButtonA1 {
        display: flex;
        justify-content:left;
        align-items:center;
        box-sizing:border-box;
        padding: 9px;
        width: 230px;
        background-color:transparent;
        border-radius: 0.2em;
        border: none;
        color: #182B4C;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
    }
    .ButtonA1:focus {
        background-color: #DFC0EB
    }
    .ButtonA1:hover {
      background-color: #E6E9ED
    }
    .ButtonA1 div {
        border: solid 1px;
        width:18px;
        height: 18px;
        margin-right: 7px;
        background-size: 100%;
        border: none;
    }
</style>
<script>
export default {
  name: 'ButtonA1',
  props: {
    message: String,
    img_src: String
  }
}
</script>
