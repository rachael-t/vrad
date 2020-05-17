import React from 'react';
import { render } from '@testing-library/react';
import ListingDetail from './ListingDetail';
import '@testing-library/jest-dom';



describe('ListingDetail', () => {
    it('Should render the listing details', () => {
      const { getByText } = render(
        <ListingDetail
        listingDetails= {{
        address: '504 south broad st',
        areaId: 406,
        costPerNight: 200,
        key: 31,
        listingId: 31,
        name: 'hot cool party palace',
        numBathrooms: 10,
        numBedrooms: 37,
        uniqueFeatures: ['hot tub', 'hand sanitizer'],
        zipcode: 8675309
      }}
        />);
      expect(getByText("hot cool party palace")).toBeInTheDocument();
      expect(getByText("hot tub")).toBeInTheDocument();
      expect(getByText("hand sanitizer")).toBeInTheDocument();
      expect(getByText("hand sanitizer")).toBeInTheDocument();
      expect(getByText("This rental is $200 per night.")).toBeInTheDocument();
      expect(getByText("It has 37 bedrooms and 10 bathrooms.")).toBeInTheDocument();
      expect(getByText("Located at 504 south broad st, Denver, CO 8675309")).toBeInTheDocument();


    });

  })
