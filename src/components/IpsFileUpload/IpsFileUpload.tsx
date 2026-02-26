import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import SaveIcon from '@mui/icons-material/Save'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'

import { IpsDropZone } from './IpsDropZone'
import { IpsFileItem } from './IpsFileItem'
import { useFileUpload } from './useFileUpload'
import type { IpsFileUploadProps } from './IpsFileUpload.types'

export function IpsFileUpload(props: IpsFileUploadProps) {
  const {
    camera     = false,
    screenshot = false,
    scan       = false,
    accept,
    multiple   = true,
    disabled   = false,
    containerId,
    className,
    sx,
  } = props

  const {
    files,
    addFiles,
    removeFile,
    clearAll,
    saveFiles,
    loading,
    canSave,
  } = useFileUpload(props)

  return (
    <Box
      className={`ips-file-upload${className ? ` ${className}` : ''}`}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, ...sx }}
    >
      {/* ── Drop zone ── */}
      <IpsDropZone
        onFilesAdded={addFiles}
        camera={camera}
        screenshot={screenshot}
        scan={scan}
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        containerId={containerId}
      />

      {/* ── File list ── */}
      {files.length > 0 && (
        <Stack spacing={0.75}>
          {files.map(({ file, hasError, errorMessage }) => (
            <IpsFileItem
              key={`${file.name}-${file.size}`}
              file={file}
              hasError={hasError}
              errorMessage={errorMessage}
              onDelete={removeFile}
            />
          ))}
        </Stack>
      )}

      {/* ── Actions bar ── */}
      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-start' }}>
        <Button
          variant="contained"
          size="small"
          disabled={!canSave || disabled}
          onClick={saveFiles}
          startIcon={
            loading
              ? <CircularProgress size={16} color="inherit" />
              : <SaveIcon />
          }
        >
          שמור קבצים
        </Button>

        <Button
          variant="outlined"
          size="small"
          color="error"
          disabled={files.length === 0 || disabled}
          onClick={clearAll}
          startIcon={<DeleteSweepIcon />}
        >
          נקה הכל
        </Button>
      </Box>
    </Box>
  )
}

IpsFileUpload.displayName = 'IpsFileUpload'
