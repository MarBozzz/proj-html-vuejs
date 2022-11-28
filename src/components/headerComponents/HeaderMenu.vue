<script>
export default {
  name : 'HeaderMenu',
  props : {
    menuVoice: String,
  }
}
</script>

<!-- ricevo il menu tramite props dall'AppHeader -->
<template>
  <div class="header-center">
    <nav>
      <ul class="d-flex m-0 p-0">
        <li>
          <a href="#">{{menuVoice}}</a>
        </li>
      </ul>
    </nav>
  </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/vars' as *;
@use '../../styles/partials/mixins' as *;

.header-center {
  nav {
    ul {
      li {
        padding: 1rem;
        text-transform: uppercase;
        a {
          text-decoration: none;
          color: #3D3D3D;
        }
        a:hover {
          transform: scale(1.05);
          color: $main-color
        }
      }
    }
  }
}
</style>