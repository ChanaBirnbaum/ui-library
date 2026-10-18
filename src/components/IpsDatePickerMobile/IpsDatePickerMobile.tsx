import React, { forwardRef } from 'react'
import { NativePickerField } from '../internal/NativePickerField'
import { CalendarIcon } from '../internal/mobileFieldEndParts'
import type { IpsDatePickerMobileProps } from './IpsDatePickerMobile.types'

// Mobile date field built on the native <input type="date">: a tap anywhere opens the OS date picker,
// which avoids the locale issues of the MUI picker. No MUI components.

const ISO_DATE_SEPARATOR = '-'
const DISPLAY_SEPARATOR = '/'

/** 'YYYY-MM-DD' → 'DD/MM/YYYY' */
function formatIsoDate(value: string): string {
  const [year, month, day] = value.split(ISO_DATE_SEPARATOR)
  return [day, month, year].join(DISPLAY_SEPARATOR)
}

export const IpsDatePickerMobile = forwardRef<HTMLInputElement, IpsDatePickerMobileProps>(
  ({ formatValue = formatIsoDate, ...props }, ref) => (
    <NativePickerField
      {...props}
      ref={ref}
      inputType="date"
      icon={<CalendarIcon />}
      formatValue={formatValue}
      rootClassName="ips-date-picker-mobile"
    />
  )
)

IpsDatePickerMobile.displayName = 'IpsDatePickerMobile'

export default IpsDatePickerMobile
