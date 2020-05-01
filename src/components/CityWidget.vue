<template>
  <div>
    <div class="title has-text-centered">{{ city }}</div>
    <div class="box">
      <article class="media">
        <div class="media-content">
          <div class="content has-text-centered">
            <p class="is-size-1">{{ temp | formatTemp }}</p>
            <p class="is-size-6">{{ description | capitalizeFirst }}</p>
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
