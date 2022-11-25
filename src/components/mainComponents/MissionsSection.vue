<script>
export default {
  name : 'MissionsSection',
}
</script>


<template>
  <section class="d-flex">

    <div class="images-container">
      2 photo in position rel/abs + box shadow
    </div>

    <div class="text-container">
      <h2>
        Learn more about our <span class="hchangecolor">missions</span>
      </h2>
      SEPARATOR
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est quia inventore, obcaecati excepturi similique optio necessitatibus beatae aliquid nostrum quisquam iusto, reiciendis corrupti neque maxime velit soluta quidem, incidunt in. Aliquid ab, quis ipsam eius numquam illo accusantium aut.</p>
      BUTTON - box shadow
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 210px;
  padding-bottom: 320px;
  background-color: #F9F9F9;
  .images-container {
    width: 60%;
  }
  .text-container {
    width: 40%;
    padding-top: 140px;
    h2 {
      text-transform: lowercase;
    }
  }
}
</style>