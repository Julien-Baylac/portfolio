<template>
    <div>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <div class="social-buttons">
            <a 
                v-for="(social, index) of socials"
                :key="index"
                :href="social.ref" 
                :class="`social-button ${social.icon}`"
                target="_blank">
                <i :class="`fa fa-${social.icon}`"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'social-network-bar',
    data() {
        return {
            socials: [
                {
                    icon: 'linkedin',
                    ref: 'https://www.linkedin.com/in/julien-baylac-041600172/'
                },
                {
                    icon: 'twitter',
                    ref: 'https://twitter.com/julien_baylac'
                },
                {
                    icon: 'github',
                    ref: 'https://github.com/Julien-Baylac'
                }
            ]
        }       
    }
}
</script>

<style lang="scss" scoped>
.social-button {
    display: inline-block;
    background-color: #fff;
    width: 42px;
    height: 42px;
    line-height: 40px;
    margin-left: 0 !important;
    margin-right: 14px !important;
    text-align: center;
    position: relative;
    overflow: hidden;
    opacity: .99;
    border-radius: 50%;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.06);
    -webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
    transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
}

.social-button .fa {
    font-size: 25px;
    vertical-align: middle;
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
    transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
}

.social-button.linkedin:before {
    background-color: #0277b5;
}

.social-button.linkedin .fa {
    color: #0277b5;
}

.social-button.twitter:before {
    background-color: #1da1f1;
}

.social-button.twitter .fa {
    color: #1da1f1;
}

.social-button.vk:before {
    background-color: #4a75a8;
}

.social-button.vk .fa {
    color: #4a75a8;
}

.social-button.github:before {
    background-color: #242a2f;
}

.social-button.github .fa {
    color: #242a2f;
}


.social-button:hover:before {
    top: -10%;
    left: -10%;
}

.social-button:hover .fa {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.social-button:focus {
    opacity: .85;
}

* {
    margin: 0;
    padding: 0;
    color: inherit;
    box-sizing: inherit;
}

:focus {
    outline: none;
}
</style>