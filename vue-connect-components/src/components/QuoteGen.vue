<template>
  <div id="quoteGen">
    <div class="container2">
        <p>Generate up to 10 quotes here</p>
        <div class="quote__capacity"><span class="quote__progress" :style="{width:`${quoteArr.length * 10}%`}"></span></div>
        <h3>{{quoteArr.length}}/10</h3>
        <div class="quote__input">
          <textarea aria-label="quoteInput" name="quoteInput" id="quoteTyped" cols="30" rows="10" placeholder="  input the quote you want to generate" @keyup.enter="pushQuote">
          </textarea>
        <div class="quote__input--btn">
          <button @click="pushQuote">generate</button>
        </div>
      </div>
      <div class="quote__generated">
        <p v-for="(quote, index) in quoteArr" :key="quote.id" @click="deleteQuote(index)">{{quote}}</p>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rouge+Script");
#quoteGen {
  text-align: center;
  height: 100%;
  background: #ffafbd; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ffc3a0,
    #ffafbd
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ffc3a0,
    #ffafbd
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.container2 {
  margin: 0 10vw;
  padding: 10vw 1vw 10vw 1vw;
}

.container2 > p {
  font-size: 1.8rem;
  margin-bottom: 5rem;
}

.quote__capacity {
  background-color: #fff;
  width: 100%;
  height: 1rem;
  border-radius: 1rem;
}
.quote__progress {
  display: block;
  background: hsla(278, 92%, 53%, 0.534); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #ef8e38,
    hsla(278, 92%, 53%, 0.534)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #ef8e38,
    hsla(278, 92%, 53%, 0.534)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 10%;
  height: 1rem;
  border-radius: 1rem;
  transition: all 0.7s cubic-bezier(0.59, -0.41, 0.38, 1.49);
}

.quote__generated {
  padding: 0.7rem;
  width: 100%;
  height: auto;
  margin-top: 0.3rem;
}

.quote__generated p {
  background-color: rgb(170, 90, 90);
  width: 100%;
  color: white;
  font-family: "Rouge Script", cursive;
  font-size: 4rem;
  line-height: 4rem;
  margin-top: 1.4rem;
  margin-bottom: 0.7rem;
  box-shadow: 5px 6px 1rem 1px #888888;
}

.quote__generated p:hover {
  opacity: 0.9;
  background-color: rgb(255, 100, 100);
  transition: all 1s;
  color: black;
}

/*button*/
button {
  margin: 0.7rem auto;
  outline: none;
  padding: 0.6rem;
  font-size: 1.2rem;
  color: white;
  border-style: none;
  border-radius: 0.5rem;
  background-color: rgba(21, 17, 255, 0.247);
  cursor: pointer;
  box-shadow: 0px 5px 3px 0px rgb(62, 63, 62);
  opacity: 0.9;
}

button:active {
  box-shadow: none;
  transform: translateY(1px);
  transition: all 0.1s;
}

button:disabled {
  background-color: rgba(112, 100, 100, 0.349);
}

button:hover {
  opacity: 1;
  transition: all 0.7s;
}

textarea {
  border-radius: 0.5rem;
  border-style: none;
  outline: none;
  margin-top: 1.3rem;
}
</style>

<script>
export default {
  data() {
    return {
      quoteArr: ["Life start when fears end!", "Just do it"]
    };
  },
  methods: {
    pushQuote() {
      let quoteTyped = document.querySelector("#quoteTyped");
      if (this.quoteArr.length >= 10) {
        alert(
          "You've reach maximum capacity on generating quote, for capicity expansion please subscribe to our premium plan. Contact: stephenchowmail@gmail.com"
        );
      } else if (quoteTyped.value == "" || quoteTyped.value == "\n") {
        alert("Please fill in the text area");
        quoteTyped.value = "";
      } else {
        this.quoteArr.push(quoteTyped.value);
        quoteTyped.value = "";
      }
    },
    deleteQuote(id) {
      this.quoteArr.splice(id, 1);
    }
  }
};
</script>
