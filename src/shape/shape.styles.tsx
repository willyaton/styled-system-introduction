import styled from 'styled-components';
import { variant } from 'styled-system';

import theme from '../share/theme';

export const defaultShape = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-shadow: none;
  outline: none;
  justify-content: center;
  align-items: center;
  transition-duration: 1s;
  text-align: center;
`;

export const ShapeStyled = styled(defaultShape)(
  variant({
    prop: 'bgShape',
    scale: 'div',
    variants: {
      circle: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        color: `${theme.colors.white}`,
      },
      square: {
        width: '250px',
        height: '250px',
        borderRadius: '0px',
        color: `${theme.colors.white}`,
      },
      rectangle: {
        width: '450px',
        height: '250px',
        borderRadius: '0px',
        color: `${theme.colors.white}`,
      },
    },
  }),
  variant({
    prop: 'bgColor',
    scale: 'div',
    variants: {
      blue: {
        backgroundColor: `${theme.colors.blue}`,
      },
      red: {
        backgroundColor: `${theme.colors.red}`,
      },
      yellow: {
        backgroundColor: `${theme.colors.yellow}`,
      },
      navy: {
        backgroundColor: `${theme.colors.navy}`,
      },
    },
  })
);

export const defaultText = styled.p`
  font-size: 24px;
  text-transform: uppercase;
`;

export const TextStyled = styled(defaultText)(
  variant({
    prop: 'fontFamily',
    scale: 'paragraph',
    variants: {
      courier: {
        fontFamily: `${theme.fonts.courier}`,
      },
      franklin: {
        fontFamily: `${theme.fonts.franklin}`,
      },
      gill: {
        fontFamily: `${theme.fonts.gill}`,
      },
      lucida: {
        fontFamily: `${theme.fonts.lucida}`,
      },
    },
  }),
  variant({
    prop: 'fontSize',
    scale: 'paragraph',
    variants: {
      small: {
        fontSize: '12px',
      },
      medium: {
        fontSize: '18px',
      },
      large: {
        fontSize: '36px',
      },
      xtraLarge: {
        fontSize: '56px',
      },
    },
  })
);
