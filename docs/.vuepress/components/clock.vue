<template>
    <div class="clock-component">
        <div class="clock">
            <p class="date">{{ date }}</p>
            <p class="time">{{ time }}</p>
        </div>
    </div>
</template>

<script>
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export default {
    data() {
        return {
            time: '',
            date: '',
            timer: null
        }
    },
    mounted() {
        this.updateTime()
        this.timer = setInterval(this.updateTime, 1000)
    },
    methods: {
        updateTime() {
            let cd = new Date()

            this.time =
                this.zeroPadding(cd.getHours(), 2) +
                ':' +
                this.zeroPadding(cd.getMinutes(), 2) +
                ':' +
                this.zeroPadding(cd.getSeconds(), 2)

            this.date =
                this.zeroPadding(cd.getFullYear(), 4) +
                '-' +
                this.zeroPadding(cd.getMonth() + 1, 2) +
                '-' +
                this.zeroPadding(cd.getDate(), 2) +
                ' ' +
                week[cd.getDay()]
        },
        zeroPadding(num, digit) {
            let zero = ''
            for (let i = 0; i < digit; i++) {
                zero += '0'
            }
            return (zero + num).slice(-digit)
        }
    }
}
</script>

<style scoped lang="less">
.clock-component {
    position: relative;
    width: 208px;
    height: 116px;
    border-radius: 10px;
    background: #0f3854;
    background: -webkit-radial-gradient(
        center ellipse,
        #0a2e38 0%,
        #000000 70%
    );
    background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
    background-size: 100%;

    p {
        margin: 0;
        padding: 0;
    }
    .clock {
        font-family: 'Share Tech Mono', monospace;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
        .time {
            letter-spacing: 0.05em;
            font-size: 30px;
            padding: 5px 0;
        }
        .date {
            letter-spacing: 0.1em;
            font-size: 5px;
        }
    }
}




</style>
