<script>
export default {
  name : 'AppJumbotron',
}
</script>


<template>
  <div class="jumbotron position-relative">

    <div class="mb-container">
      <div class="text-container">
        <h5 class="">17 years of experience</h5>
        <h1 class="py-2">Focus on Your&ensp;<span class="hchangecolor">Business</span></h1>

        <div class="styled-line">
          <div class="segm-one"></div>
          <div class="segm-two"></div>
          <div class="segm-three"></div>
        </div>

        <p class="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aperiam dolores. Ad, sit. Qui porro blanditiis temporibus voluptatibus voluptatem quisquam eos dolore illo velit error aspernatur culpa consectetur enim incidunt voluptatum pariatur quasi omnis sequi, dicta dignissimos accusantium facere ipsum.</p>
        <button class="mb-btn btn-warning mx-3">Read more</button>
      </div>
      <div class="swipe-controls w-50 d-flex justify-content-between py-5">
        <h4>Facebook - Instagram - Youtube - Twitter</h4>
        <button class="mb-btn btn-warning mx-3">Swipe button</button>
      </div>

    </div>
    
    <div class="image-container position-absolute d-flex align-items-center">
      <img src="../assets/images/Group-35-2x.png" alt="Jumbotron Image">
    </div>


    <div class="d-flex align-items-center">
      
    </div>

    
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixins' as *;

.jumbotron {
  height: 105vh;
  background-color: #F9F9F9;
  font-family: "Ubuntu", sans-serif; 
  color: black;
  overflow: hidden;
}
.text-container {
  width: 40%;
  h5 {
    padding-top: 170px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .5rem;
    color: $main-color;
  }
  h1 {
    font-weight: 900;
    
  }
  .styled-line {
    .segm-one {
      display: inline-block;
      width: 10px;
      height: 50px;
      border-bottom: 6px solid $main-color;
      border-radius: 2px;
    } 
    .segm-two {
      display: inline-block;
      width: 10px;
      height: 50px;
    } 
    .segm-three {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-bottom: 6px solid $main-color;
      border-radius: 2px;
    } 

  }
  /*h1::after {
    content: '';
    display: block;
    width: 100px;
    height: 50px;
    border-bottom: 6px solid $main-color;
    border-radius: 2px;
  }*/
}
.image-container {
  top: 0;
  right: 0;
  img {
    transform: translate(+22%, -13%);
  }
}

</style>