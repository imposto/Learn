<template>
    <!-- fazer ele começar a escutar um evento com @, neste caso o click entao @click  -->
  <button class="button"
   @click="$emit('onCalcButtonClick', label)" 
   :class="{ double, triple, operation}">{{label}}</button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean }
  }
};
</script>

<style>
:root {
  --bg-button: #efffc8;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}
.button:active {
  background-color: #e2ff99;
}

.button.operation {
  background-color: #85cb33;
}
.button.operation:active {
  background-color: #2a4110;
  color: #efffc8;
}

.button.double {
  grid-column: span 2;
}
.button.triple {
  grid-column: span 3;
}
</style>