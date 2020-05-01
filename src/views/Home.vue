<template>
  <section class="section is-fullheight">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column" v-for="city in weatherData" :key="city.id">
          <city-widget
            :city="city.name"
            :temp="city.main.temp"
            :description="city.weather[0].description"
          />
        </div>
      </div>
      <div class="buttons">
        <b-button type="is-primary" expanded @click="getWeather">Aggiorna</b-button>
      </div>
    </div>
  </section>
</template>

<script>
import CityWidget from "@/components/CityWidget.vue";
import Weather from "@/services/Weather";
export default {
  name: "Home",
  components: { CityWidget },
  data: () => {
    return {
      cities: ["Palermo", "Milano"],
      weatherData: []
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
    }
  },
  computed: {
    isLoading: () => this.weatherData.length === 0
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
</style>