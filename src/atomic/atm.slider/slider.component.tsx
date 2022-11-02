import { SliderRangeStyled, SliderRootStyled, SliderThumbStyled, SliderTrackStyled } from './slider.component.style';
import * as SliderPrimitive from '@radix-ui/react-slider';

export type SliderSizeType = 'Medium' | 'Small';

export interface SliderProps extends SliderPrimitive.SliderProps {
  size?: SliderSizeType;
}

export const Slider = ({ size, ...props }: SliderProps) => {
  return (
    <SliderRootStyled {...props} size={size}>
      <SliderTrackStyled size={size}>
        <SliderRangeStyled />
      </SliderTrackStyled>
      <SliderThumbStyled size={size} />
    </SliderRootStyled>
  );
};
