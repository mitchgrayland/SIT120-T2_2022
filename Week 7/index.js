Vue.component("button-tracker", {
  data: function() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">Click count {{ count }}</button>'
});

Vue.component("user-profile", {
  props: ["fullname", "email"],
  template:
    "<p>My name is {{ fullname }} and my email address is {{ email }}</p>"
});

new Vue({
  el: "#app",
  data() {
    return {
      fruits: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Orange" },
        { name: "Pear" }
      ]
    };
  }
});
