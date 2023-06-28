<template>
    <div id="footerContainer">

        <div id="leftSection">
            <h1>logo</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic culpa sunt voluptate, odit omnis, at ipsam libero soluta earum perspiciatis officiis quo aliquam vitae itaque minima pariatur dolorum quis.
            </p>
            <div id="newsletterContainer">
                <h3>Subscribe to our newsletter</h3>
                <input type="text" placeholder="Your Email">
            </div>
            <p>2023 All rights reserved.</p>
        </div>

        <div id="rightSection">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <ul>
                <li>Facebook</li>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
            <ul>
                <li>Contact Us</li>
                <li><a ref="#">example.gmail.com</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
}
</script>

<style scoped>

    #footerContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        height: 350px;
        color: white;
        background-color: #0B0F19;
    }

    #leftSection {
        width: 50%;
        height: 100%;
    }

    #rightSection {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }

    #rightSection ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

</style>