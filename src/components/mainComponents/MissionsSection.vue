<script>
export default {
  name : 'MissionsSection',
}
</script>


<template>
  <section class="d-flex">

    <div class="images-container">
      <div class="image-one-container">
        <img src="../../assets/images/busy-architect-PYVKWM4-1024x872.jpg" alt="Busy Architect">
        <div class="layover h-100"></div>
      </div>
      <div class="image-two-container">
        <img src="../../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="Business woman">
      </div>
    </div>

    <div class="text-container">
      <h2>
        Learn more <br> about our <br><span class="hchangecolor">missions</span>
      </h2>
      
      <div class="styled-separator-line">
        <div class="segment one"></div>
        <div class="segment two"></div>
        <div class="segment three"></div>
      </div>
      
      <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est quia inventore, obcaecati excepturi similique optio necessitatibus beatae aliquid nostrum quisquam iusto, reiciendis corrupti neque maxime velit soluta quidem, incidunt in. Aliquid ab, quis ipsam eius numquam illo accusantium aut.</p>
      
      <a class="btn" href="#">Read more</a>

    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 210px;
  padding-bottom: 420px;
  background-color: #F9F9F9;
  .images-container {
    width: 64%;
    position: relative;
    .image-one-container {
      position: absolute;
      right: 36%;
      width: 66%;
      img {
        border-radius: 35px;
      }
      .layover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 35px;
        background: $scale-background-main-color
      }
    }
    .image-two-container {
      position: absolute;
      left: 18%;
      top: 22%;
      width: 66%;
      img {
        border-radius: 20px;
        box-shadow: 5px 5px 50px 5px #DEDEDE;
      }
    }
  }
  .text-container {
    width: 36%;
    padding-top: 140px;
    h2 {
      text-transform: lowercase;
    }
    .styled-separator-line {
      .segment {
        display: inline-block;
        height: 5px;
      }
      .segment.one {
        width: 8px;
        background: $scale-background-main-color;
        border-radius: 2px;
      } 
      .segment.two {
        width: 5px;
      } 
      .segment.three {
        width: 50px;
        background: $scale-background-main-color;
        border-radius: 2px;
      } 
    }
    .btn {
        @include button(main-button);
        background: $scale-background-main-color;
        box-shadow: 2px 2px 10px $main-color;
    }
    .btn:hover {
      @include button(main-button);
      background: $scale-black-color;
      box-shadow: none;
    }
  }
}
</style>