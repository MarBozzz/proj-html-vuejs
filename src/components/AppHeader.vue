<script>

import HeaderMenu from './headerComponents/HeaderMenu.vue';

export default {
  name : 'AppHeader',
  components : {
    HeaderMenu
  },
  data(){
    return {
      //voci del menu
      menuVoices : [
        'home',
        'about',
        'services',
        'showcase',
        'blog',
        'contact'
      ]
    }
  }
}
</script>


<template>
  <header>
    
      <div class="upper-header">
        <div class="upper-header-content h-100 mb-container d-flex justify-content-between align-items-center">

        <div class="upper-header-content-left">
          <a name="anchor" href="#"></a>
          <i class="fa-solid fa-phone"></i>
          <span class="px-3">(001)88451234</span>
          <span>88455438</span>
        </div>

        <div class="upper-header-content-right">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter px-4"></i>
          <i class="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
    </div>
    

    <div class="lower-header mb-container d-flex justify-content-between align-items-center">
      
      <div class="header-left">
        <div class="logo">
          <img src="public/cropped-Group-39-2x.png" alt="Logo Image">
        </div>
      </div>

      
      <div class="header-center">
        <!-- Elementi ciclati e inviati tramite props -->
        <nav>
          <ul class="d-flex m-0">
            <HeaderMenu v-for="(menuVoice, index) in menuVoices" :key="index"
            :menuVoice="menuVoice"
            />
          </ul>
        </nav>
      </div>

      <div class="header-right d-flex justify-content-between align-items-center">
        <a class="btn" href="#">Purchase</a>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixins' as *;

header {
  height: 145px;
  .upper-header {
    height: 40px;
    background-color: #3D3D3D;
    color: #FFFFFF;
    span {
      font-size: .8rem;
    }
    i:hover {
      transform: scale(1.1);
      color: $main-color;
    }
  }
  .lower-header {
    height: 105px;
    background-color: #FFFFFF;
    color: black;
    font-size: .9rem;
    .logo img {
      width: 200px;
    }
    .header-right{
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
      i {
        color: $main-color;
        font-size: 1rem;
        padding: 0 2rem;
      }
    }
  }
}

</style>