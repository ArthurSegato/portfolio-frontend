<script setup lang="ts">
useHead({
    meta: [
        {
            name: 'thumbnail',
            content: 'https://arthursegato.dev/images/google-card.jpg'
        }
    ]
})

useSeoMeta({
    title: 'Arthur Segato | Developer',
    description: "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
    ogTitle: 'Arthur Segato | Developer',
    ogDescription: "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
    ogUrl: 'https://arthursegato.dev',
    ogImage: {
        url: 'https://arthursegato.dev/gifs/facebook-card.gif',
        secureUrl: 'https://arthursegato.dev/gifs/facebook-card.gif',
        alt: 'Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.',
    },
    twitterTitle: 'Arthur Segato | Developer',
    twitterDescription: "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
    twitterImage: {
        url: 'https://arthursegato.dev/videos/twitter-card.gif',
        alt: 'Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.',
    },
    twitterSite: 'https://arthursegato.dev',
})

/* Easter Egg */
console.clear()
console.log(`Oh, greetings! It appears you've wandered into a place not meant for you. However, now that you're here, allow me to impart a few words of wisdom.

Do you observe that simple terminal in the "about me" segment? How about attempting to weave a bit of magic upon it?
                    ____
                  .'* *.'
               __/_*_*(_
              / _______ \\
             _\\_)/___\\(_/_
            / _((\\- -/))_ \\
            \\ \\())(-)(()/ /
             ' \\(((()))/ '
            / ' \\)).))/ ' \\
           / _ \\ - | - /_  \\
          (   ( .;''';. .'  )
          _\\"__ /    )\\ __"/_
            \\/  \\   ' /  \\/
             .'  '...' ' )
              / /  |  \\ \\
             / .   .   . \\
            /   .     .   \\
           /   /   |   \\   \\
         .'   /    b    '.  '.
     _.-'    /     Bb     '-. '-._
 _.-'       |      BBb       '-.  '-.
(________mrf\\____.dBBBb.________)____)`)
</script>

<template>
    <main
        class="box-border w-full overflow-hidden bg-stone-100 font-['Inter'] text-[#181A1B] selection:bg-[#181A1B] selection:text-stone-100 dark:bg-[#181A1B] dark:text-stone-100 dark:selection:bg-stone-100 dark:selection:text-[#181A1B]">
        <TheHero />
        <TheAbout />
        <TheProjects />
        <TheContact />
    </main>
</template>
