import React from 'react';
import { ShapeStyled, TextStyled } from './shape.styles';

export interface ShapeProps {
  bgShape: any;
  bgColor: any;
  fontFamily: any;
  fontSize: any;
  text: any;
}

export function Shape({
  bgShape,
  bgColor,
  fontFamily,
  fontSize,
  text,
}: ShapeProps) {
  return (
    <ShapeStyled bgColor={bgColor} bgShape={bgShape}>
      <TextStyled fontFamily={fontFamily} fontSize={fontSize}>
        {text}
      </TextStyled>
    </ShapeStyled>
  );
}

export default Shape;
