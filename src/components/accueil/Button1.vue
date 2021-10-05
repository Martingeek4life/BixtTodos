<template>
    <button class ="button1">
        {{ message }}
    </button>
</template>
<style>
    .button1 {
        box-sizing:border-box;
        padding: 7px;
        background-color:transparent;
        border-radius: 0.2em;
        border: none;
        padding: 7px;
        color:#0065FF;
        font-weight: bold;
        font-size: 16px;
    }
    .button1:hover {
        text-decoration: underline;
    }
    .button1:focus {
       text-decoration: underline;
    }
</style>
<script>
export default {
  name: 'Button1',
  props: {
    message: String
  }
}
</script>
