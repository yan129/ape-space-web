<template>
  <div class="header-wrapper">
      <div class="header-content-wrapper">
          <div class="logo-box">logo</div>
          <div class="navigate-box">nav</div>
          <div class="search-box">search</div>
          <div class="more-box">
            <Dropdown :transfer="true">
                <Avatar class="avatar-img" src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="40"/>
                <DropdownMenu slot="list">
                    <DropdownItem>您好，{{  }}</DropdownItem>
                    <DropdownItem>退出</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            screenWidth: null,
            screenHeight: null,
        }
    },
    created(){
        // window.document.documentElement.setAttribute( "data-theme", "dark" );
    },
    mounted(){
        // document.getElementsByTagName('body')[0].style.setProperty('--headerColor', '#fff');
    }
}
</script>

<style lang="scss" scoped>
    @import "@/assets/scss/themeMixin.scss";

    .header-wrapper {
        width: 100%;
        height: 60px;
        // background-color: $header-color;
        @include background-color("header-background-color");
        @include font-color("normal-font-color");
        @include font-size("normal-font-size");
        .header-content-wrapper{
            width: 92%;
            height: 100%;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            .more-box {
                position: absolute;
                right: 0;
                .avatar-img {
                    cursor: pointer;
                    &:hover {
                        @include box-shadow("avatar-shadow");
                    }
                }
            }
        }
    }
</style>