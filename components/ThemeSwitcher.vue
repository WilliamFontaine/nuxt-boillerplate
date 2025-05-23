<template>
  <UButton
    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
    color="neutral"
    variant="ghost"
    @click="toggleDark()"
  />
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (value: boolean) => (colorMode.value = value ? 'dark' : 'light')
})

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>
