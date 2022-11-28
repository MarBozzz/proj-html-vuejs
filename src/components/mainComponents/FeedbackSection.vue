<script>
export default {
  name : 'Feedbacksection',
}
</script>


<template>
  <section>
    <div class="wrapper">
      <img src="../../assets/images/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg" alt="four business people meeting">
      <div class="layover d-flex flex-column align-items-center justify-content-center">
        <span>"</span>
        <p>When it comes to barbequing, there are two main schools of thought for the techniques that you can use. Freshly scrambled eggs with applewood smoked bacon <br>- are amazing!</p>
        <img src="../../assets/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="business woman analizing">
        <h4>Lissa Durbin</h4>
        <span>Client</span>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

section {
  min-height: 820px;
  .wrapper {
    height: 820px;
    position: relative;
    object-fit: contain;
    img {
      max-height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .layover {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba($color: #353535, $alpha: .95);
      color: #FFFFFF;
      text-align: center;
      span:first-child {
        color: $main-color;
        font-size: 12rem;
        margin: -140px;
      }
      p {
        font-size: 1.5rem;
        padding-inline: 22.5%;
        font-style: italic;
        line-height: 3rem;
        padding-bottom: 50px;
      }
      img {
        height: 90px;
        width: 90px;
        border-radius: 50%;
      }
      h4 {
        color: $main-color;
        text-transform: uppercase;
        padding-top: 25px;
      }
    }
  }
}
</style>