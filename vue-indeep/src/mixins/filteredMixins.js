export const filteredMixins = {
  data() {
    return {
      textFiltered: "",
      cars: ["volvo", "bmw", "toyota", "honda", "chevy", "ford"]
    };
  },
  computed: {
    filteredSearch() {
      return this.cars.filter(a => a.match(this.textFiltered));
    }
  }
}