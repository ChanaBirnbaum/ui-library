// Shared grouping for the select controls: options carry an optional `group`,
// and every control (native <optgroup> or menu subheaders) shows the same order.

export interface OptionSection<TOption> {
  /** null = the options without a group, shown first */
  group: string | null
  options: TOption[]
}

/** Ungrouped options first, then one section per distinct group, in order of first appearance */
export function groupOptions<TOption extends { group?: string }>(options: TOption[]): OptionSection<TOption>[] {
  const ungrouped: TOption[] = []
  const optionsByGroup = new Map<string, TOption[]>()

  options.forEach((option) => {
    if (!option.group) {
      ungrouped.push(option)
      return
    }
    const groupOptionsList = optionsByGroup.get(option.group) ?? []
    groupOptionsList.push(option)
    optionsByGroup.set(option.group, groupOptionsList)
  })

  const groupedSections = Array.from(optionsByGroup, ([group, groupedOptions]) => ({
    group,
    options: groupedOptions,
  }))
  return ungrouped.length > 0 ? [{ group: null, options: ungrouped }, ...groupedSections] : groupedSections
}
