<template>
    <div :style = "{ backgroundImage: 'url(' + require(img_src + '') + ')' }" class ="RectangleA1">
        <div>
          <button class ="RectangleA1Message0">
            <span>{{ message0 }}</span>
          </button>
        </div>
        <span class = "RectangleA1Message">{{ message }}</span>
    </div>
</template>
<style>
    .RectangleA1 {
        box-sizing:border-box;
        display:flex;
        flex-direction: column;
        padding: 8px;
        width: 195px;
        height: 100px;
        background-size: 100%;
        border-radius: 0.2em;
        border: none;
        cursor: pointer;
        opacity: 0.95;
    }
    .RectangleA1:focus {
        background-color: #E4F0F6
    }
    .RectangleA1:hover {
      opacity: 1;
    }
    .RectangleA1 .RectangleA1Message {
      text-align: justify;
      font-weight: bold;
      font-size: 16px;
      color:white;
    }
    .RectangleA1 .RectangleA1Message0 {
        box-sizing:border-box;
        display: flex;
        justify-content:left;
        align-items:center;
        padding: 3.5px;
        padding-left: 8px;
        padding-right: 8px;
        background-color:rgba(200, 200, 200);
        border-radius: 0.2em;
        border: none;
        color: rgb(4, 23, 56);
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
    }
</style>
<script>
export default {
  name: 'RectangleA1',
  props: {
    message: String,
    message0: String,
    img_src: String
  }
}
</script>
