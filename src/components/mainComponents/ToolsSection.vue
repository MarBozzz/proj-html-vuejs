<script>
export default {
  name : 'ToolsSection',
}
</script>


<template>
  <section>
    <div class="mb-container">
      <div class="row">

        <div class="text-container">
          <h2>
            We are here to make your <span class="hchangecolor">website</span> look more <span class="hchangecolor">elegant</span> and stylish!
          </h2>
          SEPARATOR
          BUTTON - box shadow
        </div>

        <!-- da ciclare dinamicamente -->
        <div class="box-container">
          <div class="row d-flex flex-wrap">
            <div class="col-6 p-4 d-flex flex-column">
              <div class="icon">ICONA</div>
              <h4>TESTO IN H4</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nobis voluptatum officia? Cupiditate. READ MOre?</p>
              HOVER EFFECT
              box-shadow
            </div>
            <div class="col-6"></div>
            <div class="col-6"></div>
            <div class="col-6"></div>
          </div>
        </div>

      </div>
      
    </div>

    <span class="text-rotated-anticlockwise">17 years of experience helping people for best solutions</span>

  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 225px;
  padding-bottom: 260px;
  background-color: #FFFFFF;
  .text-container {
    padding-top: 80px;
    width: 40%;
    h2 {
      text-transform: capitalize;
    }
  }
  .box-container {
    width: 60%;
  }
}
</style>