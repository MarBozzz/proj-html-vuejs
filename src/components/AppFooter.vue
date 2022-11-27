<script>
export default {
  name : 'AppFooter',
  
}
</script>


<template>
  <footer>

    <div class="upper-footer">
      <div class="mb-container">
        <div class="row">

          <div class="col-3">
            <div class="box">
              <div class="logo pb-3">
                <img src="public/cropped-Group-39-2x.png" alt="Logo Image">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo repudiandae qui itaque sit saepe! Fugiat, ipsa! Provident itaque non et, fuga laudantium ipsum atque dicta quidem veritatis nemo aliquid</p>
            </div>
          </div>

          
          <div class="col-3">
            <div class="box">
              <h4 class="title">Quick Links</h4>
              <div class="styled-separator-line">
                <div class="segment one"></div>
                <div class="segment two"></div>
                <div class="segment three"></div>
              </div>
              <ul>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Projects</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="col-3">
            <div class="box">

              <h4 class="title">Contact</h4>

              <div class="styled-separator-line">
                <div class="segment one"></div>
                <div class="segment two"></div>
                <div class="segment three"></div>
              </div>

              <p>Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville TX 76051</p>

              <a href="#">info@yourdomain.com</a>

              <p>+99 (0) 101 0000 888</p>
              
            </div>
          </div>

          <div class="col-3">
            <div class="box">

              <h4 class="title">Location on Map</h4>

              <div class="styled-separator-line">
                <div class="segment one"></div>
                <div class="segment two"></div>
                <div class="segment three"></div>
              </div>

              <img src="../../src/assets/images/map.png" alt="Map">
              
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <div class="lower-footer d-flex justify-content-between">

      <div class="left"></div>

      <div class="center d-flex justify-content-between align-items-center">
        <span><i class="fa-regular fa-copyright"></i>&ensp;2020 Phlox Business Theme.</span>

        <div class="social">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter px-4"></i>
          <i class="fa-brands fa-pinterest-p"></i>
        </div>

      </div>

      <div class="right anchor-chat-btns d-flex justify-content-center">
        <div class="anchor-container">
          <a href="#anchor" class="anchor d-flex justify-content-center align-items-center"><i class="fa-solid fa-arrow-up-long"></i></a>
        </div>
        <div class="chat-container">
          <div class="chat d-flex justify-content-center align-items-center"><i class="fa-regular fa-comment"></i></div>
        </div>
      </div>

    </div>

  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixins' as *;

footer {
  .upper-footer {
    height: 580px;
    background-color: #FFFFFF;
    .mb-container {
      .row {
        padding: 150px 0;
        .col-3 {
          .box {
            h4 {
              text-transform: uppercase;
            }
            .styled-separator-line {
              padding-bottom: 1.5rem;
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
            ul {
              li {
                text-align: center;
              }
            }
            a {
              text-decoration: none;
              color: #000000;
              font-size: .9rem;
              font-weight: 200;
              line-height: 1.6rem;
            }
            a:hover {
              transform: scale(1.05);
              color: $main-color
            }
            img:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .lower-footer {
    height: 115px;
    background: $scale-black-color-footer;
    .left {
      width: 8.5%;
    }
    .center {
      width: 83%;
      color: #888888;
      span {
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 500;
      }
      i:hover {
        transform: scale(1.1);
        color: #FFFFFF;
      }
    }
    .right {
      width: 8.5%;
      .anchor-container {
        padding: 22.5px 0 0 0;
        .anchor {
          width: 35px;
          height: 35px;
          font-size: .7rem;
          background-color: #FFFFFF;
          border-radius: 50%;
        }
      }
      .anchor-container:hover {
        transform: scale(1.1);
      }
      .chat-container {
        padding: 10px 20px 0 15px;
        .chat {
          width: 60px;
          height: 60px;
          color: #FFFFFF;
          font-size: 1.5rem;
          background-color: #527CEB;
          border-radius: 50%;
        }
      }
      .chat-container:hover {
        transform: scale(1.1);
      }
    }
  }
}

</style>