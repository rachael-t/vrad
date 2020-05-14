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
                shortName: area.area,
                id: areaInfo.id,
                name: areaInfo.name,
                about: areaInfo.about
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
          key={ area.id }
          id={ area.id }
          shortName={ area.shortName }
          name={ area.name }
          about={ area.about }
        />
      )
    });

    return (
      <div className='area-container'>
        { areas }
      </div>
    )
  }
}

export default AreaContainer;
