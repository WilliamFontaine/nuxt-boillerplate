<template>
  <UDropdownMenu :items="languageItems">
    <UIcon :name="currentLocaleIcon" class="size-6" />
  </UDropdownMenu>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const localeIcon = {
  fr: 'i-openmoji:flag-france',
  en: 'i-openmoji:flag-united-states'
} as const

const currentLocaleIcon = computed(
  () => localeIcon[locale.value as keyof typeof localeIcon] ?? 'i-material-symbols:language'
)

const languageItems = computed(() =>
  locales.value.map((lang) => ({
    label: lang.name,
    icon: localeIcon[lang.code as keyof typeof localeIcon] ?? 'i-material-symbols:language',
    onSelect: () => setLocale(lang.code)
  }))
)
</script>
