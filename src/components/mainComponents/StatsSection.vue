<script>
export default {
  name : 'StatsSection',
}
</script>


<template>
  <section>
    <div class="box left">
      <img src="../../assets/images/person-with-long-curly-hair-PZ99QM2-2x.jpg" alt="person-with-long-curly-hair">
      <div class="layer d-flex flex-column justify-content-center align-items-center">
        <h2>280</h2>
        <h4 class="py-4">Projects</h4>
        <div class="lower-stats d-flex justify-content-between align-items-center">
          <div class="left-stats">
            <h3>+3,500</h3>
            <h4>Users' Comments</h4>
          </div>

          <div class="middle-separator"></div>

          <div class="right-stats">
            <h3>100%</h3>
            <h4>Happy Clients</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="box right">
      <div class="text-container mb-container">
        <h2>
          We <span class="hchangecolor">love</span> what<br> we do
        </h2>
        SEPARATOR
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet est quia inventore, obcaecati excepturi similique optio necessitatibus beatae aliquid nostrum quisquam iusto, reiciendis corrupti neque maxime velit soluta quidem, incidunt in. Aliquid ab, quis ipsam eius numquam illo accusantium aut.</p>
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>
            <span>&ensp;far far wawy, behind the eord mountains</span>
          </li>
          <li>
            <i class="fa-solid fa-check"></i>
            <span>&ensp;far far wawy, behind the eord mountains</span>
          </li>
          <li>
            <i class="fa-solid fa-check"></i>
            <span>&ensp;far far wawy, behind the eord mountains</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
  min-height: 150vh;
  background-color: #F9F9F9;
  .box {
    position: absolute;
    width: 46%;
    aspect-ratio: 1/1;
    border-radius: 10px;
  }
  .box.left {
    margin-left: 150px;
    img {
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
    .layer {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-color: rgba($color: #000000, $alpha: 0.5);
      color: #FFFFFF;
      h2 {
        font-size: 7.5rem;
        margin: 0;
      }
      h4 {
        font-size: 1.3rem;
        text-transform: uppercase;
      }
      .lower-stats {
        width: 60%;
        h3 {
          font-size: 2.5rem;
        }
        .left-stats, .right-stats {
          width: 50%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .middle-separator {
          display: inline-block;
          height: 70%;
          width: 1px;
          border-left: 1px solid #FFFFFF
        }
      }
    }
  }
  .box.right {
    top: 300px;
    right: 150px;
    background-color: #FFFFFF;
    box-shadow: 5px 5px 50px 5px #DEDEDE;
    .text-container {
      padding: 150px 0;
      font-size: .9rem;
      p {
        padding: 50px 0;
      }
      ul {
        padding: 0;
        li {padding: .5rem 0;
          i {
            color: $main-color;
          }
        }
      }
    }
  }
}
</style>