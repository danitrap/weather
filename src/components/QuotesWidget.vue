<template>
  <blockquote class="is-italic has-text-centered has-text-white" @click="$emit('click')">
    <p>{{ quote }}</p>
    <p>&mdash; {{ author }}</p>
  </blockquote>
</template>

<script>
import Quotes from "@/services/Quotes";

export default {
  name: "quotes-widget",
  data() {
    return {
      quote: "",
      author: ""
    };
  },
  methods: {
    async fetchQuote() {
      const { data } = await Quotes.fetch();

      this.quote = data.contents.quotes[0].quote;
      this.author = data.contents.quotes[0].author;
    },
    // @deprecated
    async fetchRandomQuote() {
      const { data } = await Quotes.fetchRandom();

      this.quote = data.contents.quotes[0].quote;
      this.author = data.contents.quotes[0].author;
    }
  },
  created() {
    this.fetchQuote();
  }
};
</script>

<style>
</style>