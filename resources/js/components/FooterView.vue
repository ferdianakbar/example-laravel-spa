<template>
    <footer class="py-3 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; <router-link to="home">Personal Development</router-link> {{ new Date().getFullYear() }}</p></div>
    </footer>
</template>

<script>
export default {
    name: "FooterView"
}
</script>

<style scoped>

</style>
