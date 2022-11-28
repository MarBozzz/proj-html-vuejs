<script>
export default {
  name : 'NewsBlogSection',
}
</script>


<template>
  <section>
    <div class="wrapper position-relative">

      <div class="mb-container">
        <div class="row ">

          <div class="text-area col-12 d-flex flex-column align-items-center">
            <h2 class="pb-3">
              Latest news & our <span class="hchangecolor">blog</span>
            </h2>
            
            <div class="styled-separator-line">
              <div class="segment one"></div>
              <div class="segment two"></div>
              <div class="segment three"></div>
            </div>
          </div>

          <div class="boxes-area col-12">
            <div class="row">
              <div class="box-container col-4">
                <div class="news-box left">
                  <div class="img-container">
                    <img src="../../assets/images/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg" alt="business woman with documents">
                  </div>
                  <div class="text-box d-flex flex-column justify-content-center">
                    <p class="date">May 24, 2018 <span class="author">by Alex</span></p>
                    <h5><i class="fa-solid fa-circle"></i>&ensp;<span class="post-name">Marketing ideas</span></h5>
                  </div>

                </div>
              </div>

              <div class="box-container col-4">
                <div class="news-box left">
                  <div class="img-container">
                    <img src="../../assets/images/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg" alt="business man resting">
                  </div>
                  <div class="text-box d-flex flex-column justify-content-center">
                    <p class="date">May 24, 2018 <span class="author">by Alex</span></p>
                    <h5><i class="fa-solid fa-circle"></i>&ensp;<span class="post-name">Rest during working hours</span></h5>
                  </div>
                </div>
              </div>

              <div class="box-container col-4">
                <div class="news-box left">
                  <div class="img-container">
                    <img src="../../assets/images/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg" alt="simple office">
                  </div>
                  <div class="text-box d-flex flex-column justify-content-center">
                    <p class="date">May 24, 2018 <span class="author">by Alex</span></p>
                    <h5><i class="fa-solid fa-circle"></i>&ensp;<span class="post-name">Develop your startup idea</span></h5>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="button col-12 d-flex justify-content-center">
            <a class="btn" href="#">View all posts</a>
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
  padding-bottom: 130px;
  background-color: #FFFFFF;
  .wrapper {
    .mb-container {
      .row {
        .text-area {
          .styled-separator-line {
            padding: 20px 0 20px 60px;
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
        }
        .boxes-area {
          .row {
            .box-container {
              .news-box {
                position: relative;
                .img-container {
                  box-shadow: 5px 5px 50px 5px #DEDEDE;
                  overflow: hidden;
                  img {
                    border-radius: 10px;
                  }
                }
                .text-box {
                  position: absolute;
                  top: 80%;
                  left: 7.5%;
                  width: 85%;
                  height: 33%;
                  border-radius: 10px;
                  background: #FFFFFF;
                  padding-left: 2rem;
                  p {
                    color: #AAAAAA;
                    font-size: .9rem;
                    font-weight: 400;
                    margin: 0;
                  }
                  h5 {
                    padding-top: 5px;
                    text-transform: capitalize;
                    font-size: 1.4rem;
                    i {
                      font-size: .5rem;
                      vertical-align: middle;
                      color: $main-color;
                    }
                  }
                }
              }
              .news-box:hover {
                cursor: pointer;
                .img-container {
                  border-radius: 8px;
                  img {
                    transform:scale(1.05);
                    
                  }
                }
              }
            }
          }
        }
        .button {
          padding-top: 120px;
          .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 180px;
            height: 54px;
            color: #FFFFFF;
            font-size: .8rem;
            text-transform: uppercase;
            border-radius: 50px;
            background: $scale-black-color;
            box-shadow: 2px 8px 20px #888888;
          }
          .btn:hover {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 180px;
            height: 54px;
            color: #FFFFFF;
            font-size: .8rem;
            text-transform: uppercase;
            border-radius: 50px;
            background: $scale-background-main-color;
            box-shadow: 2px 2px 10px $main-color;
          }
        }
      }
    }
  }
  .text-rotated-anticlockwise {
    position: absolute;
    top: 43%;
    right: 83%;
    display: inline-block;
    transform: rotateZ(270deg);
    white-space: nowrap;
  }
}
</style>