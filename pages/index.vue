<script setup lang="ts">
import { reactive } from 'vue'
import type { Rules } from 'async-validator'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { useFetch } from '@vueuse/core'
import { useColorMode } from '@vueuse/core'

const theme = useColorMode({})

/* About Form */
const aboutForm = reactive({ command: '' })

const aboutRules: Rules = {
    command: {
        type: 'string',
        required: true,
    },
}

const aboutFormValidation = useAsyncValidator(aboutForm, aboutRules, {
    validateOption: {
        suppressWarning: true,
    },
})

const aboutFormHanddler = () => {
    switch (aboutForm.command) {
        case 'dark':
            theme.value = 'dark'
            break
        case 'light':
            theme.value = 'light'
            break
        default:
            console.log(aboutForm.command)
            break
    }
    aboutForm.command = ''
}

/* Contact Form */

const contactForm = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
})
const contactRules: Rules = {
    name: {
        type: 'string',
        required: true,
        min: 2,
        max: 20,
    },
    phone: {
        type: 'string',
        required: false,
    },
    email: {
        type: 'email',
        required: true,
    },
    message: {
        type: 'string',
        required: true,
    },
}

const contactFormValidation = useAsyncValidator(contactForm, contactRules, {
    validateOption: {
        suppressWarning: true,
    },
})

const contactFormHanddler = () => {}
</script>

<template>
    <span class="fixed top-0 h-2 w-screen bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-purple-500"></span>
    <main class="box-border min-h-screen w-full scroll-smooth bg-stone-100 font-['Inter'] text-[#181A1B] dark:bg-[#181A1B] dark:text-stone-100">
        <section id="hero" class="flex min-h-screen w-full items-center justify-center p-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="w-40 fill-[#181A1B] dark:fill-stone-100 md:w-56 2xl:w-64">
                <path
                    d="m375 250-54.425-108.85c-27.758 21.655-38.29 68.188-50.07 116.423L312.5 355l32.512 75.43c23.048-30.69 49.123-68.965 68.093-104.218L375 250ZM142.432 360.485c26.908 0 44.475-13.067 57.163-33.542l17.785-41.261c20.37-64.467 27.485-152.625 81.257-188.41L250 0 125 250l-40.785 81.57c14.91 19.655 35.507 28.915 58.217 28.915ZM433.715 367.43c-22.285 37.565-48.822 75.383-71.007 104.053L375 500h125l-66.285-132.57ZM143.727 407.788c-30.392 0-58.902-10.756-80.945-33.356L0 500h125l40.497-93.953c-6.765 1.14-14.005 1.741-21.77 1.741Z"
                />
            </svg>
        </section>
        <section id="about" class="flex min-h-screen w-full items-center justify-center p-7">
            <div class="flex w-full flex-col gap-10 md:flex-row md:items-center md:gap-12 lg:w-5/6 lg:gap-24 xl:w-3/5">
                <div class="flex w-full flex-col gap-6">
                    <h1 class="text-5xl font-black leading-normal">🤟 Hello!</h1>
                    <article class="flex flex-col gap-2 text-sm leading-normal">
                        <p>
                            I'm
                            <strong>Arthur Segato</strong>
                            , a 24 yo Brazilian living in Portugal.
                        </p>
                        <p>Computer Scientist graduated, with experience in game development, ui/ux, full-stack development, and a love for virtual reality, cybersecurity and open source!</p>
                        <p>
                            Apart of technology I like to urban explore, learn about different cultures, languages and talk with people from all over the world, I love big and silly dogs, practice
                            sports and take naps in cozy places, I'm a fan of F1, co-op games and only know how to cook sweets.
                        </p>
                    </article>
                    <form @submit.prevent="aboutFormHanddler" autocomplete="off" class="w-full">
                        <label for="command" class="text-sm">Input</label>
                        <div class="flex">
                            <input
                                type="text"
                                id="command"
                                name="command"
                                placeholder="Type your comand here..."
                                v-model="aboutForm.command"
                                class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100"
                            />
                            <button
                                type="submit"
                                :disabled="!aboutFormValidation.pass.value"
                                class="group cursor-not-allowed rounded-r-md border-y border-r border-[#181A1B] px-3 enabled:cursor-pointer dark:border-stone-100"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 fill-[#181A1B] group-disabled:fill-[#181A1B]/50 dark:fill-stone-100 dark:group-disabled:fill-stone-100/50"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex items-center gap-4 md:flex-col">
                        <picture>
                            <img
                                class="w-28 rounded-full border-2 border-neutral-800/30 dark:border-slate-200/30 md:w-36 lg:w-44 2xl:w-56"
                                src="https://avatars.githubusercontent.com/u/19919287?v=4"
                                alt=""
                            />
                        </picture>
                        <ul>
                            <li class="text-2xl font-semibold text-neutral-800 dark:text-slate-200">Arthur Segato Paulo</li>
                            <li class="text-xl font-light text-gray-500 dark:text-slate-500">ArthurSegato</li>
                            <li class="text-base text-neutral-800 dark:text-slate-200">just like github, right?</li>
                        </ul>
                    </div>
                    <div class="flex flex-col gap-2">
                        <a
                            class="flex h-8 w-full items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                            href="https://github.com/ArthurSegato"
                        >
                            <p class="text-sm text-zinc-800 dark:text-slate-300">Follow</p>
                        </a>
                        <div class="flex flex-col gap-2 md:flex-row">
                            <a
                                class="flex h-8 w-full min-w-[90px] items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                                href="https://arthursegato.itch.io/"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden h-4 w-4 fill-zinc-800 dark:fill-slate-300 md:inline-block" viewBox="0 0 16 16">
                                    <path
                                        d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"
                                    />
                                    <path
                                        d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"
                                    />
                                </svg>
                                <p class="text-sm text-zinc-800 dark:text-slate-300 md:hidden">Itch.io</p>
                            </a>
                            <a
                                class="flex h-8 w-full min-w-[90px] items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                                href="https://mastodon.social/@arthursegato"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden h-4 w-4 fill-zinc-800 dark:fill-slate-300 md:inline-block" viewBox="0 0 16 16">
                                    <path
                                        d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
                                    />
                                </svg>
                                <p class="text-sm text-zinc-800 dark:text-slate-300 md:hidden">Mastodon</p>
                            </a>
                            <a
                                class="flex h-8 w-full min-w-[90px] items-center justify-center gap-2 rounded-md border border-neutral-800/20 bg-slate-50 px-4 duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 dark:border-blue-50/20 dark:bg-zinc-800 dark:hover:bg-neutral-700 dark:active:bg-gray-800"
                                href="https://mastodon.social/@arthursegato"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="hidden h-4 w-4 fill-zinc-800 dark:fill-slate-300 md:inline-block" viewBox="0 0 16 16">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                                    />
                                </svg>
                                <p class="text-sm text-zinc-800 dark:text-slate-300 md:hidden">Contact</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="projects" class="flex min-h-screen w-full items-center justify-center p-7">
            <div class="flex w-full flex-col flex-wrap content-evenly justify-evenly gap-4 md:flex-row xl:w-4/5 2xl:w-3/4">
                <a href="" class="group flex flex-col items-center">
                    <div
                        class="max-h-[250px] max-w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]"
                    >
                        <picture>
                            <img
                                class="w-full transition-all duration-[.25s] ease-in-out group-hover:scale-110"
                                src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg"
                                alt=""
                                srcset=""
                            />
                        </picture>
                    </div>
                    <div
                        class="z-10 -mt-12 max-w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]"
                    >
                        <h2 class="text-lg font-semibold">Project Title</h2>
                        <p class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam dolor ipsam. Tempora accusamus nemo numquam placeat in. Nam, suscipit.</p>
                    </div>
                </a>
                <a href="" class="group flex flex-col items-center">
                    <div
                        class="max-h-[250px] max-w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]"
                    >
                        <picture>
                            <img
                                class="w-full transition-all duration-[.25s] ease-in-out group-hover:scale-110"
                                src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg"
                                alt=""
                                srcset=""
                            />
                        </picture>
                    </div>
                    <div
                        class="z-10 -mt-12 max-w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]"
                    >
                        <h2 class="text-lg font-semibold">Project Title</h2>
                        <p class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam dolor ipsam. Tempora accusamus nemo numquam placeat in. Nam, suscipit.</p>
                    </div>
                </a>
                <a href="" class="group flex flex-col items-center">
                    <div
                        class="max-h-[250px] max-w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]"
                    >
                        <picture>
                            <img
                                class="w-full transition-all duration-[.25s] ease-in-out group-hover:scale-110"
                                src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg"
                                alt=""
                                srcset=""
                            />
                        </picture>
                    </div>
                    <div
                        class="z-10 -mt-12 max-w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]"
                    >
                        <h2 class="text-lg font-semibold">Project Title</h2>
                        <p class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam dolor ipsam. Tempora accusamus nemo numquam placeat in. Nam, suscipit.</p>
                    </div>
                </a>
                <a href="" class="group flex flex-col items-center">
                    <div
                        class="max-h-[250px] max-w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]"
                    >
                        <picture>
                            <img
                                class="w-full transition-all duration-[.25s] ease-in-out group-hover:scale-110"
                                src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg"
                                alt=""
                                srcset=""
                            />
                        </picture>
                    </div>
                    <div
                        class="z-10 -mt-12 max-w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]"
                    >
                        <h2 class="text-lg font-semibold">Project Title</h2>
                        <p class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam dolor ipsam. Tempora accusamus nemo numquam placeat in. Nam, suscipit.</p>
                    </div>
                </a>
                <a href="" class="group flex flex-col items-center">
                    <div
                        class="max-h-[250px] max-w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]"
                    >
                        <picture>
                            <img
                                class="w-full transition-all duration-[.25s] ease-in-out group-hover:scale-110"
                                src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg"
                                alt=""
                                srcset=""
                            />
                        </picture>
                    </div>
                    <div
                        class="z-10 -mt-12 max-w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]"
                    >
                        <h2 class="text-lg font-semibold">Project Title</h2>
                        <p class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam dolor ipsam. Tempora accusamus nemo numquam placeat in. Nam, suscipit.</p>
                    </div>
                </a>
                <a href="" class="group flex flex-col items-center">
                    <div
                        class="max-h-[250px] max-w-[350px] overflow-hidden rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] transition-all duration-[.25s] ease-in-out group-hover:rounded-bl-[40px] group-hover:rounded-tr-[40px] sm:w-[350px]"
                    >
                        <picture>
                            <img
                                class="w-full transition-all duration-[.25s] ease-in-out group-hover:scale-110"
                                src="https://cdn.pixabay.com/photo/2023/06/04/23/08/desert-8041043_960_720.jpg"
                                alt=""
                                srcset=""
                            />
                        </picture>
                    </div>
                    <div
                        class="z-10 -mt-12 max-w-[320px] translate-y-6 rounded-bl-[20px] rounded-br-md rounded-tl-md rounded-tr-[20px] bg-stone-100 p-4 opacity-0 shadow-md transition-all duration-[.25s] ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-[#181A1B]"
                    >
                        <h2 class="text-lg font-semibold">Project Title</h2>
                        <p class="text-sm leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam dolor ipsam. Tempora accusamus nemo numquam placeat in. Nam, suscipit.</p>
                    </div>
                </a>
            </div>
        </section>
        <section id="contact" class="flex min-h-screen w-full items-center justify-center p-7">
            <form @submit.prevent="contactFormHanddler" autocomplete="off" class="flex w-full flex-col gap-2 sm:w-5/6 lg:w-2/3 xl:w-1/2 2xl:w-2/5">
                <div class="flex flex-col gap-2 sm:flex-row">
                    <div class="w-full">
                        <label for="name" class="w-full text-sm">Name</label>
                        <div class="flex w-full">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                v-model="contactForm.name"
                                class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100"
                            />
                            <span class="flex items-center rounded-r-md border-y border-r border-[#181A1B] px-3 dark:border-stone-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#181A1B] dark:fill-stone-100" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="w-full">
                        <label for="phone" class="text-sm">Phone</label>
                        <div class="flex">
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                                placeholder="+01 23 456789"
                                v-model="contactForm.phone"
                                class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100"
                            />
                            <span class="flex items-center rounded-r-md border-y border-r border-[#181A1B] px-3 dark:border-stone-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#181A1B] dark:fill-stone-100" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <label for="email" class="text-sm">Email</label>
                    <div class="flex">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.email@here.com"
                            v-model="contactForm.email"
                            class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100"
                        />
                        <span class="flex items-center rounded-r-md border-y border-r border-[#181A1B] px-3 dark:border-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#181A1B] dark:fill-stone-100" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <div>
                    <label for="message" class="text-sm">Message</label>
                    <div class="flex">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Type here everything you want@"
                            v-model="contactForm.message"
                            cols="50"
                            class="w-full resize-y rounded-md border border-[#181A1B] bg-transparent p-3 text-sm outline-none dark:border-stone-100"
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    :disabled="!contactFormValidation.pass.value"
                    class="group flex h-8 w-full cursor-not-allowed items-center justify-center rounded-md border border-[#181A1B] transition-all duration-200 ease-in-out enabled:cursor-pointer enabled:hover:border-black enabled:hover:bg-stone-200/30 disabled:border-[#181A1B]/50 dark:border-stone-100 dark:enabled:hover:border-white dark:enabled:hover:bg-stone-950/30 dark:disabled:fill-stone-100/50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 fill-[#181A1B] group-hover:fill-black group-disabled:fill-[#181A1B]/50 dark:fill-stone-100 dark:group-hover:fill-white dark:group-disabled:fill-stone-100/50"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                        />
                    </svg>
                </button>
            </form>
        </section>
    </main>
</template>
