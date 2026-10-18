import type { IpsSelectOption } from '../IpsSelect/IpsSelect.types'
import { groupOptions } from './optionGroups'

describe('groupOptions', () => {
  it('puts ungrouped options first, then groups in order of first appearance', () => {
    const options: IpsSelectOption[] = [
      { value: 1, label: 'Room 1', group: 'Wing B' },
      { value: 0, label: 'All' },
      { value: 2, label: 'Room 2', group: 'Wing A' },
      { value: 3, label: 'Room 3', group: 'Wing B' },
    ]
    const sections = groupOptions(options)

    expect(sections.map((section) => section.group)).toEqual([null, 'Wing B', 'Wing A'])
    expect(sections[1].options.map((option) => option.value)).toEqual([1, 3])
  })

  it('returns a single ungrouped section when no option has a group', () => {
    const options: IpsSelectOption[] = [{ value: 1, label: 'A' }, { value: 2, label: 'B' }]
    expect(groupOptions(options)).toEqual([{ group: null, options }])
  })

  it('returns no sections for no options', () => {
    expect(groupOptions<IpsSelectOption>([])).toEqual([])
  })
})
