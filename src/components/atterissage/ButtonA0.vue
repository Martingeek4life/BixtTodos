<template>
    <button class ="ButtonA0">
        <div :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }"></div>
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .ButtonA0 {
        display: flex;
        justify-content:left;
        align-items:center;
        box-sizing:border-box;
        padding: 9px;
        background-color:#EDEFF1;
        border-radius: 0.2em;
        border: none;
        color: #182B4C;
        font-size: 15px;
        cursor: pointer;
    }
    .ButtonA0:focus {
        background-color: #DFC0EB
    }
    .ButtonA0:hover {
      background-color: #E2E5E9
    }
    .ButtonA0 div {
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
  name: 'ButtonA0',
  props: {
    message: String,
    img_src: String
  }
}
</script>
