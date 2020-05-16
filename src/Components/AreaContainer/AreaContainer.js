import React, { Component } from 'react';
import './AreaContainer.css';
import AreaCard from '../AreaCard/AreaCard';

class AreaContainer extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
    }
  }

  componentDidMount() {
    fetch(`https://vrad-api.herokuapp.com/api/v1/areas`)
      .then(response => response.json())
      .then(areaData => {
        const areaPromises = areaData.areas.map(area => {
          return fetch(`https://vrad-api.herokuapp.com${area.details}`)
            .then(res => res.json())
            .then(areaInfo => {
              return {
                about: areaInfo.about,
                id: areaInfo.id,
                name: areaInfo.name,
                shortName: area.area
              }
            })
        })
        return Promise.all(areaPromises)
      })
      .then(areas => {
        this.setState({ areas })
      })
  }

  render() {
    const areas = this.state.areas.map(area => {
      return (
        <AreaCard
          about={ area.about }
          id={ area.id }
          key={ area.id }
          listings={ area.listings }
          name={ area.name }
          shortName={ area.shortName }
          updateListings={ this.props.updateListings }
        />
      )
    });

    return (
      <div className='area-container'>
      <h2>Denver Neighborhoods</h2>
        { areas }
      </div>
    )
  }
}

export default AreaContainer;
