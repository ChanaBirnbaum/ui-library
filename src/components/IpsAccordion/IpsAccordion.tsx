import { forwardRef } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SvgIcon
} from '@mui/material'
import { IpsAccordionProps } from './IpsAccordion.types'

const ExpandMoreIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </SvgIcon>
)

export const IpsAccordion = forwardRef<HTMLDivElement, IpsAccordionProps>(
  (
    {
      summary,
      children,
      className,
      defaultExpanded = false,
      disabled = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const rootClassName = [
      'ips-accordion',
      className
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Accordion
        ref={ref}
        className={rootClassName}
        defaultExpanded={defaultExpanded}
        disabled={disabled}
        onChange={onChange}
        {...props}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="accordion-content"
          id="accordion-header"
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails id="accordion-content">
          {children}
        </AccordionDetails>
      </Accordion>
    )
  }
)

IpsAccordion.displayName = 'IpsAccordion'
