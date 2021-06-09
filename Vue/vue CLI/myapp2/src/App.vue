<template>
  <div>
    <tabbar></tabbar>
    <!-- 路由容器，类似于slot -->
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>

<style lang="scss">

</style>
