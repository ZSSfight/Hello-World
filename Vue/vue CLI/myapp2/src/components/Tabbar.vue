<template>
    <nav>
        <ul>   <!-- 申明式导航 -->
            <router-link to="/film" tag="li" active-class="zssstyle">电影</router-link>
            <router-link to="/cinema" tag="li" active-class="zssstyle">影院</router-link>
            <router-link to="/center" tag="li" active-class="zssstyle">我的</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    ul{
        display: flex;
        li{
            flex: 1;
        }
    }
    .zssstyle{
        color: lightblue;
    }
</style>
