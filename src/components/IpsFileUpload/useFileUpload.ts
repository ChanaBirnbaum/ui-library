import { useState, useCallback } from 'react'
import type { IpsFileUploadProps, FileWithMeta, UploadResult } from './IpsFileUpload.types'
import { buildUploadUrl } from '../../utils/uploadUtils'

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useFileUpload(props: IpsFileUploadProps) {
  const {
    sviva,
    system,
    uploadParams = {},
    uploadMethod,
    maxFileSizeMB = 10,
    onBeforeSave,
    onSaveSuccess,
    onSaveError,
  } = props

  const [files, setFiles]     = useState<FileWithMeta[]>([])
  const [loading, setLoading] = useState(false)

  // ─── addFiles ───────────────────────────────────────────────────────────────
  // Validates size immediately on add. Accumulates — does not replace existing.

  const addFiles = useCallback((newFiles: File[]) => {
    const maxBytes = maxFileSizeMB * 1024 * 1024

    const withMeta: FileWithMeta[] = newFiles.map((file) => {
      if (file.size > maxBytes) {
        return {
          file,
          hasError: true,
          errorMessage: `הקובץ חורג מהגודל המותר (${maxFileSizeMB} MB)`,
        }
      }
      return { file, hasError: false }
    })

    setFiles((prev) => [...prev, ...withMeta])
  }, [maxFileSizeMB])

  // ─── removeFile ─────────────────────────────────────────────────────────────

  const removeFile = useCallback((target: File) => {
    setFiles((prev) => prev.filter(({ file }) => file !== target))
  }, [])

  // ─── clearAll ───────────────────────────────────────────────────────────────

  const clearAll = useCallback(() => {
    setFiles([])
  }, [])

  // ─── saveFiles ──────────────────────────────────────────────────────────────

  const saveFiles = useCallback(async () => {
    // 1. Pre-save validation
    if (onBeforeSave) {
      const isValid = await onBeforeSave()
      if (!isValid) return
    }

    setLoading(true)
    const results: UploadResult[] = []

    try {
      for (const { file } of files) {
        // 2. Build FormData
        const formData = new FormData()
        formData.append('file', file)
        Object.entries(uploadParams).forEach(([k, v]) => formData.append(k, v))

        // 3. POST to SharePoint endpoint
        const response = await fetch(buildUploadUrl(sviva, system, uploadMethod), {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          throw new Error(`Upload failed for ${file.name}: ${response.statusText}`)
        }

        const data = await response.json() as { path: string }
        results.push({ name: file.name, path: data.path })
      }

      // 4. Success
      onSaveSuccess?.(results)
      clearAll()
    } catch (error) {
      onSaveError?.(error)
    } finally {
      setLoading(false)
    }
  }, [files, uploadParams, sviva, system, uploadMethod, onBeforeSave, onSaveSuccess, onSaveError, clearAll])

  // ─── Derived state ───────────────────────────────────────────────────────────

  const canSave = files.length > 0 && !files.some((f) => f.hasError) && !loading

  return {
    files,
    addFiles,
    removeFile,
    clearAll,
    saveFiles,
    loading,
    canSave,
  }
}
