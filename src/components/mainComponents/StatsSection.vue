<script>
export default {
  name : 'StatsSection',
}
</script>


<template>
  <section>
    <div class="box left"></div>
    <div class="box right"></div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: #F9F9F9;
  .box {
    width: 46%;
  }
}
</style>