<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {{ post.title }}
        </h3>
        <UTooltip :text="t('form.post.delete.tooltip')" :popper="{ placement: 'left' }">
          <UButton
            color="error"
            variant="ghost"
            icon="i-lucide-trash-2"
            size="sm"
            @click="showDeleteModal = true"
          />
        </UTooltip>
      </div>
    </template>

    <p class="text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap leading-relaxed">
      {{ post.content }}
    </p>

    <UModal
      v-model:open="showDeleteModal"
      :title="t('form.post.delete.title')"
      :description="t('form.post.delete.description')"
      :ui="{ footer: 'justify-end' }"
      :close="{ color: 'neutral', variant: 'ghost' }"
      :dismissible="false"
    >
      <template #footer>
        <div class="flex w-full justify-end gap-x-3">
          <UButton
            color="neutral"
            variant="outline"
            :label="t('form.post.delete.cancel')"
            @click="showDeleteModal = false"
          />
          <UButton
            color="error"
            :label="t('form.post.delete.delete')"
            :loading="isDeleting"
            @click="handleDelete"
          />
        </div>
      </template>
    </UModal>
  </UCard>
</template>

<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  post: Post
}>()

const emit = defineEmits<{
  delete: [post: Post]
}>()

const showDeleteModal = ref(false)
const isDeleting = ref(false)

const handleDelete = async () => {
  try {
    isDeleting.value = true
    emit('delete', props.post)
    showDeleteModal.value = false
  } finally {
    isDeleting.value = false
  }
}
</script>
