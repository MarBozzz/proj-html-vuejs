<script>

import { store } from '../data/store';

export default {
  name : 'AppJumbotron',
  data() {
    return {
      store,
      jumbotronSlide: [
      {
        path: 'Group-35-2x.png',
        id: '0'
      },
      {
        path: 'Group-36-2x.png',
        id: '1'
      },
      {
        path: 'Group-40-2x.png',
        id: '2'
      }
    ],
    activeImage : 0,
    isClicked : false
    }
  },
  methods : {
    changeImg(id) {
      
      this.activeImage=id;
      this.isClicked = !this.isClicked
    },
    getImagePath: function(imgPath){
      return new URL(imgPath, import.meta.url).href;
    }
  }
}
</script>


<template>
  <div class="jumbotron">
    <div class="wrapper position-relative">
      <div class="mb-container">
        <div class="text-container">
          <h5 class="">17 years of experience</h5>
          <h1 class="py-2">Focus on Your&ensp;<span class="hchangecolor">Business</span></h1>

          <div class="styled-separator-line">
            <div class="segment one"></div>
            <div class="segment two"></div>
            <div class="segment three"></div>
          </div>

          <p class="py-5">Sit amet consectetur adipisicing elit. Iusto, aperiam dolores. Ad, sit. Qui porro blanditiis temporibus voluptatibus voluptatem quisquam eos dolore illo velit error aspernatur culpa consectetur enim incidunt voluptatum pariatur quasi omnis sequi, dicta dignissimos accusantium facere ipsum.</p>

          <a class="btn" href="#">Read more</a>
          
        </div>

        <div class="swipe-controls w-50 d-flex justify-content-between py-5">
          <h4>Facebook - Instagram - Youtube - Twitter</h4>

          <div class="selector">
            <button @click="changeImg(0)" 
            :class="{'active' : isClicked}"
            class="btn active" input type="radio" name="swipe" id="0">01</button>
            <button @click="changeImg(1)" :class="{'active' : isClicked}" 
            class="btn" input type="radio" name="swipe" id="1">02</button>
            <button @click="changeImg(2)" :class="{'active' : isClicked}" 
            class="btn" input type="radio" name="swipe" id="2">03</button>
          </div>

        </div>

      </div>
    
      <div class="image-container position-absolute d-flex align-items-center">
        <img 
          v-for="(image, id) in jumbotronSlide" :key="id" 
          :src="getImagePath(`../assets/images/${jumbotronSlide[activeImage].path}`)" @click="changeImg(id)" 
          :class="{'active':id === activeImage}" alt="Phlox employees">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixins' as *;

.jumbotron {
  height: 105vh;
  display: block;
  background-color: #F9F9F9;
  font-family: "Ubuntu", sans-serif; 
  overflow: hidden;
  .wrapper {
    .mb-container {
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
    .swipe-controls {
      .selector {
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 56px;
        color: #FFFFFF;
        font-size: .8rem;
        text-transform: uppercase;
        border-radius: 50px;
        background: $scale-slider-color;
        
        .btn.active {
          @include button(main-button);
          background: $scale-main-color-reverse;
          width: 60px;
          height: 45px;
        }
      }
    }
  }
  .image-container {
    top: 0;
    right: 0;
    img {
      display: none;
    }
    img.active {
      display: inline-block;
      transform: translate(+22%, -13%);
    }
  }
  }
}


</style>