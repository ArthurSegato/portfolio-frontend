<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'

const smallTerminal = reactive({
    command: '',
    isValid: false
})

watch(() => smallTerminal.command,
    async (command) => {
        if (command.length > 0) smallTerminal.isValid = true
        else smallTerminal.isValid = false
    }
)

const commandHandler = async () => {
    switch (smallTerminal.command) {
        case 'erecto':
            smallTerminal.command = 'heh ( ͡° ͜ʖ ͡°)'
            await promiseTimeout(1000)
            break;
        default:
            const prefix = 'expecto patronum'
            if (smallTerminal.command.startsWith(prefix)) {
                const message = smallTerminal.command.substring(prefix.length)
                if (message.length > 0) await $fetch('server/api/easteregg', {
                    method: 'POST',
                    body: {
                        message,
                    },
                })
            }
            break;
    }
    smallTerminal.command = ''
}

</script>

<template>
    <section id="about" class="flex w-full items-center justify-center p-7 md:p-14 lg:py-28">
        <div class="flex w-full flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:w-5/6 lg:gap-24 xl:w-3/5">
            <div v-motion-slide-visible-once-left class="flex w-full flex-col gap-6">
                <h1 class="text-5xl font-black leading-normal">🤟 Hello!</h1>
                <article class="flex flex-col gap-2 text-sm leading-normal">
                    <p>
                        I'm
                        <strong>Arthur Segato</strong>
                        , a 24 yo Brazilian living in Portugal.
                    </p>
                    <p>Computer Scientist graduated, with experience in game development, ui/ux, full-stack development,
                        and a love for virtual reality, cybersecurity and open source!</p>
                    <p>
                        Apart of technology I like to urbex, learn about different cultures, languages and interact
                        with people from all over the world, I love big and silly dogs, practice
                        sports and take naps in cozy places, I'm a fan of F1, co-op games and only know how to cook
                        sweets.
                    </p>
                </article>
                <form @submit.prevent="commandHandler" autocomplete="off" class="w-full">
                    <label for="command" class="text-sm">Simple Terminal</label>
                    <div class="flex">
                        <input type="text" id="command" name="command" placeholder="You can type some commands here..."
                            v-model="smallTerminal.command"
                            class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100" />
                        <button type="submit" :disabled="!smallTerminal.isValid" aria-label="submit"
                            class="group cursor-not-allowed rounded-r-md border-y border-r border-[#181A1B] px-3 enabled:cursor-pointer dark:border-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 fill-[#181A1B] group-disabled:fill-[#181A1B]/50 dark:fill-stone-100 dark:group-disabled:fill-stone-100/50"
                                viewBox="0 0 16 16">
                                <path
                                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <div v-motion-slide-visible-once-right class="flex flex-col gap-6">
                <div class="flex items-center gap-4 md:flex-col">
                    <NuxtPicture format="avif, webp" src="/images/arthursegato.jpg" :img-attrs="{
                        width: '94',
                        height: '94',
                        loading: 'lazy',
                        decode: 'async',
                        title: 'Portrait of Arthur Segato',
                        alt: 'Arthur segato, man with long brown hair, outsite at night',
                        class: 'w-28 select-none rounded-full border-2 border-neutral-800/30 dark:border-slate-200/30 md:w-36 lg:w-44 2xl:w-56'
                    }" />
                    <ul>
                        <li class="text-2xl font-semibold text-neutral-800 dark:text-slate-200">Arthur Segato Paulo</li>
                        <li class="text-xl font-light text-gray-500 dark:text-slate-500">ArthurSegato</li>
                        <li class="text-base text-neutral-800 dark:text-slate-200">just like github, right?</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-4 md:gap-2">
                    <a class="flex h-12 md:h-8 w-full items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                        href="https://github.com/ArthurSegato" aria-label="Follow on github">
                        <p class="text-sm text-zinc-800 dark:text-slate-300">Follow</p>
                    </a>
                    <div class="flex flex-col gap-4 md:gap-2 md:flex-row">
                        <a class="flex h-12 md:h-8 w-full min-w-[90px] items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                            href="https://arthursegato.itch.io/" aria-label="Visit Itch.io profile">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="hidden h-4 w-4 fill-zinc-800 dark:fill-slate-300 md:inline-block"
                                viewBox="0 0 16 16">
                                <path
                                    d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                                <path
                                    d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                            </svg>
                            <p class="text-sm text-zinc-800 dark:text-slate-300 md:hidden">Itch.io</p>
                        </a>
                        <a class="flex h-12 md:h-8 w-full min-w-[90px] items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                            href="https://mastodon.social/@arthursegato" rel="me" aria-label="Visit mastodon profile">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="hidden h-4 w-4 fill-zinc-800 dark:fill-slate-300 md:inline-block"
                                viewBox="0 0 16 16">
                                <path
                                    d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" />
                            </svg>
                            <p class="text-sm text-zinc-800 dark:text-slate-300 md:hidden">Mastodon</p>
                        </a>
                        <NuxtLink :to="{ hash: '#contact' }" aria-label="Move to contact form"
                            class="flex h-12 md:h-8 w-full min-w-[90px] items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="hidden h-4 w-4 fill-zinc-800 dark:fill-slate-300 md:inline-block"
                                viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                            <p class="text-sm text-zinc-800 dark:text-slate-300 md:hidden">Contact</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
