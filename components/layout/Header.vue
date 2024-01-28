<script setup>
const isOpen = useDialog();
</script>

<template>
    <header class="fixed flex w-full p-4">
        <nav class="navbar z-30 rounded-box bg-base-100 bg-opacity-50 shadow-xl backdrop-blur-2xl backdrop-saturate-200">
            <ul class="menu menu-horizontal flex w-full justify-center px-1">
                <li>
                    <NuxtLink href="/">about</NuxtLink>
                </li>
                <li>
                    <details>
                        <summary>projects</summary>
                        <ul
                            class="rounded-t-none bg-base-200 bg-opacity-70 p-2 shadow-xl backdrop-blur-2xl backdrop-saturate-200">
                            <li>
                                <NuxtLink href="/#dislexiless">dislexiless</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/#dogemaze">doge maze</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/#sheltervr">sheltervr</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/#lofiblockrunner">lofiblockrunner</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/#oldwebsites">old websites</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/#smartspot">smart spot</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/#graphicdesign">graphic design</NuxtLink>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <button @click="isOpen = true">contact</button>
                </li>
            </ul>
        </nav>
    </header>
</template>