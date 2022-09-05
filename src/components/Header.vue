<template>
  <div class="header-wrapper">
      <div class="header-content-wrapper">
          adwa
          <Button type="primary">Primary</Button>
          <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
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
            max-width: 1500px;
            height: 100%;
            margin: 0 auto;
        }
    }
</style>