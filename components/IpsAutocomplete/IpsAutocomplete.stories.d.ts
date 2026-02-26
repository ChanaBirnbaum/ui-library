import { Meta, StoryObj } from '@storybook/react';
import { IpsAutocomplete } from './IpsAutocomplete';

declare const meta: Meta<typeof IpsAutocomplete>;
export default meta;
type Story = StoryObj<typeof IpsAutocomplete>;
export declare const SingleSelect: Story;
export declare const MultipleWithCheckboxes: Story;
export declare const MultipleWithoutCheckboxes: Story;
export declare const LoadingState: Story;
export declare const Disabled: Story;
export declare const WithValue: Story;
export declare const MultipleWithValue: Story;
export declare const CustomRender: Story;
export declare const FreeSolo: Story;
export declare const Clearable: Story;
