/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "height": "8px",
    "borderRadius": "4px",
    "padding": "0px"
  },
  medium: {
    "height": "12px",
    "borderRadius": "4px",
    "padding": "0px"
  },
  large: {
    "height": "32px",
    "borderRadius": "8px",
    "padding": "4px"
  }
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return( 
    <Bar  
      role="progressbar" 
      aria-valuenow={value}
      style={{
        '--padding': styles.padding ,
        '--borderRadius': styles.borderRadius ,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      
      <Progress 
      style={{
            '--width': value + '%',
            '--height': styles.height,
            '--borderRadius': value > 98 ? "4px" : "4px 0 0 4px"
          }}/>
    </Bar>
  );
};
const Bar = styled.div`
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
border-radius: var(--borderRadius);
background-color: ${COLORS.transparentGray15};
padding: var(--padding);
`;

const Progress = styled.div`
height: var(--height);
background-color: ${COLORS.primary};
width: var(--width);
border-radius: var(--borderRadius);
`;


export default ProgressBar;
