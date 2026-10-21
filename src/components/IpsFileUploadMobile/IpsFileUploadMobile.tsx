import React, { useEffect, useRef, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import { CameraDialog } from '../IpsFileUpload/CameraDialog'
import { useFileUpload } from '../IpsFileUpload/useFileUpload'
import {
  MOBILE_FIELD,
  MobileHelperText,
  outlinedFieldBoxStyles,
  outlinedFieldDisabledStyles,
  outlinedFieldFocusStyles,
} from '../internal/mobileFieldParts'
import type { IpsFileUploadMobileProps } from './IpsFileUploadMobile.types'

// Attaching one file on a phone. It reuses IpsFileUpload's parts as they are: the same hidden file input
// as "עיין בקבצים", the same CameraDialog as "מצלמה" and the same upload hook (size check, FormData, POST to
// SharePoint, callbacks). Only the look is mobile: a field like the other mobile fields, no drop zone (there is no
// drag on touch), and the upload starts as soon as a file is chosen - there is no separate "save files" step.

const DEFAULT_PLACEHOLDER = 'בחירת קובץ'
const DEFAULT_UPLOADING_TEXT = 'מעלה…'
const DEFAULT_CAMERA_BUTTON_LABEL = 'מצלמה'
const ICON_SIZE_PX = 20
const SPINNER_SIZE_PX = 18

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
})

const Row = styled('div')({
  display: 'flex',
  gap: 8,
})

interface FieldButtonStyleProps {
  hasError: boolean
}

// The field: tapping it opens the OS file picker (on a phone it also offers the camera and the gallery)
const FieldButton = styled('button', {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<FieldButtonStyleProps>(({ theme, hasError }) => ({
  ...outlinedFieldBoxStyles(theme, { hasValue: false, hasError }),
  flex: 1,
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  paddingInlineEnd: MOBILE_FIELD.paddingStartPx,
  textAlign: 'start',
  cursor: 'pointer',
  '&:focus-visible': { outline: 'none', ...outlinedFieldFocusStyles(theme, hasError) },
  '&:disabled': outlinedFieldDisabledStyles(theme),
}))

// The camera button: a square with the field's height and outline, next to the field
const CameraButton = styled('button')(({ theme }) => ({
  ...outlinedFieldBoxStyles(theme, { hasValue: true, hasError: false }),
  width: MOBILE_FIELD.heightPx,
  flexShrink: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:focus-visible': { outline: 'none', ...outlinedFieldFocusStyles(theme, false) },
  '&:disabled': outlinedFieldDisabledStyles(theme),
}))

const FieldText = styled('span')({
  flex: 1,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const StatusText = styled('span')(({ theme }) => ({
  flexShrink: 0,
  fontSize: 14,
  color: theme.palette.text.secondary,
}))

function PaperclipIcon() {
  return (
    <svg aria-hidden="true" width={ICON_SIZE_PX} height={ICON_SIZE_PX} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg aria-hidden="true" width={ICON_SIZE_PX} height={ICON_SIZE_PX} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

export function IpsFileUploadMobile(props: IpsFileUploadMobileProps) {
  const {
    camera = false,
    accept,
    disabled = false,
    placeholder = DEFAULT_PLACEHOLDER,
    uploadingText = DEFAULT_UPLOADING_TEXT,
    cameraButtonLabel = DEFAULT_CAMERA_BUTTON_LABEL,
    error = false,
    id,
    className,
  } = props

  const { files, addFiles, clearAll, saveFiles, loading } = useFileUpload(props)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [cameraOpen, setCameraOpen] = useState(false)
  // The file whose upload already started, so a re-render never uploads the same file twice
  const uploadStartedForRef = useRef<File | null>(null)

  const chosenFile = files[0] ?? null
  const sizeErrorMessage = chosenFile?.hasError ? chosenFile.errorMessage : undefined

  // A valid chosen file is uploaded at once, by the same saveFiles as IpsFileUpload's "שמור קבצים".
  // saveFiles reads the files from state, so it runs here, after the chosen file is in it
  useEffect(() => {
    if (!chosenFile || chosenFile.hasError || loading) return
    if (uploadStartedForRef.current === chosenFile.file) return
    uploadStartedForRef.current = chosenFile.file
    void saveFiles()
  }, [chosenFile, loading, saveFiles])

  // One file: a new choice replaces a previous one (for example after a size error or a failed upload)
  const chooseFiles = (chosenFiles: File[]) => {
    if (chosenFiles.length === 0) return
    clearAll()
    addFiles(chosenFiles.slice(0, 1))
  }

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    chooseFiles(Array.from(event.target.files ?? []))
    // The same file can be chosen again (for example after a failed upload)
    event.target.value = ''
  }

  const isUploading = loading && chosenFile !== null
  const rootClassName = ['ips-file-upload-mobile', className].filter(Boolean).join(' ')

  return (
    <Root className={rootClassName}>
      <input
        ref={fileInputRef}
        type="file"
        multiple={false}
        accept={accept?.join(',')}
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />

      <Row>
        <FieldButton
          type="button"
          id={id}
          hasError={error || Boolean(sizeErrorMessage)}
          disabled={disabled || isUploading}
          aria-busy={isUploading || undefined}
          onClick={() => fileInputRef.current?.click()}
        >
          {isUploading ? (
            <>
              <FieldText>{chosenFile.file.name}</FieldText>
              <StatusText>{uploadingText}</StatusText>
              <CircularProgress size={SPINNER_SIZE_PX} />
            </>
          ) : (
            <>
              <FieldText>{placeholder}</FieldText>
              <PaperclipIcon />
            </>
          )}
        </FieldButton>

        {camera && (
          <CameraButton
            type="button"
            aria-label={cameraButtonLabel}
            disabled={disabled || isUploading}
            onClick={() => setCameraOpen(true)}
          >
            <CameraIcon />
          </CameraButton>
        )}
      </Row>

      {sizeErrorMessage && (
        <MobileHelperText hasError role="alert">
          {sizeErrorMessage}
        </MobileHelperText>
      )}

      <CameraDialog
        open={cameraOpen}
        onClose={() => setCameraOpen(false)}
        onCapture={(file) => {
          chooseFiles([file])
          setCameraOpen(false)
        }}
      />
    </Root>
  )
}

IpsFileUploadMobile.displayName = 'IpsFileUploadMobile'

export default IpsFileUploadMobile
