import e from "react";
import { ipsTheme as o } from "./ipsTheme.js";
import { IpsTextField as I } from "../components/IpsTextField/IpsTextField.js";
import { IpsCheckBox as i } from "../components/IpsCheckBox/IpsCheckBox.js";
import { IpsTextArea as a } from "../components/IpsTextArea/IpsTextArea.js";
import { IpsSwitch as T } from "../components/IpsSwitch/IpsSwitch.js";
import { IpsButton as h } from "../components/IpsButton/IpsButton.js";
import { IpsIconButton as P } from "../components/IpsIconButton/IpsIconButton.js";
import { IpsToolTips as C } from "../components/IpsToolTips/IpsToolTips.js";
import { IpsSelect as A } from "../components/IpsSelect/IpsSelect.js";
import { IpsAutocomplete as S } from "../components/IpsAutocomplete/IpsAutocomplete.js";
import { IpsChipSelect as F } from "../components/IpsChipSelect/IpsChipSelect.js";
import { IpsAccordion as b } from "../components/IpsAccordion/IpsAccordion.js";
import { IpsTimePicker as E } from "../components/IpsTimePicker/IpsTimePicker.js";
import { IpsDatePicker as U } from "../components/IpsDatePicker/IpsDatePicker.js";
import { IpsDateTimePicker as j } from "../components/IpsDateTimePicker/IpsDateTimePicker.js";
import { IpsTable as y } from "../components/IpsTable/IpsTable.js";
import { IpsFileUpload as G } from "../components/IpsFileUpload/IpsFileUpload.js";
const t = e.createContext(o), x = ({ children: r }) => e.createElement(t.Provider, { value: o }, r);
export {
  b as IpsAccordion,
  S as IpsAutocomplete,
  h as IpsButton,
  i as IpsCheckBox,
  F as IpsChipSelect,
  U as IpsDatePicker,
  j as IpsDateTimePicker,
  G as IpsFileUpload,
  P as IpsIconButton,
  A as IpsSelect,
  T as IpsSwitch,
  y as IpsTable,
  a as IpsTextArea,
  I as IpsTextField,
  E as IpsTimePicker,
  C as IpsToolTips,
  t as ThemeContext,
  x as ThemeProvider,
  o as ipsTheme
};
