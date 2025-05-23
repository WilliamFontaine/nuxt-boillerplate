import * as yup from 'yup'

export const usePostForm = () => {
  const { t } = useI18n()

  const state = reactive<Partial<Post>>({
    title: '',
    content: ''
  })

  const setState = (data: Partial<typeof state> | null) => {
    if (!data) return
    Object.assign(state, data)
  }

  const resetState = () => {
    Object.assign(state, {
      title: '',
      content: ''
    })
  }

  const schema = yup.object().shape({
    title: yup.string().required(t('form.post.title.required')),
    content: yup.string().required(t('form.post.content.required'))
  })

  return {
    state,
    setState,
    resetState,
    schema
  }
}
