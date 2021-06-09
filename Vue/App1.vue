<template>
  <div>
    <h1>状态更新</h1>
    hello world--{{myname}}
    <button @click='handleClick'>click</button>
        <h1>to do</h1>
    <input type="text" v-model="mytext">
    <button @click="handleAdd">add</button>
    <button @click="handleDel">del</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{data}}
      </li>
    </ul>
    <h1>抽屉</h1>
    <navbar @myevent="handleEvent">
      <button @click="isShow = !isShow">slot-button</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
import Vue from 'vue'
Vue.component('navbar', navbar)

export default {
  data () {
    return {
      myname: 'zss',
      mytext: '',
      datalist: [],
      isShow: false
    }
  },
  components: {
    sidebar
  },
  methods: {
    handleClick () {
      this.myname = 'qmn'
    },
    handleAdd () {
      console.log(this.mytext)
      this.datalist.push(this.mytext)
    },
    handleDel () {
      this.datalist.splice(0, 1) // pop()删除最后一个   splice（0,1）删除第一个
    },
    handleEvent () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
  li{
    background: deepskyblue;
  }
</style>
