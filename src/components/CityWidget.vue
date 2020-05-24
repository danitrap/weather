<template>
  <div class="weather">
    <h2 class="title has-text-centered is-marginless">{{ city }}</h2>
    <article class="media">
      <div class="media-content">
        <div class="content has-text-centered weather__wrapper">
          <img class="weather__icon" :src="iconUrl" :alt="description" />
          <div class="weather__description">
            <h1 class="title is-1 has-text-weight-light">{{ temp | formatTemp }}</h1>
            <p class="subtitle">{{ description | capitalizeFirst }}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "CityWidget",
  props: {
    city: String,
    temp: Number,
    description: String,
    icon: String
  },
  computed: {
    iconUrl() {
      return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
    }
  },
  filters: {
    formatTemp(temp) {
      return `${Math.trunc(temp)}°`;
    },
    capitalizeFirst(text) {
      return text.charAt(0).toUpperCase() + text.substring(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.weather {
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 20px;
  padding: 10px 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__icon {
  }

  &__description {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__temperature {
    font-weight: 300;
  }
}
</style>
