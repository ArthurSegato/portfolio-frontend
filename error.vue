<template>
  <main
    class="flex min-h-screen w-full select-none flex-col items-center justify-center bg-black/80 text-[#eadac0] p-8">

    <h1 class="text-9xl font-black">nuh uh</h1>
    <p class="text-xl">You know you should not be here...</p>
    <NuxtLink to="/"
      class="my-2 flex select-none items-center gap-1 rounded-md border border-current px-4 py-2 transition-all ease-in hover:gap-0 w-fit">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round"
          stroke-width="2" d="M8 12L15 5M8 12L15 19">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0" />
        </path>
      </svg>
      <p>but I got ur back homie</p>
    </NuxtLink>
    <p class="fixed bottom-0 m-2"><i>(look, another cat)</i></p>
    <div class="fixed inset-0 -z-10 h-full w-full">
      <video class="h-full w-full object-cover object-top" autoplay muted loop>
        <source src="/vid/cat.mp4" type="video/mp4" />
      </video>
    </div>
  </main>
</template>
