<template>
    <div id="headerContainer">
        <div>
            <!-- <img/> -->
            <h1 style="color: white;">logo</h1>
        </div>
        <div>
            <button>example</button>
            <button>example</button>
            <button>example</button>
            <button>example</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    #headerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        height: 80px;
        background-color: #0B0F19;
    }
</style>