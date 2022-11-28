<script>
export default {
  name : 'PackagesSection',
}
</script>


<template>
  <section>
    <div class="mb-container">
      <div class="row">

        <div class="col-4">
          <div class="text-container">
            <h2 class="pb-3">
              With <span class="hchangecolor">live chat<br>24/7</span> support
            </h2>
            
            <div class="styled-separator-line">
              <div class="segment one"></div>
              <div class="segment two"></div>
              <div class="segment three"></div>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est quia inventore, obcaecati excepturi similique optio necessitatibus beatae aliquid nostrum quisquam iusto, reiciendis corrupti neque maxime velit soluta quidem, incidunt in.</p>
          
          </div>
        </div>

        <div class="col-8">
          <div class="row">

            <div class="col-4">
              <div class="card-container">
                <div class="mb-card">

                  <div class="upper-color-band"></div>
                  <div class="upper d-flex flex-column justify-content-center">
                    <h4 class="text-uppercase">Designing</h4>
                    <span>All Designs</span>
                  </div>
                  <div class="middle d-flex justify-content-center align-items-center">
                    <h3><span>$</span>&ensp;13&ensp;<span>/Design</span></h3>
                  </div>
                  <div class="lower">
                    <ul>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Creative Design Enabled</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Vibrant Color Usage</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Eye Catching Design</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Extreme Typography</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Exceptional Design</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>

            <div class="col-4">
              <div class="card-container">
                <div class="mb-card">

                  <div class="upper-color-band"></div>
                  <div class="upper d-flex flex-column justify-content-center">
                    <h4 class="text-uppercase">Development</h4>
                    <span>WordPress Projects</span>
                  </div>
                  <div class="middle d-flex justify-content-center align-items-center">
                    <h3><span>$</span>&ensp;15&ensp;<span>/Project</span></h3>
                  </div>
                  <div class="lower">
                    <ul>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Creative Design Enabled</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Vibrant Color Usage</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Eye Catching Design</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Extreme Typography</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Exceptional Design</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div class="col-4">
              <div class="card-container">
                <div class="mb-card">

                  <div class="upper-color-band"></div>
                  <div class="upper d-flex flex-column justify-content-center">
                    <h4 class="text-uppercase">SEO</h4>
                    <span>Web Products</span>
                  </div>
                  <div class="middle d-flex justify-content-center align-items-center">
                    <h3><span>$</span>&ensp;10&ensp;<span>/Product</span></h3>
                  </div>
                  <div class="lower">
                    <ul>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Creative Design Enabled</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Vibrant Color Usage</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Eye Catching Design</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Extreme Typography</span>
                      </li>
                      <li>
                        <i class="fa-solid fa-check"></i>
                        <span>&ensp;Exceptional Design</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  padding-top: 200px;
  padding-bottom: 130px;
  background-color: #F9F9F9;
  .mb-container {
    .row {
      .col-4 {
        .text-container {
          padding: 130px 60px;
          h2 {
            text-transform: capitalize;
            line-height: 4.5rem;
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
          p {
            padding: 35px 0;
          }
        }
      }
      .col-8 {
        .row {
          .col-4 {
            .card-container {
              .mb-card {
                border-radius: 25px;
                background: $scale-black-color-footer;
                text-align: center;
                box-shadow: 5px 5px 50px 5px #DEDEDE;
                .upper-color-band {
                  height: 15px;
                }
                .upper {
                  height: 100px;
                  background-color: #FFFFFF;
                  h4 {
                    font-size: 1.7rem;
                    font-weight: 800;
                  }
                  span{
                    color: #888888;
                    font-size: .9rem;
                  }
                }
                .middle {
                  height: 120px;
                  color: #FFFFFF;
                  h3 {
                    font-size: 3.2rem;
                    span:first-child {
                      font-size: 2.2rem;
                    }
                    span:nth-child(2) {
                      font-size: 1.2rem;
                    }
                  }
                }
                .lower {
                  background-color: #FFFFFF;
                  border-bottom-right-radius: 25px;
                  border-bottom-left-radius: 25px;
                  ul {
                    padding: 50px 0;
                    margin: 0;
                    li {
                      padding: .7rem;
                    }
                  }
                }
              }
              .mb-card:hover {
                cursor: pointer;
                transform: scale(1.05);
              }
            }
          }
          .col-4:nth-child(even) {
            .card-container {
              .mb-card {
                background: $scale-main-color;
              }
            }
          }
        }
      }
    }
  }
}
</style>