import React from 'react';
import { render } from '@testing-library/react';
import AreaContainer from './AreaContainer';
import '@testing-library/jest-dom';



describe('AreaContainer', () => {
    it('Should render the area container', () => {
      const { getByText } = render(<AreaContainer />);
      expect(getByText('Denver Neighborhoods')).toBeInTheDocument();
    });

  })
