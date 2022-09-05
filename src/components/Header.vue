<template>
  <div class="header-wrapper">
      <div class="header-content-wrapper">
          <div class="logo-box">logo</div>
          <div class="navigate-box">nav</div>
          <div class="search-box">search</div>
          <div class="more-box">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="40"/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created(){
        window.document.documentElement.setAttribute( "data-theme", "dark" );
    },
    mounted(){
        // document.getElementsByTagName('body')[0].style.setProperty('--headerColor', '#fff');
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/themeMixin.scss";

    .header-wrapper {
        height: 60px;
        // background-color: $header-color;
        @include background-color("header-background-color");
        @include font-color("normal-font-color");
        @include font-size("normal-font-size");
        .header-content-wrapper{
            @include background-color("header-background-color");
            max-width: 1500px;
            // min-width: 1500px;
            height: 100%;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            .more-box {
                position: absolute;
                right: 0;
            }
        }
    }
</style>