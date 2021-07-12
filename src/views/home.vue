<template>
  <div class="content">
    <h2 @click="toRoutes('compositionAPI')">1、compositionAPI</h2>
    <h2 @click="toRoutes('teleport')">2、teleport</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    toRoutes(path) {
      this.$router.push({ path: path });
    },
  }
}
</script>
