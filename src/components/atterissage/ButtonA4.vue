<template>
    <button class ="ButtonA4">
        <span>{{ message }}</span>
        <div v-if ="img_src!=null"  :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }"></div>
    </button>
</template>
<style>
    .ButtonA4 {
        display: flex;
        justify-content:left;
        align-items:center;
        box-sizing:border-box;
        padding: 9px;
        background-color:rgba(230, 233, 237,0);
        border-radius: 0.2em;
        border: none;
        color: #182B4C;
        font-size: 16px;
        cursor: pointer;
    }
    .ButtonA4:focus {
        background-color: #DFC0EB
    }
    .ButtonA4:hover {
      background-color:rgba(230, 233, 237,0.8);
    }
    .ButtonA4 div {
        border: solid 1px;
        width:18px;
        height: 18px;
        margin-left: 7px;
        background-size: 100%;
        border: none;
    }
</style>
<script>
export default {
  name: 'ButtonA4',
  props: {
    message: String,
    img_src: String
  }
}
</script>
