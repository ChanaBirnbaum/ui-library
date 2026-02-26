import { Meta, StoryObj } from '@storybook/react';
import { IpsFileUpload } from './IpsFileUpload';

declare const meta: Meta<typeof IpsFileUpload>;
export default meta;
type Story = StoryObj<typeof IpsFileUpload>;
export declare const Default: Story;
export declare const WithCamera: Story;
export declare const WithScan: Story;
export declare const WithScreenshot: Story;
export declare const AllFeatures: Story;
export declare const SingleFile: Story;
export declare const FileSizeLimit: Story;
export declare const Disabled: Story;
export declare const WithCallbacks: Story;
