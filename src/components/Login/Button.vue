<template>
    <button class ="button">
        {{ message }}
    </button>
</template>
<style>
    .button {
        width: 257px;
        height: 33px;
        box-sizing:border-box;
        border: none;
        padding: 7px;
        background: #10345D;
        border-radius: 15px;
        color: #ffffff;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        margin-top: 20px;
    }
    .button:hover {
        background-color:#0051CC
    }
    .button:focus {
        box-shadow: 0px 0px 0px 4px lightblue;
    }
</style>
<script>
export default {
  name: 'Button',
  props: {
    message: String
  }
}
</script>
