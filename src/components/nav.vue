<template>
    <div class="ntop">
    <div class="nav">
        <div class="img-div">
            <router-link to="/home">
                <img src="static/images/logo.png" width="60px" height="30px"/>
            </router-link>
        </div>
        <ul class="ul-div">
            <li>
                <router-link to="/movie" class="movie">电影</router-link>
            </li>
            <li>
                <router-link to="/book" class="book">图书</router-link>
            </li>
            <li>
                <router-link to="/gb" class="gb">广播</router-link>
            </li>
            <li>
                <router-link to="/xiaozu" class="xiaozu">小组</router-link>
            </li>
            <li>
                <router-link to="/sousuo" class="sousuo"></router-link>
            </li>
        </ul>
        <div class="clear"></div>
    </div>
    </div>
</template>


<style scoped>
    .ntop{
        height: 65px;
        width: 100%;
    }
    .movie {
        color: #2384e8;
    }

    .book {
        color: #9f7860;
    }

    .gb {
        color: #e4a813;
    }

    .xiaozu {
        color: #2ab8cc;
    }

    /*.sousuo {*/
    /*color:;*/
    /*}*/

    ul li {
        display: inline-block;
    }

    ul > li {
        margin-right: 8px;
    }

    .ul-div {
        float: right;
        padding-right: 50px;
        margin: 14px 10px 0 0;
        padding-top: 5px;
    }

    .img-div {
        margin: 16px 0 0 10px;
        width: 60px;
        height: 40px;
        float: left;
    }

    .clear {
        clear: both;
    }

    .nav {
        position: fixed;
        top: 0px;

        width: 100%;
        border-bottom: 1px solid #f3f3f3;
        background-color:white ;

    }
</style>
