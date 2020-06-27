<template>
  <div class="calculator">
    <!-- para interagir com valores dentro dos componentes atravez dos methodos e datas, necessário usar os ':' nome da propriedade do componente ="aonde ela vai buscar os dados" -->
    <Display :value="displayValue" />
    <!-- disparando nosso proprio evento, @ dispara  -->
    <Button label="AC" triple @onCalcButtonClick="clearMemory" />
    <Button label="/" operation @onCalcButtonClick="setOperation" />
    <Button label="7" @onCalcButtonClick="addDigit" />
    <Button label="8" @onCalcButtonClick="addDigit" />
    <Button label="9" @onCalcButtonClick="addDigit" />
    <Button label="*" operation @onCalcButtonClick="setOperation" />
    <Button label="4" @onCalcButtonClick="addDigit" />
    <Button label="5" @onCalcButtonClick="addDigit" />
    <Button label="6" @onCalcButtonClick="addDigit" />
    <Button label="-" operation @onCalcButtonClick="setOperation" />
    <Button label="1" @onCalcButtonClick="addDigit" />
    <Button label="2" @onCalcButtonClick="addDigit" />
    <Button label="3" @onCalcButtonClick="addDigit" />
    <Button label="+" operation @onCalcButtonClick="setOperation" />
    <Button label="0" double @onCalcButtonClick="addDigit" />
    <Button label="." @onCalcButtonClick="addDigit" />
    <Button label="=" operation @onCalcButtonClick="setOperation" />
  </div>
</template>

<script>
import Display from "../components/Display";
import Button from "../components/Button";

// Sempre que importar um componente, precisa referenciar como combonente

export default {
  components: { Display, Button },
  data: function() {
    // data nos componentes sempre serão funções
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    };
  },
  methods: {
    clearMemory() {
      // esta expressao atribui ao primeiro parametro o estado inicial do segundo parametro
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      // validação do ponto
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }
      // primeiro caso, display é igual a 0 ou o parametro clear display é true, se um deles for true retorna true
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;

      // note que o this.displayValue faz referencia ao parametro no escopo global, e nao no local por isso é possivel usar os 2 ao mesmo tempo
      this.displayValue = displayValue;
      this.clearDisplay = false;

      if (n !== ".") {
        const i = this.current;
        const newValue = parseFloat(displayValue);
        this.values[i] = newValue;
      }
    }
  }
};
</script>

<style>
.calculator {
  height: 540px;
  width: 350px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 78px 78px 78px 78px 78px;
}
</style>