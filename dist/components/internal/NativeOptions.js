import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { groupOptions } from './optionGroups';
/** The <option> elements of a native select; grouped options go inside <optgroup> */
export function NativeOptions({ options }) {
    return (_jsx(_Fragment, { children: groupOptions(options).map((section) => {
            const optionElements = section.options.map((option) => (_jsx("option", { value: String(option.value), children: option.label }, option.value)));
            if (section.group === null) {
                return optionElements;
            }
            return (_jsx("optgroup", { label: section.group, children: optionElements }, section.group));
        }) }));
}
