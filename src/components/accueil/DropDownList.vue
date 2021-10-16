<template>
    <select class = "DropDownList" v-model="$i18n.locale">
        <option
            v-for="(lang, i) in langs"
            :key="`lang-${i}`"
            :value="lang"
            >
            {{ lang }}
        </option>
    </select>
</template>
<script>
export default {
  name: 'switchLocale',
  data () {
    return { langs: ['en', 'fr'] }
  }
}
</script>

<style>
    .DropDownList {
        box-sizing:border-box;
        padding: 7.5px;
        padding-right: 8px;
        width: 100px;
        background-color:transparent;
        border: solid 2px #DFE1E6;
        color: #888989;
        font-size: 15px;
        -moz-appearance: none;
        -webkit-appearance: none;
        background-size: 10%;
        background-repeat: no-repeat;
        background-position: right;
        background-origin: content-box;
        background-image: url('./down_arrow.svg');
    }
    .DropDownList::-ms-expand {
        display: none;
    }
</style>
