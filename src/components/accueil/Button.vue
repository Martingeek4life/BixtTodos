<template>
    <button class ="button">
        {{ message }}
    </button>
</template>
<style>
    .button {
        box-sizing:border-box;
        padding: 7px;
        background-color:#2575B3;
        border-radius: 0.2em;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 16px;
    }
    .button:hover {
        background-color:#10345D
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
