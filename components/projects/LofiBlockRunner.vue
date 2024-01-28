<template>
    <article class="prose rounded-2xl bg-base-100 p-4 shadow-lg" id="lofiblockrunner">
        <h2>LofiBlockRunner</h2>
        <figure>
            <NuxtImg src="/img/lofiblockrunner.jpg" class="w-full" placeholder width="555" height="238"
                alt="Screenshot capturing the moment when a red block collides with a purple obstacle, shattering into pieces."
                title="Screenshot capturing the moment when a red block collides with a purple obstacle, shattering into pieces." />
            <figcaption>
                I've rewritten this entire game at least twice but haven't published
                it yet due to an ongoing struggle with Unity many UI systems.
            </figcaption>
        </figure>
        <p>
            LofiBlockRunner is an endless runner where a block has to avoid
            obstacles while lofi music plays in the background.
        </p>
        <p>
            It was initially developed based on a
            <NuxtLink href="https://www.youtube.com/watch?v=j48LtUkZRjU&list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6">
                Brackeys tutorial on youtube
            </NuxtLink>
            , and was submitted as an application for an internship at UVV's
            virtual reality lab. Although I didn't get the position, I continued
            to develop the game and later published it on Itch.io <i>(v1.0.0)</i>,
            but regurlarly I come back to this project and redo everything from
            scratch to compare my evolution in game development.
        </p>
        <h3>Technical Information</h3>
        <table>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Arthur Segato</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Published</td>
                    <td>04/02/2021</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>Prototype</td>
                </tr>
                <tr>
                    <td>Platforms</td>
                    <td>Windows, macOS, Linux</td>
                </tr>
                <tr>
                    <td>Made with</td>
                    <td>Unity, Adobe Photoshop</td>
                </tr>
                <tr>
                    <td>License</td>
                    <td>MIT</td>
                </tr>
                <tr>
                    <td>Average session</td>
                    <td>A few minutes</td>
                </tr>
                <tr>
                    <td>Languages</td>
                    <td>English, Spanish; Latin America, Portuguese (Brazil)</td>
                </tr>
                <tr>
                    <td>Accessibility</td>
                    <td>Color-blind friendly, High-contrast</td>
                </tr>
            </tbody>
        </table>
        <h3>Features</h3>
        <ul>
            <li>
                <p>
                    <strong>Localization:</strong>
                </p>
                <p>
                    The game is currently localized in English (default), Portuguese,
                    and Spanish, with the flexibility to be localized into additional
                    languages upon request.
                </p>
            </li>
            <li>
                <p>
                    <strong>Save System:</strong>
                </p>
                <p>
                    The player's highest score is currently saved locally to keep
                    track of their progress, with the potential for future updates to
                    enable remote saving and introduce a leaderboard feature.
                </p>
            </li>
            <li>
                <p>
                    <strong>Accessibility:</strong>
                </p>
                <p>
                    The game incorporates a minimal, high-contrast, and
                    color-blind-friendly UI, complemented by sound feedback to UI and
                    in-game actions.
                </p>
            </li>
        </ul>
        <h3>Links</h3>
        <p>
            <NuxtLink href="https://arthursegato.itch.io/lofiblockrunner">
                <code>Itch.io Page</code>
            </NuxtLink>
            -
            <NuxtLink href="https://github.com/ArthurSegato/LofiBlockRunner">
                <code>Github Repo</code>
            </NuxtLink>
        </p>
        <h3>Tools</h3>
        <ul>
            <li>Adobe Photoshop</li>
            <li>Unity (C#)</li>
        </ul>
    </article>
</template>