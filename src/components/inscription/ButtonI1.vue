<template>
    <button class ="buttonI1">
        <div :style="{ backgroundImage: 'url(https://commons.wikimedia.org/wiki/File:Vue.js_Logo_2.svg)' }" ></div>
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .buttonI1 {
        display: flex;
        justify-content: center;
        align-items: center;

        box-sizing:border-box;
        padding: 9px;
        width: 320px;
        background-color:white;
        border-radius: 0.2em;
        border: none;
        box-shadow: 1px 1px 2px 1px rgb(220,220,220);
        color: #505F79;
        font-weight: bold;
        font-size: 15px;
    }
    .buttonI1:active {
        border: solid 2px rgb(200,200,200);
        background-color: rgb(240,240,240);
        box-shadow: none
    }
    .buttonI1 div {
        border: solid 1px;
        width:18px;
        height: 18px;
        margin-right: 7px;
        background-image:url('~@/components/inscription/image/microsoft_logo.svg');
        background-size: 100%;
        border: none;
    }
</style>
<script>
export default {
  name: 'ButtonI1',
  props: {
    message: String,
    img_src: String
  },
  methods: {
    imageSource () {
      return 'url(\'' + this.img_src + '\')'
    }
  },
  data () {
    return {
      member: {
        name: 'Jakz',
        coverImage: '@components/inscription/image/microsoft_logo.svg'
      }
    }
  }
}
</script>
