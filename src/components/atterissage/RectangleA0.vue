<template>
    <button :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="ButtonA2">
        <div></div>
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .ButtonA2 {
        display: flex;
        justify-content:left;
        align-items:center;
        box-sizing:border-box;
        padding: 9px;
        width: 400px;
        height: 200px;
        background-size: 100%;
        border-radius: 0.2em;
        border: none;
        color: #182B4C;
        font-size: 13px;
        cursor: pointer;
    }
    .ButtonA2:focus {
        background-color: #E4F0F6
    }
    .ButtonA2:hover {
      background-color: #E6E9ED
    }
    .ButtonA2 div {
        border: solid 1px;
        width:16px;
        height: 16px;
        margin-right: 7px;
        margin-left: 20px;
        border: none;
    }
</style>
<script>
export default {
  name: 'ButtonA2',
  props: {
    message: String,
    img_src: String
  }
}
</script>
