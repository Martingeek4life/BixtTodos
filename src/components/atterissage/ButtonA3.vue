<template>
    <button class ="ButtonA3">
        <span>{{ message }}</span>
    </button>
</template>
<style>
    .ButtonA3 {
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
    .ButtonA3:focus {
        background-color: #DFC0EB
    }
    .ButtonA3:hover {
      background-color: #E2E5E9
    }
</style>
<script>
export default {
  name: 'ButtonA3',
  props: {
    message: String,
    img_src: String
  }
}
</script>
