<template>
  <div class="d-flex align-items-center app-spinner">
    <b-spinner class="ml-auto"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'app-spinner'
}
</script>

<style scoped>
  .app-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
