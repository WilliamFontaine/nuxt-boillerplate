<template>
  <ClientOnly>
    <UDropdownMenu :items="languageItems">
      <UButton color="neutral" variant="ghost" :icon="currentLocaleIcon" />
    </UDropdownMenu>
    <template #fallback>
      <UButton color="neutral" variant="ghost" icon="i-lucide:languages" disabled />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const localeConfig = {
  fr: { icon: 'i-openmoji:flag-france', label: 'Français' },
  en: { icon: 'i-openmoji:flag-united-states', label: 'English' }
} as const

const currentLocaleIcon = computed(
  () => localeConfig[locale.value as keyof typeof localeConfig]?.icon ?? 'i-lucide:languages'
)

const languageItems = computed(() =>
  locales.value.map((lang) => ({
    label: lang.name,
    icon: localeConfig[lang.code as keyof typeof localeConfig]?.icon ?? 'i-lucide:languages',
    onSelect: () => setLocale(lang.code)
  }))
)
</script>
