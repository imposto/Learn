<template>
  <div class="display">
      {{value}}
  </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>
div.display{
    background: linear-gradient(to right, rgb(75, 121, 161), rgb(40, 62, 81));
    grid-column: span 4;
    display: flex;
    justify-content:flex-end;
    padding: 10px;
    align-items: center;
    font-size: 35px;
    
}
</style>