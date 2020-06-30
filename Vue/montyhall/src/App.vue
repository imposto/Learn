<template>
  <div id="app">
      <h1>Problema de MontyHall</h1>
        <div class="form">
            <div v-if="!started">
                <label for="doorsAmount">Quantas portas? </label>
                <input type="text" id="doorsAmount" size="3"
                    v-model.number="doorsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedDoor">Qual a porta premiada? </label>
                <input type="text" id="selectedDoor" size="3"
                    v-model.number="selectedDoor">
            </div>
            <button v-if="!started" @click="started = true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorsAmount" :key="i">
                <Door :hasGift="i === selectedDoor" :number="i"/>
            </div>
        </div>
        <!-- Se nao colocar 2 pontos eme interpreta como string e nao como logico  -->
  </div>
</template>

<script>

import Door from './components/Door'


export default {
    name: 'App',
    components: {Door},
    data: function() {
        return {
            started: false,
            doorsAmount: 3,
            selectedDoor: null
        }
    }
}
</script>

<style>

*{
    box-sizing: border-box;
    font-family: 'MuseoModerno', cursive;
}
body{
    color: white;
    background: linear-gradient(to right, rgb(186, 83, 112), rgb(244, 226, 216));
}

#app{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1{
    border: 1px solid #000;
    background-color: #0006;
    padding: 20px;
    margin-bottom: 60px;
}

.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    margin-bottom: 40px;
}
.form, .form input, .form button{
    margin-bottom: 20px;
    font-size: 2rem;
}

.doors{
    /* esticar  */
    align-self: stretch;
    display: flex;
    justify-content: space-around;


    /* quebrar linha  */
    flex-wrap: wrap;
}
</style>