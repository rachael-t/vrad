import React from 'react';
import { render } from '@testing-library/react';
import AreaCard from './AreaCard';
import '@testing-library/jest-dom';

describe('AreaContainer', () => {
    it('Should render the area card', () => {
      const { getByText } = render(<AreaCard
        about={ 'great area' }
        id={ 303 }
        key={ 303 }
        listings={ [] }
        name={ 'River North' }
        shortName={ 'RiNo' }
      />);
      expect(getByText('great area')).toBeInTheDocument();
      expect(getByText('River North')).toBeInTheDocument();
      expect(getByText('Also known as RiNo')).toBeInTheDocument();
    });
  })
