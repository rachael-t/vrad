import React from 'react';
import { render } from '@testing-library/react';
import AreaCard from './AreaCard';
import '@testing-library/jest-dom';
import { BrowserRouter, Router } from 'react-router-dom';

describe('AreaCard', () => {
    it('Should render the area card', () => {
      const { getByText } = render(<BrowserRouter><AreaCard
        about={ 'great area' }
        id={ 303 }
        key={ 303 }
        listings={ [] }
        name={ 'River North' }
        shortName={ 'RiNo' }
      />
      </BrowserRouter>);
      expect(getByText('great area')).toBeInTheDocument();
      expect(getByText('River North')).toBeInTheDocument();
      expect(getByText('Also known as RiNo')).toBeInTheDocument();
    });
  })
