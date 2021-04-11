<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
    <H1>21212</H1>
    <h2>sasadasdaxczxczx</h2>
    <h3>qwqweqwe</h3>
  </div>
</template>

<script>
  import EmptyLayout from "./layouts/EmptyLayout";
  import MainLayout from "./layouts/MainLayout";
  export default {
    components:{EmptyLayout, MainLayout},
    computed: {
      layout() {
        console.log(this.$route.meta)
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    }
  }
</script>

<style lang="scss">
    @import '~materialize-css/dist/css/materialize.min.css';
    @import "assets/index.css";
</style>
