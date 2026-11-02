// Shared grouping for the select controls: options carry an optional `group`,
// and every control (native <optgroup> or menu subheaders) shows the same order.
/** Ungrouped options first, then one section per distinct group, in order of first appearance */
export function groupOptions(options) {
    const ungrouped = [];
    const optionsByGroup = new Map();
    options.forEach((option) => {
        if (!option.group) {
            ungrouped.push(option);
            return;
        }
        const groupOptionsList = optionsByGroup.get(option.group) ?? [];
        groupOptionsList.push(option);
        optionsByGroup.set(option.group, groupOptionsList);
    });
    const groupedSections = Array.from(optionsByGroup, ([group, groupedOptions]) => ({
        group,
        options: groupedOptions,
    }));
    return ungrouped.length > 0 ? [{ group: null, options: ungrouped }, ...groupedSections] : groupedSections;
}
