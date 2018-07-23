<template>
  <div>
    <p>what is the result of {{num1}} {{randomSign}} {{num2}} = {{randomResult}}</p>
    <ul>
      <li v-for="(ans, index) in answerPool" :key="index" @click="checkAnswer(index)">{{ans}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    this.init();
  },
  data() {
    return {
      num1: 1000,
      num2: 10,
      falseAnswer1: 22,
      falseAnswer2: 986,
      falseAnswer3: -254,
      operators: [
        {
          sign: "+",
          method: function(a, b) {
            return a + b;
          }
        },
        {
          sign: "-",
          method: function(a, b) {
            return a - b;
          }
        },
        {
          sign: "x",
          method: function(a, b) {
            return a * b;
          }
        },
        {
          sign: "/",
          method: function(a, b) {
            return a / b;
          }
        }
      ],
      selectedOperator: 0,
      randomSign: "+",
      randomResult: 2,
      answerPool: []
    };
  },
  methods: {
    checkAnswer(i) {
      console.log(i);
    },
    randomNumber() {
      return Math.floor(Math.random() * 1000);
    },
    init() {
      this.selectedOperator = Math.floor(Math.random() * this.operators.length);
      this.num1 = this.num2 = Math.floor(Math.random() * 1000);
      this.falseAnswer1 = Math.floor(Math.random() * 1000);
      this.falseAnswer2 = Math.floor(Math.random() * 1000);
      this.falseAnswer3 = Math.floor(Math.random() * 1000);
      this.randomSign = this.operators[this.selectedOperator].sign;
      this.randomResult = this.operators[this.selectedOperator].method(
        this.num1,
        this.num2
      );
      this.answerPool.push(
        this.randomResult,
        this.falseAnswer1,
        this.falseAnswer3,
        this.falseAnswer2
      );
    }
  }
};
</script>
