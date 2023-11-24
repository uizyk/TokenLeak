<template>
    <div id="footerContainer" class="
    justify-between items-center py-5 px-5 text-white bg-hero-dark
    flex flex-col h-fit
    md:flex-row md:h-80 md:justify-center;
">

        <div id="leftSection" class="w-2/4 min-h-full flex flex-col justify-around h-48 text-center
        md:text-start">
            <a href="#">
                <h1 class="text-purple py-1 text-lg font-semibold">TokenLeak</h1>
            </a>
            <div id="newsletterContainer">
                <h3 class="mb-2">Subscribe to our newsletter</h3>
                <input class="p-1 text-black" type="text" placeholder="Your Email">
            </div>
            <p>2023 All rights reserved.</p>
        </div>

        <div id="rightSection" class="w-2/4 h-full flex flex-col text-center
                md:justify-end md:flex-row md:gap-10 md:text-start">

            <ul>
                <li class="mb-2"><a href="#">Home</a></li>
                <li class="mb-2"><a href="#">About</a></li>
                <li class="mb-2"><a href="#">Services</a></li>
                <li class="mb-2"><a href="#">Blog</a></li>
                <li class="mb-2"><a href="#">Contact</a></li>
            </ul>
            <ul>
                <li class="mb-2"><a href="#">Facebook</a></li>
                <li class="mb-2"><a href="#">Linkedin</a></li>
                <li class="mb-2"><a href="#">Twitter</a></li>
                <li class="mb-2"><a href="#">Instagram</a></li>
            </ul>
            <ul>
                <li class="mb-2"><a href="#">Terms of Service</a></li>
                <li class="mb-2"><a href="#">Privacy Policy</a></li>
                <li class="mb-2"><a href="#">Cookie Policy</a></li>
            </ul>
            <ul>
                <li class="mb-2"><a href="#">Contact Us</a></li>
                <li class="mb-2"><a href="#">example.gmail.com</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TheFooter',
}
</script>
