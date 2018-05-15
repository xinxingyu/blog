<template>
    <div class="home">
        <div class="home-bg"></div>
        <!-- <Clock/> -->
        <div class="mewrapper">
            <div class="me">
                <div class="me-header"></div>
                <a
                    href="https://gist.github.com/xinxingyu"
                    class="me-link"
                    target="_blank"
                >
                    <!-- <img :src='"../public/icon.jpg"' alt=""> -->
                    <img src='https://avatars1.githubusercontent.com/u/12365466?s=460&v=4' alt="">
                </a>
                <h1>XinXingyu</h1>
                <ul class="me-info">
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/xinxingyu?tab=repositories"
                        ><strong>20</strong>repos</a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/xinxingyu?tab=followers"
                        ><strong>7</strong>followers</a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://gist.github.com/xinxingyu"
                        >
                        <div class="icon">
                            <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Clock from './clock'

export default {
    data() {
        return {

        }
    },
    components: {
        Clock
    }
}
</script>

<style scoped lang="less">
.home {
    .home-bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #003973;
        background: -moz-linear-gradient(left,#003973 0,#e5e5be 100%);
        background: -webkit-linear-gradient(left,#003973 0,#e5e5be 100%);
        background: linear-gradient(to right,#003973 0,#e5e5be 100%);
        // background: linear-gradient(to right,#0c7b49 0,#e5e5be 100%);
    }
    .mewrapper {
        position: relative;
        width: 100%;
        margin-top: 40px;
    }
    .me {
        margin: 0 auto;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        width: 16rem;
        // transform: translate(-50%, -50%);
        background: #fff;
        overflow: hidden;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        box-sizing: border-box;
        text-align: center;

        .me-header {
            height: 148px;
            position: relative;
            padding: 0;
            margin: 0;
            background: linear-gradient(90deg,#eaecc6,#2bc0e4);
        }
        .me-link {
            display: inline-block;
            overflow: hidden;
            background: #fff;
            border-radius: 100%;
            box-shadow: 0 1px 1px rgba(0,0,0,.3);
            margin-top: -43px;
            border: 3px solid #fff;
            position: relative;
            img {
                display: block;
                width: 5rem;
                height: 5rem;
            }
            &:hover {
                animation: rotate 1s forwards;
            }
        }
        h1 {
            font-size: 24px;
            font-weight: 500;
            text-decoration: none;
        }
        .me-info {
            font-size: 12px;
            list-style-type: none;
            margin: 0;
            padding: 0;
            border-top: 1px solid #eee;
            zoom: 1;

            li {
                width: 33.33%;
                float: left;
                font-size: 12px;
                padding: 8px 0;
                box-shadow: 1px 0 0 #eee;
                a {
                    color: #707070
                }
                strong {
                    display: block;
                    color: #292f33;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .icon {
                    margin-top: 6px;
                }
            }
        }
    }
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
