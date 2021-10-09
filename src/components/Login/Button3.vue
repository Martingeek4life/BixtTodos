<template>
    <button :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="button3">
        {{ message }}
    </button>
</template>
<style>
    .button3 {
        height: 33px;
        width: 33px;
        box-sizing:border-box;
        border: none;
        padding: 7px;
        background-image: url("./img/facebook-svgrepo-com.svg");
        border-radius: 100%;
        color: #ffffff;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        margin-right: 20px;
    }
</style>
<script>
export default {
  name: 'Button3',
  props: {
    message: String,
    img_src: String
  }
}
</script>
