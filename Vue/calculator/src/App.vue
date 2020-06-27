<template>
  <div class="" id="app">
      <h1>Calculadora</h1>
      <Calculator/>
  </div>
</template>

<script>
import Calculator from "./main/Calculator"
// registrar componente
export default {
    components : {Calculator}
}
</script>

<style>
@font-face{
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

*{
    /* Em toda a aplicação sera aplicada a RobotoMono, caso nao esteja disponivel, fonte padrão monospace */
    font-family: "RobotoMono" , "monospace";
}

body{
    margin: 0;
}

#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;
    background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
    
}

</style>