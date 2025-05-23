<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">{{ post.title }}</h3>
        <div class="flex items-center gap-2">
          <UModal
            v-model:open="showDeleteModal"
            :title="t('form.post.delete.title')"
            :description="t('form.post.delete.description')"
            :ui="{ footer: 'justify-end' }"
            :close="{ color: 'neutral', variant: 'ghost' }"
            :dismissible="false"
          >
            <UButton
              color="error"
              variant="ghost"
              icon="i-heroicons-trash"
              @click="showDeleteModal = true"
            />

            <template #footer>
              <div class="flex w-full justify-end gap-x-4">
                <UButton
                  color="neutral"
                  variant="outline"
                  :label="t('form.post.delete.cancel')"
                  @click="showDeleteModal = false"
                />
                <UButton
                  color="error"
                  :label="t('form.post.delete.delete')"
                  @click="handleDelete"
                />
              </div>
            </template>
          </UModal>
        </div>
      </div>
    </template>

    <p class="text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap">
      {{ post.content }}
    </p>
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

const handleDelete = () => {
  emit('delete', props.post)
  showDeleteModal.value = false
}
</script>
