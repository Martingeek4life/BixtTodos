<template>
    <button :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="RectangleA0">
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .RectangleA0 {
        box-sizing:border-box;
        display:flex;
        padding: 7px;
        width: 195px;
        height: 100px;
        background-size: 100%;
        border-radius: 0.2em;
        border: none;
        cursor: pointer;
        opacity: 0.95;
    }
    .RectangleA0:focus {
        background-color: #E4F0F6
    }
    .RectangleA0:hover {
      opacity: 1;
    }
    .RectangleA0 span {
      text-align: justify;
      font-weight: bold;
      font-size: 16px;
      color:white;
    }
</style>
<script>
export default {
  name: 'RectangleA0',
  props: {
    message: String,
    img_src: String
  }
}
</script>
