<template>
    <div class ="InputAA0">
        <div :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }"></div>
        <input v-model = "message" />
    </div>
</template>
<style>
    .InputAA0 {
        box-sizing:border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        background-color: rgba(200,200,200,0.2);
        box-shadow: 0px 0px 0px 0.55px white;
        border-radius: 0.2em;
    }
    .InputAA0 input {
        box-sizing:border-box;
        padding: 7px;
        background-color: rgba(200,200,200,0);
        border-radius: 0.2em;
        border: none;
        color: white;
        font-size: 15px;
    }
    .InputAA0:focus {
        background-color: #ffffff;
        color:black
    }
    .InputAA0 input:focus {
        background-color: #ffffff;
        color:black
    }
    .InputAA0:hover {
      background-color: rgba(200,200,200,0.3);
    }
    .InputAA0 div {
        width:20px;
        height: 20px;
        margin-right: 7px;
        background-size: 100%;
        background-color: rgba(200,200,200,0);
        border-radius: 0.2em;
    }
</style>
<script>
export default {
  name: 'InputAA0',
  props: {
    message: String,
    img_src: String
  }
}
</script>
