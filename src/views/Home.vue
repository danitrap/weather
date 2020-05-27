<template>
  <main class="section is-fullheight">
    <div class="container app">
      <div class="title has-text-centered primary-heading">{{ today }}</div>
      <weather-widget :cities="cities" class="weather" />
      <quotes-widget class="quotes" />
    </div>
  </main>
</template>

<script>
import WeatherWidget from "@/components/WeatherWidget.vue";
import QuotesWidget from "@/components/QuotesWidget.vue";
export default {
  name: "Home",

  components: { WeatherWidget, QuotesWidget },

  data() {
    return {
      cities: ["Palermo", "Milano"]
    };
  },

  computed: {
    today() {
      return new Date().toLocaleDateString();
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url("../assets/palermo.jpg");
  background-size: cover;
  background-position: bottom;
  height: 100vh;
}

.app {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

.quotes {
  margin: auto 20px 0 10px;
}

.primary-heading {
  color: black;
  background: linear-gradient(
    to bottom,
    rgba(162, 26, 128, 0.73),
    rgba(117, 19, 93, 0.73)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>