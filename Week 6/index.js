new Vue({
  el: "#hello-world-app",
  data() {
    return {
      message: "",
      message2: "",
      password: "",
      checked: true,
      fruits: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Orange" },
        { name: "Pear" }
      ],
      selected: ""
    };
  }
});
