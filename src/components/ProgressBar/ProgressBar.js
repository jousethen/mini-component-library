/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "8px",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "32px",
    "--borderRadius": "8px",
    "--padding": "4px"
  }
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return( 
    <Bar style={styles}>
      <Progress 
        role="progressbar" 
        aria-valuenow={value} 
        value={value}
        style={styles}>
          <VisuallyHidden>{value}%</VisuallyHidden>
      </Progress>
    </Bar>
  );
};
const Bar = styled.div`
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
border-radius: var(--borderRadius);
background-color: ${COLORS.transparentGray15}
`;

const Progress = styled.div`
height: var(--height);
padding: var(--padding);
border-radius: ${props => props.value > 98 ? `var(--borderRadius)` : `var(--borderRadius) 0 0 var(--borderRadius)`};
background-color: ${COLORS.primary};
width: ${props => props.value}%
`;


export default ProgressBar;
