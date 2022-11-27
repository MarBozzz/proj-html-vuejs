<script>
export default {
  name : 'PastProjectsSection',
  data(){
    return {
      projects : [
        {
          pic : 'ina-soulis-227104-unsplash-1024x1024.jpg',
          layoverContent : 'A Decorated Flower',
          layoverDpt : 'Marketing'
        },
        {
          pic : 'sunisa-misa-531163-unsplash-1024x1024.jpg',
          layoverContent : 'A Famous Ferry Wheel',
          layoverDpt : 'Online Marketing'
        },
        {
          pic : '355H-1024x1024.jpg',
          layoverContent : 'Two Yellow Shoes',
          layoverDpt : 'Foot Locker'
        },
        {
          pic : 'photo-1448932252197-d19750584e56-1024x1024.jpg',
          layoverContent : 'A Candle',
          layoverDpt : 'Web-Marketing'
        },
        {
          pic : 'business-competition-PB366D8-1024x1024.jpg',
          layoverContent : 'Some Paper Ships',
          layoverDpt : 'Origami'
        },
        {
          pic : 'cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg', 
          layoverContent : 'A Wonderful Sofa Bed',
          layoverDpt : 'Human Resources'
        },
        {
          pic : 'aa9a4539-PQGJ7HU-1024x1024.jpg',
          layoverContent : 'Three Ballons',
          layoverDpt : 'Pink Floyds'
        },
        {
          pic : 'cody-davis-253928-unsplash-1024x1024.jpg',
          layoverContent : 'Blue Orange',
          layoverDpt : 'Grocery'
        }
      ]
    }
  },
  methods : {
    getImagePath: function(imgPath){
      return new URL(imgPath, import.meta.url).href;
    }
  }
}
</script>


<template>
  <section>
    <div class="wrapper position-relative">
      <div class="mb-container">
        <div class="row">
  
          <div class="text-container col-12 d-flex">
            <div class="text-left-side">
              
              <div class="styled-separator-line">
                <div class="segment one"></div>
                <div class="segment two"></div>
                <div class="segment three"></div>
              </div>

              <h2>
                Our recent <span class="hchangecolor">web designs</span> & some examples of <br> past <span class="hchangecolor">projects</span>
              </h2>
              
              <div class="styled-separator-line px-2">
                <div class="segment one"></div>
                <div class="segment two"></div>
                <div class="segment three"></div>
              </div>

            </div>

            <div class="text-right-side d-flex align-items-end px-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima architecto quaerat excepturi possimus, a facilis laudantium libero eaque sequi velit autem ullam aliquam est non dolorem iure quae nulla? Aspernatur enim libero recusandae, obcaecati porro doloribus autem voluptatum totam architecto. Aperiam saepe a recusandae nulla id fugit optio voluptates veritatis.</p>
            </div>
          </div>
  
          <!-- elementi ciclati -->
          <div class="boxes-container col-12">
            <div class="row d-flex flex-wrap">
              
              <div class="col-3 d-flex justify-content-between" v-for="(project, index) in projects" :key="index">
                <div class="square-box position-relative">
                  <img 
                    :src="getImagePath(`../../assets/images/${project.pic}`)"
                    alt="Project">
                  <div class="layover position-absolute d-flex flex-column justify-content-end pb-5">
                    <h4 class="px-5 fw-bold">{{project.layoverContent}}</h4>
                    <h5 class="px-5">{{project.layoverDpt}}</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="button col-12 d-flex justify-content-center align-items-center">
            <a class="btn" href="#">Read more</a>
          </div>
  
        </div>
      </div>

      <span class="text-rotated-anticlockwise">17 years of experience helping people for best solutions</span>

    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 200px;
  padding-bottom: 110px;
  background-color: #FFFFFF;
  .text-container {
    .text-left-side {
      width: 45%;
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
      h2 {
        padding: 3rem 1rem 2rem 0;
        font-size: 3.3rem;
      }
    }
    .text-right-side {
      width: 55%;
    }
  }
  .boxes-container {
    .row{
      --bs-gutter-x: 0.3rem;
      --bs-gutter-y: 0.3rem;
      padding-top: 5rem;
    }
    .col-3 {
      .square-box {
        img {
          border-radius: 5px;
        }
        .layover {
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 5px;
          color: rgba($color: #00000000, $alpha: 0);
        }
      }
      .square-box:hover img {
          transform: scale(1.1);
          z-index: 989;
      }
      .square-box:hover .layover {
        z-index: 990;
          background: $scale-background-main-color;
          display: block;
          transform: scale(1.1);
          cursor: pointer;
          h4, h5 {
            color: #FFFFFF;
          }
      }
    }
  }
  .button {
    padding: 120px 0;
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
  .text-rotated-anticlockwise {
    position: absolute;
    top: 54%;
    left: 83%;
    display: inline-block;
    transform: rotateZ(270deg);
    white-space: nowrap;
  }
}

</style>