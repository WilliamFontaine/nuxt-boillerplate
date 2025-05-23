export const useNotifications = () => {
  const toast = useToast()

  const success = (title: string, message: string) => {
    toast.add({
      title,
      description: message,
      icon: 'i-lucide:check-circle',
      color: 'success'
    })
  }

  const error = (title: string, message: string) => {
    toast.add({
      title,
      description: message,
      icon: 'i-lucide:circle-x',
      color: 'error'
    })
  }

  const info = (title: string, message: string) => {
    toast.add({
      title,
      description: message,
      icon: 'i-lucide:info',
      color: 'info'
    })
  }

  return {
    success,
    error,
    info
  }
}
