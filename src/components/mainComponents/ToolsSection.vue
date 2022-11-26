<script>
export default {
  name : 'ToolsSection',
  data(){
    return {
      tools : [
        {
          icon : '<i class="fa-solid fa-paper-plane"></i>',
          name : 'Speed Optimization',
          use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
        },
        {
          icon : '<i class="fa-solid fa-cloud"></i>',
          name : 'Cloud Solutions',
          use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
        },
        {
          icon : '<i class="fa-solid fa-tablet-screen-button"></i>',
          name : 'Website Design',
          use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
        },
        {
          icon : '<i class="fa-solid fa-stopwatch"></i>',
          name : 'Online Marketing',
          use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
        },
      ]
    }
  }
}
</script>


<template>
  <section>
    
    <div class="wrapper position-relative">
      <div class="mb-container">
        <div class="row">
  
          <div class="text-container">
            <h2>
              We are here to make your <span class="hchangecolor">website</span> look more <span class="hchangecolor">elegant</span> and stylish!
            </h2>
            
            <div class="styled-separator-line">
              <div class="segment one"></div>
              <div class="segment two"></div>
              <div class="segment three"></div>
            </div>
  
            <a class="btn" href="#">View All</a>
  
          </div>
  
          <!-- card ciclata dinamicamente -->
          <div class="box-container">
            <div class="row d-flex flex-wrap">

              <div v-for="(tool, index) in tools" :key="index" class="card-wrapper col-6">
                <div class="toolcard d-flex flex-column mb-5">
                  <div class="icon"><i class="fa-solid fa-paper-plane"></i></div>
                  <h4>{{tool.name}}</h4>
                  <p>{{tool.use}}</p>
                </div>
              </div>
  
            </div>
          </div>
  
        </div>
      </div>
      
      <span class="text-rotated-anticlockwise">
        17 years of experience helping people for best solutions
      </span>

    </div>

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
      line-height: 5rem;
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
        margin: 3rem 0;
    }
    .btn:hover {
      @include button(main-button);
      background: $scale-black-color;
      box-shadow: none;
    }
  }
  .box-container {
    width: 60%;
    .row {
      .card-wrapper {
        .toolcard {
          border: 1px solid #DEDEDE;
          border-radius: 20px;
          box-shadow: 5px 5px 50px 5px #DEDEDE;
          padding: 3rem;
          .icon {
            font-size: 3rem;
            color: $main-color;
            padding-bottom: 1.5rem;
          }
          h4 {
            font-size: 1.7rem;
            padding-bottom: .5rem;
            font-weight: 300;
          }
          p {
            font-size: .9rem;
            font-weight: 200;
          }
        }
        .toolcard:hover {
          background: $scale-cards-background-main-color-reverse;
          color: #FFFFFF;
          cursor: pointer;
          .icon {
            color: #FFFFFF;
          }
        }
      }
    }
  }
  .text-rotated-anticlockwise {
    position: absolute;
    top: 45%;
    left: 83%;
    display: inline-block;
    transform: rotateZ(270deg);
    white-space: nowrap;
  }
}
</style>