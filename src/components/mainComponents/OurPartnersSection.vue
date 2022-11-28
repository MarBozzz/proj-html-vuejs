<script>
export default {
  name : 'OurPartnersSection',
  data(){
    return {
      partners : [
        {
          path : 'client-1-2x.png',
          name : 'Avant Garde'
        },
        {
          path : 'client-9-2x.png',
          name : 'Fast Lane Sportswear'
        },
        {
          path : 'client-7-2x.png',
          name : 'Ron Jones'
        },
        {
          path : 'client-3-2x.png',
          name : 'Chippy\'s'
        },
        {
          path : 'client-4-2x.png',
          name : 'Bullseye'
        },
        {
          path : 'client-5-2x.png',
          name : 'Mighty Furnitures'
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
    <!-- elementi ciclati -->
    <div class="mb-container col-12">
      <div class="row d-flex flex-wrap">
        
        <div class="col-2 d-flex justify-content-center align-items-center" v-for="(partner, index) in partners" :key="index">
          <div class="square-box">
            <img 
              :src="getImagePath(`../../assets/images/${partner.path}`)"
              alt="{{partner.name}}">
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  padding-bottom: 120px;
  background-color: #F9F9F9;
  .square-box:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
}
</style>