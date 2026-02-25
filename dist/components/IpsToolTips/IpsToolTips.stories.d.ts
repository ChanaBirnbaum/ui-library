import { Meta, StoryObj } from '@storybook/react';
import { IpsToolTips } from './IpsToolTips';

declare const meta: Meta<typeof IpsToolTips>;
export default meta;
type Story = StoryObj<typeof IpsToolTips>;
export declare const Default: Story;
export declare const WithArrow: Story;
export declare const WithoutArrow: Story;
export declare const PlacementTop: Story;
export declare const PlacementRight: Story;
export declare const PlacementBottom: Story;
export declare const PlacementLeft: Story;
export declare const MultilineTooltip: Story;
export declare const DisabledButton: Story;
