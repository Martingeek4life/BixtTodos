<template>
    <button type = "submit" class ="button2">
        {{ message }}
    </button>
</template>
<style>
    .button2 {
        box-sizing:border-box;
        padding: 7px;
        width: 300px;
        background-color:#0065FF;
        border-radius: 0.2em;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
    .button2:hover {
        background-color:#0051CC
    }
    .button2:focus {
        box-shadow: 0px 0px 0px 4px lightblue;
    }
</style>
<script>
export default {
  name: 'Button2',
  props: {
    message: String
  }
}
</script>
