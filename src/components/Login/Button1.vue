<template>
    <button class ="button1">
        {{ message }}
    </button>
</template>
<style>
    .button1 {
        box-sizing:border-box;
        background-color:transparent;
        border-radius: 0.2em;
        border: none;
        padding: 7px;
        font-style: normal;
        font-weight: 600px;
        font-size: 12px;
        line-height: 15px;
        color: #10345D;
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
