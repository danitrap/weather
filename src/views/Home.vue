<template>
  <main class="section is-fullheight">
    <div class="container app">
      <div class="title has-text-centered primary-heading">{{ today }}</div>
      <div class="cities">
        <city-widget
          v-for="city in weatherData"
          :key="city.id"
          :city="city.name"
          :temp="city.main.temp"
          :description="city.weather[0].description"
          :icon="city.weather[0].icon"
        />
      </div>
      <quotes-widget class="quotes" />
    </div>
  </main>
</template>

<script>
import CityWidget from "@/components/CityWidget.vue";
import QuotesWidget from "@/components/QuotesWidget.vue";
import Weather from "@/services/Weather";
export default {
  name: "Home",
  components: { CityWidget, QuotesWidget },
  data() {
    return {
      cities: ["Palermo", "Milano"],
      weatherData: [],
      lastUpdate: new Date()
    };
  },
  created() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      this.cities.forEach(city => {
        this.weatherData = [];
        Weather.getFor(city).then(weather => {
          this.weatherData.push(weather.data);
        });
      });
      this.lastUpdate = new Date();
    }
  },
  computed: {
    isLoading: () => this.weatherData.length === 0,
    lastUpdatedTime() {
      return this.lastUpdate.toLocaleTimeString();
    },
    today: () => new Date().toLocaleDateString(),
    shouldUpdate() {
      return new Date().getHours() - this.lastUpdate.getHours() !== 0;
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

.cities {
  display: flex;
  flex-direction: column;
  align-items: center;
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