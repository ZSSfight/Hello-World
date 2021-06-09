<template>
    <div>
        center
    </div>
</template>
<script>
export default {
// beforeRouteEnter (to, from, next) {    //局部路由拦截
//   // ...
//   if(!localStorage.getItem('token')){
//     next('/login')
//   }else{
//     next()
//   }
// },

  mounted () {
    // 检查是否有token；如果没有则重定向到login
    // if(!localStorage.getItem('token')){
    //     this.$router.push('/login')
    // }
  }
}
</script>
