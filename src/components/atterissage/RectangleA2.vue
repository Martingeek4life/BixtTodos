<template>
    <button :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="RectangleA2">
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .RectangleA2 {
        box-sizing:border-box;
        display:flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        width: 195px;
        height: 100px;
        background-size: 100%;
        border-radius: 0.2em;
        border: none;
        cursor: pointer;
        opacity: 0.85;
    }
    .RectangleA2:focus {
        background-color: #E4F0F6
    }
    .RectangleA2:hover {
      opacity: 1;
    }
    .RectangleA2 span {
      font-size: 13px;
      color: rgb(100, 100, 100)
    }
</style>
<script>
export default {
  name: 'RectangleA2',
  props: {
    message: String,
    img_src: String
  }
}
</script>
