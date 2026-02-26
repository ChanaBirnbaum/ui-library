import { Meta, StoryObj } from '@storybook/react';
import { IpsAccordion } from './IpsAccordion';

declare const meta: Meta<typeof IpsAccordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultExpanded: Story;
export declare const Disabled: Story;
export declare const Multiple: Story;
export declare const CustomSummaryContent: Story;
