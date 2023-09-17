<template>
    <nav class="bg-gray-500 h-12 w-full block top-0 sticky text-right shadow border-slate-300 border-b">
        <div style="width:83px;background-size:contain;background-repeat:no-repeat;margin-left:10px;cursor:pointer;float:left;height:35px;margin-top:7px;margin-bottom:7px" @click="$router.push('/')" class="rounded-full logo">
        </div><button @click="$router.push('/')" :class="{active: route === '/'}" class="text-slate-200 hover:text-slate-50">
            Home
        </button> <button @click="$router.push('/about')" :class="{active: route === '/about'}" class="text-slate-200 hover:text-slate-50">
            About
        </button><button @click="$router.push('/contact')" :class="{active: route === '/contact'}" class="text-slate-200 hover:text-slate-50">
            Contact
        </button>
    </nav>
</template>
<script>
    export default {
        data: () => ({}),
        computed: {
            route() {
                return this.$route.path
            }
        },
        methods: {
            open(url) {
                location.href = url
            }
        }
    };
</script>
<style scoped>
    button {
        border-style: none;
        padding-right: 12px;
        padding-left: 12px;
        cursor: pointer;
        transition: .3s ease color;
        height: 100%;
    }

    button.active {
        font-weight: bold;
    }

    .logo {
        background-image: url(@/assets/your-logo.png);
    }
</style>