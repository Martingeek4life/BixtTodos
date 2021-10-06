<template>
    <div :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="RectangleA1">
        <ButtonA3 this.message = "something A3" img_src = "./image/setting.svg"/>
        <span>{{ message }}</span>
    </div>
</template>
<style>
    .RectangleA1 {
        box-sizing:border-box;
        display:flex;
        flex-direction: column;
        padding: 7px;
        width: 200px;
        height: 100px;
        background-size: 100%;
        border-radius: 0.2em;
        border: none;
        cursor: pointer;
    }
    .RectangleA1:focus {
        background-color: #E4F0F6
    }
    .RectangleA1:hover {
      opacity: 0.95;
    }
    .RectangleA1 span {
      text-align: justify;
      font-weight: bold;
      font-size: 16px;
      color:white;
    }
</style>
<script>
import ButtonA3 from '@/components/atterissage/ButtonA3.vue'
export default {
  name: 'RectangleA1',
  props: {
    message: String,
    img_src: String
  },
  component: {
    ButtonA3
  }
}
</script>
