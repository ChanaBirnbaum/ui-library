import { Meta, StoryObj } from '@storybook/react';
import { IpsRichTextEditor } from './IpsRichTextEditor';

declare const meta: Meta<typeof IpsRichTextEditor>;
export default meta;
type Story = StoryObj<typeof IpsRichTextEditor>;
export declare const Default: Story;
export declare const HebrewRTL: Story;
export declare const MixedDirections: Story;
export declare const Controlled: Story;
export declare const ReadOnly: Story;
export declare const Disabled: Story;
export declare const ErrorState: Story;
export declare const CustomToolbar: Story;
export declare const WithImage: Story;
export declare const WithLink: Story;
