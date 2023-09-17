<template>
    <div class="bg-slate-50">
        <VueNavigator class="z-10" />
        <header>
            <h1 class="text-6xl mt-12 mb-6">
                Contact
            </h1>
        </header>
        <main>
            <section style="margin:auto" class="max-w-2xl container">
                <h2 class="pb-6">
                    Your Company
                </h2>
                <address>
                    <label for="">Address</label><br /><a href="mailto: company@example.com" target="_blank">company@example.com</a><br /><a href="tel: 999 888 999" target="_blank">999 888 999</a>
                </address>
                <p>
                    Lorem ipsum dolor sit amet
                </p>
            </section>
        </main>
        <Footer />
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    import Footer from "@/components/Footer.vue";
    export default {
        components: {
            VueNavigator,
            Footer
        }
    };
</script>
<style scoped>
    main {
        display: inline-block;
        text-align: left;
        width: 100%;
        padding: 0px 40px;
        box-sizing: border-box;
        margin-bottom: 50px;
        font-family: verdana;
        margin-right: auto;
        margin-left: auto;
    }

    header {
        text-align: center;
        font-family: verdana;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    p {
        font-size: 20px;
        color: #6b6b6bff;
        margin-top: 50px;
        margin-bottom: 15px;
    }

    h2 {
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 10px;
        text-align: left;
    }
</style>