<script>
export default {
  name : 'AppHeader',
}
</script>


<template>
  <header>
    <div class="upper-header">
      <div class="upper-header-content h-100 mb-container d-flex justify-content-between align-items-center">

        <div class="upper-header-content-left">
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
        <nav>
          <ul class="d-flex m-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Showcase</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header-right">
        <!-- <a class="btn" href="#"></a> -->
        <!-- I button saranno sostituiti con una mixin -->
        <!-- <button class="mb-btn btn-warning mx-3">Purchase</button> -->
        
        <i class="fa-solid fa-magnifying-glass px-3"></i>
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
    span {
      font-size: .8rem;
    }
    .header-right {
      @include button(main-button);
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
    .header-center {
      nav {
        ul {
          list-style: none;
          li {
            padding: 1rem;
            text-transform: uppercase;
            a {
              text-decoration: none;
              color: #3D3D3D;
            }
          }
        }
      }
    }
    .header-right{
      i {
        color: $main-color
      }
    }
  }
}

</style>