import { useCallback } from 'react'

type Toast = { id: string; message: string }

 const useToast = () => {
  const show = useCallback((message: string) => {
    const t: Toast = { id: Date.now().toString(), message }
    // placeholder: integrate with a toast system or context
    // For now, log to console
     
    console.log('toast:', t)
    return t.id
  }, [])

  const dismiss = useCallback((id: string) => {
    // placeholder
     
    console.log('dismiss toast', id)
  }, [])

  return { show, dismiss }
}

export default useToast
