<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
const isCardVisible = ref(false)

const contactForm = reactive({
    name: '',
    phone: '',
    email: '',
    message: '',
    isValid: false
})

watch(() => [contactForm.name, contactForm.email, contactForm.message],
    async ([name, email, message]) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length < 2) contactForm.isValid = false
        else if (!emailRegex.test(email)) contactForm.isValid = false
        else if (message.length < 2) contactForm.isValid = false
        else contactForm.isValid = true
    }
)

const contactHandler = async () => {
    delete contactForm.isValid
    await $fetch('/api/contact', {
        method: 'POST',
        body: contactForm
    })

    contactForm.name = ''
    contactForm.phone = ''
    contactForm.email = ''
    contactForm.message = ''
    contactForm.isValid = false

    isCardVisible.value = true
    await promiseTimeout(3500)
    isCardVisible.value = false
}
</script>

<template>
    <section id="contact" class="flex w-full items-center justify-center p-7 md:p-14 lg:py-28">
        <form @submit.prevent="contactHandler" v-motion-slide-visible-once-bottom autocomplete="off"
            class="relative flex w-full flex-col gap-2 sm:w-5/6 lg:w-2/3 xl:w-1/2 2xl:w-2/5">
            <div class="flex flex-col gap-2 sm:flex-row">
                <div class="w-full">
                    <label for="name" class="w-full text-sm">Name</label>
                    <div class="flex w-full">
                        <input type="text" id="name" name="name" placeholder="John Doe" v-model="contactForm.name"
                            class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100" />
                        <span
                            class="flex items-center rounded-r-md border-y border-r border-[#181A1B] px-3 dark:border-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#181A1B] dark:fill-stone-100"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="w-full">
                    <label for="phone" class="text-sm">Phone</label>
                    <div class="flex">
                        <input type="tel" id="phone" name="phone" placeholder="+12 (34) 56789-1234"
                            v-model="contactForm.phone"
                            class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100" />
                        <span
                            class="flex items-center rounded-r-md border-y border-r border-[#181A1B] px-3 dark:border-stone-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#181A1B] dark:fill-stone-100"
                                viewBox="0 0 16 16">
                                <path
                                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <label for="email" class="text-sm">Email</label>
                <div class="flex">
                    <input type="email" id="email" name="email" placeholder="your.email@here.com"
                        v-model="contactForm.email"
                        class="h-8 w-full rounded-l-md border-y border-l border-[#181A1B] bg-transparent px-3 text-sm outline-none dark:border-stone-100" />
                    <span
                        class="flex items-center rounded-r-md border-y border-r border-[#181A1B] px-3 dark:border-stone-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-[#181A1B] dark:fill-stone-100"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div>
                <label for="message" class="text-sm">Message</label>
                <div class="flex">
                    <textarea id="message" name="message" placeholder="Type everything you want here..."
                        v-model="contactForm.message"
                        class="h-52 w-full resize-y rounded-md border border-[#181A1B] bg-transparent p-3 text-sm outline-none dark:border-stone-100"></textarea>
                </div>
            </div>
            <button type="submit" :disabled="!contactForm.isValid" aria-label="submit contact form"
                class="group flex h-12 w-full cursor-not-allowed items-center justify-center rounded-md border border-[#181A1B] transition-all duration-200 ease-in-out enabled:cursor-pointer enabled:hover:border-black enabled:hover:bg-stone-200/30 disabled:border-stone-200/50 dark:border-stone-100 dark:enabled:hover:border-white dark:enabled:hover:bg-stone-950/30 dark:disabled:fill-stone-100/50">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 fill-[#181A1B] group-hover:fill-black group-disabled:fill-[#181A1B]/50 dark:fill-stone-100 dark:group-hover:fill-white dark:group-disabled:fill-stone-100/50"
                    viewBox="0 0 16 16">
                    <path
                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
            </button>
        </form>
        <TheContactAlert :is-visible="isCardVisible" />
    </section>
</template>