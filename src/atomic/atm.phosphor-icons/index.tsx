/* eslint-disable react/display-name */
import React from 'react';

import * as PhIconSVG from 'phosphor-react';

interface PhIconProps {
  alt?: string;
  size?: string | number;
  color?: string;
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';
  mirrored?: boolean;
}

/** Adicione novos ícones dependendo da necessidade. Para consultar a biblioteca de ícones da Phosphor Icons, acesse o site https://phosphoricons.com/
 */
export const PhIcon = {
  Activity: (props: PhIconProps): JSX.Element => <PhIconSVG.Activity {...props} />,
  ArrowsOutLineVertical: (props: PhIconProps): JSX.Element => <PhIconSVG.ArrowsOutLineVertical {...props} />,
  CaretDown: (props: PhIconProps): JSX.Element => <PhIconSVG.CaretDown {...props} />,
  CaretUp: (props: PhIconProps): JSX.Element => <PhIconSVG.CaretUp {...props} />,
  CaretLeft: (props: PhIconProps): JSX.Element => <PhIconSVG.CaretLeft {...props} />,
  CaretRight: (props: PhIconProps): JSX.Element => <PhIconSVG.CaretRight {...props} />,
  Check: (props: PhIconProps): JSX.Element => <PhIconSVG.Check {...props} />,
  CheckCircle: (props: PhIconProps): JSX.Element => <PhIconSVG.CheckCircle {...props} />,
  Globe: (props: PhIconProps): JSX.Element => <PhIconSVG.Globe {...props} />,
  Info: (props: PhIconProps): JSX.Element => <PhIconSVG.Info {...props} />,
  InstagramLogo: (props: PhIconProps): JSX.Element => <PhIconSVG.InstagramLogo {...props} />,
  LinkedinLogo: (props: PhIconProps): JSX.Element => <PhIconSVG.LinkedinLogo {...props} />,
  Minus: (props: PhIconProps): JSX.Element => <PhIconSVG.Minus {...props} />,
  Record: (props: PhIconProps): JSX.Element => <PhIconSVG.Record {...props} />,
  RadioButton: (props: PhIconProps): JSX.Element => <PhIconSVG.RadioButton {...props} />,
  Warning: (props: PhIconProps): JSX.Element => <PhIconSVG.Warning {...props} />,
  WarningOctagon: (props: PhIconProps): JSX.Element => <PhIconSVG.WarningOctagon {...props} />,
  WifiNone: (props: PhIconProps): JSX.Element => <PhIconSVG.WifiNone {...props} />,
  X: (props: PhIconProps): JSX.Element => <PhIconSVG.X {...props} />,
};
