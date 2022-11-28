<script>
export default {
  name : 'CallToActionSection',
}
</script>


<template>
  <section>
    <div class="mb-container">
        <div class="row ">
          
          <div class="box-container col-6">
            <div class="cta-box left d-flex flex-column align-items-center justify-content-center">
              <h5>Are you ready?</h5>
              <h3>Start a new project</h3>
              <div class="email-area mb-3 d-flex ">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email address">
                <button>Submit</button>
              </div>
            </div>
          </div>

          <div class="box-container col-6">
            <div class="cta-box right d-flex flex-column align-items-center justify-content-center">
              <h5>What are you waiting for?</h5>
              <h3>Let's talk about work</h3>
              <div class="button d-flex justify-content-center">
                <a class="btn" href="#">Start now</a>
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
  padding-top: 125px;
  padding-bottom: 130px;
  background: linear-gradient(#FFFFFF 0%,#FFFFFF 50%, #F9F9F9 50%, #F9F9F9 100%);
  .mb-container {
    .row {
      .box-container {
        .cta-box {
          color: #FFFFFF;
          height: 340px;
          border-radius: 15px;
          text-transform: capitalize;
          .email-area {
            width: 60%;
            height: 60px;
            background: $scale-grey-color;
            color: #AAAAAA;
            border-radius: 50px;
            input {
              background: none;
              text-transform: capitalize;
              border: none;
              font-weight: 600;
              font-size: .9rem;
              padding-left: 2rem;
              color: #FFFFFF;
              box-shadow: none;
            }
            button {
              background: none;
              border: none;
              color: #AAAAAA;
              text-transform: uppercase;
              font-size: .9rem;
              font-weight: 600;
              padding-right: 1.5rem;
            }
            button:hover {
              color: #FFFFFF;
            }
          }
        }
        .cta-box.left {
          background: $scale-black-color-footer;
          h5 {
            color: #AAAAAA;
          }
          h3 {
            font-size: 2.5rem;
            font-weight: 600;
            padding: 10px 0 60px 0;
          }
        }
        .cta-box.right {
          background: $scale-main-color-reverse;
          h5 {
            font-size: 1.1rem;
            color: #E5E3DF;
          }
          h3 {
            font-size: 2.5rem;
            font-weight: 600;
            padding: 10px 0 60px 0;
          }
          .button {
            .btn {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 165px;
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
              font-weight: 800;
            }
          }
        }
      }
    }
  }
}
</style>