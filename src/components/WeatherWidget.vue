<template>
  <div>
    <base-skeleton v-if="isLoading" />
    <div class="cities">
      <city-detail
        v-for="city in weatherData"
        :key="city.id"
        :city="city.name"
        :temp="city.main.temp"
        :description="city.weather[0].description"
        :icon="city.weather[0].icon"
      />
    </div>
  </div>
</template>

<script>
import BaseSkeleton from "@/components/BaseSkeleton.vue";
import CityDetail from "@/components/CityDetail.vue";
import Weather from "@/services/Weather";

export default {
  name: "WeatherWidget",

  components: { BaseSkeleton, CityDetail },

  props: {
    cities: Array
  },

  data() {
    return {
      weatherData: [],
      lastUpdate: null
    };
  },

  created() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      this.weatherData = [];

      const promises = this.cities.map(city => {
        return Weather.getFor(city);
      });

      Promise.all(promises).then(weather => {
        this.weatherData = weather.map(({ data }) => data);
      });

      this.lastUpdate = new Date();
    }
  },

  computed: {
    isLoading() {
      return this.weatherData.length === 0;
    }
  }
};
</script>

<style>
.cities {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>