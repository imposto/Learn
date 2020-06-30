<template>
    <div class="gift">
        <div class="gift-tie-1"></div>
        <div class="gift-tie-2"></div>
        <div class="gift-top"></div>
        <div class="gift-body"></div>
  </div>
</template>

<script>
export default {
    name: "Gift"
};
</script>

<style>
.gift {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

  /* // deixar na frente dos outros elementos na tela  z-index */
}
.gift-top {
    width: 120px;
    height: 20px;
    background-color: yellowgreen;
}
.gift-body {
    width: 100px;
    height: 70px;
    background-color: rgb(145, 194, 47);
}
.gift-tie-1 {
    width: 100px;
    height: 10px;
    background-color: rgba(255, 0, 0, 0.781);
    position: absolute;
    top: 40px;
}
.gift-tie-2 {
    width: 10px;
    height: 90px;
    background-color: rgba(255, 0, 0, 0.781);
    position: absolute;
}
</style>