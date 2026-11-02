import React from 'react';
import type { IpsSelectOption } from '../IpsSelect/IpsSelect.types';
interface NativeOptionsProps {
    options: IpsSelectOption[];
}
/** The <option> elements of a native select; grouped options go inside <optgroup> */
export declare function NativeOptions({ options }: NativeOptionsProps): React.JSX.Element;
export {};
