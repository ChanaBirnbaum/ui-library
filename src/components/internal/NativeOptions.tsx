import React from 'react'
import type { IpsSelectOption } from '../IpsSelect/IpsSelect.types'
import { groupOptions } from './optionGroups'

interface NativeOptionsProps {
  options: IpsSelectOption[]
}

/** The <option> elements of a native select; grouped options go inside <optgroup> */
export function NativeOptions({ options }: NativeOptionsProps) {
  return (
    <>
      {groupOptions(options).map((section) => {
        const optionElements = section.options.map((option) => (
          <option key={option.value} value={String(option.value)}>
            {option.label}
          </option>
        ))
        if (section.group === null) {
          return optionElements
        }
        return (
          <optgroup key={section.group} label={section.group}>
            {optionElements}
          </optgroup>
        )
      })}
    </>
  )
}
