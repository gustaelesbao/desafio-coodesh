import { LoaderDashStyled, LoaderRingStyled, LoaderRingWrapperStyled } from './loader.component.style';

export interface LoaderProps {
  size?: string;
  weight?: string;
  color?: string;
}

export const Loader = ({ size, weight, color }: LoaderProps) => {
  return (
    <LoaderRingWrapperStyled size={size}>
      <LoaderRingStyled>
        <LoaderDashStyled weight={weight} color={color} />
      </LoaderRingStyled>
    </LoaderRingWrapperStyled>
  );
};
