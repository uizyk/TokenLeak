<template>
    <div id="footerContainer" class="
    justify-between items-center py-5 px-5 text-white bg-background-dark
    flex flex-col h-fit
    md:flex-row md:h-80 md:justify-center;
">

        <div id="leftSection" class="w-2/4 min-h-full flex flex-col justify-around h-48 text-center
        md:text-start">
            <h1>logo</h1>
            <div id="newsletterContainer">
                <h3 class="mb-2">Subscribe to our newsletter</h3>
                <input type="text" placeholder="Your Email">
            </div>
            <p>2023 All rights reserved.</p>
        </div>

        <div id="rightSection" class="w-2/4 h-full flex flex-col text-center
                md:justify-end md:flex-row md:gap-10 md:text-start">

            <ul>
                <li class="mb-2"><a ref="#">Home</a></li>
                <li class="mb-2"><a ref="#">About</a></li>
                <li class="mb-2"><a ref="#">Services</a></li>
                <li class="mb-2"><a ref="#">Blog</a></li>
                <li class="mb-2"><a ref="#">Contact</a></li>
            </ul>
            <ul>
                <li class="mb-2"><a ref="#">Facebook</a></li>
                <li class="mb-2"><a ref="#">Linkedin</a></li>
                <li class="mb-2"><a ref="#">Twitter</a></li>
                <li class="mb-2"><a ref="#">Instagram</a></li>
            </ul>
            <ul>
                <li class="mb-2"><a ref="#">Terms of Service</a></li>
                <li class="mb-2"><a ref="#">Privacy Policy</a></li>
                <li class="mb-2"><a ref="#">Cookie Policy</a></li>
            </ul>
            <ul>
                <li class="mb-2"><a ref="#">Contact Us</a></li>
                <li class="mb-2"><a ref="#">example.gmail.com</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TheFooter',
}
</script>
