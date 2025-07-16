import * as yup from 'yup'

interface PostFormState {
  title: string
  content: string
}

export const usePostForm = () => {
  const { t } = useI18n()

  const initialState: PostFormState = {
    title: '',
    content: ''
  }

  const state = reactive<PostFormState>({ ...initialState })

  const setState = (data: Partial<PostFormState> | null) => {
    if (!data) return
    Object.assign(state, data)
  }

  const resetState = () => {
    Object.assign(state, { ...initialState })
  }

  const schema = computed(() =>
    yup.object().shape({
      title: yup
        .string()
        .required(t('form.post.title.required'))
        .min(3, t('form.post.title.minLength'))
        .max(100, t('form.post.title.maxLength')),
      content: yup
        .string()
        .required(t('form.post.content.required'))
        .min(10, t('form.post.content.minLength'))
        .max(1000, t('form.post.content.maxLength'))
    })
  )

  const isValid = computed(() => {
    try {
      schema.value.validateSync(state)
      return true
    } catch {
      return false
    }
  })

  const validate = async () => {
    try {
      await schema.value.validate(state, { abortEarly: false })
      return { isValid: true, errors: [] }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return { isValid: false, errors: error.errors }
      }
      return { isValid: false, errors: ['Validation failed'] }
    }
  }

  return {
    state,
    setState,
    resetState,
    schema,
    isValid,
    validate
  }
}
