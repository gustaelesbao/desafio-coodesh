import { Spacing, StaticColor } from 'app/constants';
import { Shimmer } from 'atomic/atm.shimmer';
import { WordBoxWrapperStyled } from './word-box.component.style';

export const WordBoxShimmer = () => {
  return (
    <WordBoxWrapperStyled>
      <Shimmer
        width='60%'
        height={Spacing.Size7X}
        color={StaticColor.Primary200}
        highlightColor={StaticColor.Primary300}
      />
      <Shimmer
        width='60%'
        height={Spacing.Size7X}
        color={StaticColor.Primary200}
        highlightColor={StaticColor.Primary300}
      />
    </WordBoxWrapperStyled>
  );
};
