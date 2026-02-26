import { Meta, StoryObj } from '@storybook/react';
import { IpsPillSelect } from './IpsPillSelect';

declare const meta: Meta<typeof IpsPillSelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SingleSelect: Story;
export declare const MultiSelect: Story;
export declare const Disabled: Story;
export declare const SmallSize: Story;
export declare const ManyOptions: Story;
