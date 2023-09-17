<template>
    <footer style="width:100%;text-align:center;box-sizing:border-box;display:inline-block" class="border-slate-300 border-t text-xs md:text-md sm:text-sm px-6 py-8 bg-gray-500">

        <p class="text-slate-200 pb-3">
            © All rights reserved - Your Company {{
                new Date().getUTCFullYear()
            }}
        </p>
    </footer>
</template>
<script>
    export default {
        data: () => ({})
    };
</script>
<style scoped></style>