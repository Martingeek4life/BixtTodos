<template>
    <button :style="{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="ButtonSquare">
    </button>
</template>
<style>
    .ButtonSquare {
        display: flex;
        justify-content:left;
        align-items:center;
        box-sizing:border-box;
        width: 38px;
        height: 38px;
        background-color:rgba(230, 233, 237,0);
        border-radius: 0.2em;
        border: none;
        color: #182B4C;
        font-size: 13px;
        cursor: pointer;
        background-size: 55%;
        background-repeat: no-repeat;
        background-position: center;
    }
    .ButtonSquare:focus {
        background-color: #E4F0F6
    }
    .ButtonSquare:hover {
      background-color:rgba(230, 233, 237,0.2);
      /*02517F*/
    }
</style>
<script>
export default {
  name: 'ButtonSquare',
  props: {
    message: String,
    img_src: String
  }
}
</script>
