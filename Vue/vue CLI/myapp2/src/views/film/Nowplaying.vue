<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
                {{data.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        {
          id: 111,
          title: '111'
        },
        {
          id: 222,
          title: '222'
        }]
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`) // 编程式导航
    }
  }
}
</script>
