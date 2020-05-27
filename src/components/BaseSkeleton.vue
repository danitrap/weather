<template>
  <section>
    <b-skeleton width="20%" :animated="animated"></b-skeleton>

    <b-skeleton width="40%" :animated="animated"></b-skeleton>

    <b-skeleton width="80%" :animated="animated"></b-skeleton>

    <b-skeleton :animated="animated"></b-skeleton>
  </section>
</template>

<script>
export default {
  data() {
    return {
      animated: true
    };
  }
};
</script>