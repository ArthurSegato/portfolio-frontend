<script setup>
import isEmail from "validator/es/lib/isEmail";
import isAlpha from "validator/es/lib/isAlpha";

const isOpen = useDialog();

const isFormValid = ref(false);

const formData = reactive({
    name: '',
    email: '',
    message: '',
});

watch(formData, () => {
    if (!isAlpha(formData.name) || !isEmail(formData.email) || !isAlpha(formData.message))
        isFormValid.value = false;
    else isFormValid.value = true;
});

const contactHandler = async () => {
    await $fetch('/api/contact', {
        method: 'POST',
        body: formData
    })

    isOpen.value = false;

    setTimeout(async () => {
        formData.name = ''
        formData.email = ''
        formData.message = ''
        isFormValid.value = false
    }, 3000);
}
</script>

<template>
    <dialog id="contact" class="modal" :open="isOpen">
        <div class="modal-box">
            <button @click="isOpen = false" class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                ✕
            </button>
            <h3 class="text-lg font-bold">Send me a owl</h3>
            <form @submit.prevent="contactHandler" autocomplete="off" class="flex flex-col gap-2">
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">
                            Ah, my dear, in what manner should I address you?
                        </span>
                    </div>
                    <div class="join w-full">
                        <div class="btn btn-ghost join-item btn-active">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"
                                class="h-6 w-6" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.13a1.88 1.88 0 1 1-3.75 0 1.88 1.88 0 0 1 3.75 0Zm1.3 6.34a6.72 6.72 0 0 1-3.18.79 6.72 6.72 0 0 1-3.16-.79 3.38 3.38 0 0 1 6.33 0Z" />
                            </svg>
                        </div>
                        <input type="text" placeholder="The name's Potter, Harry Potter."
                            class="input join-item input-bordered w-full" id="name" name="name" v-model="formData.name" />
                    </div>
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">
                            And by what means may I reach you, my dear?
                        </span>
                    </div>
                    <div class="join w-full">
                        <div class="btn btn-ghost join-item btn-active">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"
                                class="h-6 w-6" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.61a2.25 2.25 0 0 1-2.36 0l-7.5-4.61a2.25 2.25 0 0 1-1.07-1.92v-.24" />
                            </svg>
                        </div>
                        <input type="text" placeholder="I possess a small farmstead in @pelican_town, you see."
                            class="input join-item input-bordered w-full" id="email" name="email"
                            v-model="formData.email" />
                    </div>
                </label>
                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">
                            And what subject would you fancy delving into?
                        </span>
                    </div>
                    <textarea class="textarea textarea-bordered h-24" placeholder="A-a MURDER? On MY Owl Express!?"
                        name="message" v-model="formData.message"></textarea>
                </label>
                <button type="submit" class="group btn btn-primary" :disabled="!isFormValid">
                    Send
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"
                        class="h-5 w-5 transition-all duration-200 ease-in-out group-hover:translate-x-1"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12 3.27 3.12A59.77 59.77 0 0 1 21.48 12a59.77 59.77 0 0 1-18.21 8.88L6 12Zm0 0h7.5" />
                    </svg>
                </button>
            </form>
        </div>
    </dialog>
</template>