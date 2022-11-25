<script>
export default {
  name : 'PastProjectsSection',
}
</script>


<template>
  <section>
    <div class="mb-container">
      <div class="row d-flex flex-column">

        <div class="text-container col-12">
          
          <div class="text-left-side">
            SEPARATOR
            <h2>
              Our recent <span class="hchangecolor">web designs</span> & some examples of past <span class="hchangecolor">projects</span>
            </h2>
            SEPARATOR
          </div>
          <div class="text-right-side">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto quaerat excepturi possimus, a facilis laudantium libero eaque sequi velit autem ullam aliquam est non dolorem iure quae nulla? Aspernatur enim libero recusandae, obcaecati porro doloribus autem voluptatum totam architecto. Aperiam saepe a recusandae nulla id fugit optio voluptates veritatis.</p>
          </div>
          
        </div>

        <!-- elementi da ciclare -->
        <div class="boxes-container col-12">
          <div class="row d-flex flex-wrap">
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
            <div class="square-box col-3">
              <img src="../../assets/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="button col-12">BUTTON box shadow</div>

      </div>
    </div>

    <span class="text-rotated-anticlockwise">17 years of experience helping people for best solutions</span>

  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 200px;
  padding-bottom: 200px;
  background-color: #FFFFFF;
  
}

.text-container {
  .text-left-side {
    width: 40%;
  }
  .text-right-side {
    width: 60%;
  }
}
</style>