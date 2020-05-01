<template>
  <div>
    <div class="title has-text-centered">{{ city }}</div>
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content has-text-centered">
            <h1 class="title is-1">{{ temp | formatTemp }}</h1>
            <p class="subtitle">{{ description | capitalizeFirst }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityWidget",
  props: {
    city: String,
    temp: Number,
    description: String
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
.box {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
