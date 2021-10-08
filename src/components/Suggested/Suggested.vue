<template>
    <div class="suggested-space">
      <div class="suggested">
        <h5>SUGGESTED</h5>
        <ul>
          <li>join</li>
        </ul>
        <h5>ADD TO CARD</h5>
        <ul>
          <li>members</li>
          <li>labels</li>
          <li>checklist</li>
          <li>Dates</li>
          <li>attachment</li>
          <li>cover</li>
        </ul>
      </div>
      <SuggestedArea :card="card"></SuggestedArea>
    </div>
</template>
<script src="./Suggested.js"></script>
<style src="./Suggested.css" scoped></style>
