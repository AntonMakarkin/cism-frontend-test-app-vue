<template>
    <header>
        <h1>MyApp</h1>
        <h3>Username</h3>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',

    }
</script>

<style scoped>
    header {
        padding-top: 41px;
        padding-bottom: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-weight: 700;
        font-size: 32px;
        margin: 0;
    }

    h3 {
        font-weight: 400;
        font-size: 16px;
        margin: 0;
    }
</style>