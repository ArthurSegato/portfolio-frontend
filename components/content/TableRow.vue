<script setup>
defineProps({
    items: Array,
})
</script>

<template>
    <tr class="border-b-[1px]">
        <td class="pr-4">
            <strong>
                {{ items[0] }}
            </strong>
        </td>
        <td>
            <i>
                {{ items[1] }}
            </i>
        </td>
    </tr>
</template>