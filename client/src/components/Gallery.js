import React, { Component } from 'react';
//import { render } from 'react-dom';

import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

// to best see the results, click the popout button in the preview browser
// and resize your browser

class PhotoGallery extends Component {
  constructor() {
    super();
    this.state = { width: -1 };
  }
  render() {
    const width = this.state.width;
    return (

    <div>
      <div style={{ textAlign: 'center'}}>
        <h1>
          Wedding Album
        </h1>
        <p>We have your photo album below</p>
      </div>


      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
        ({measureRef}) => {
          if (width < 1 ){
            return <div ref={measureRef}></div>;
          }
          let columns = 1;
          if (width >= 480){
            columns = 2;
          }
          if (width >= 1024){
            columns = 3;
          }
          if (width >= 1824){
            columns = 4;
          }
          return <div ref={measureRef}><Gallery photos= {photos} columns={columns} /></div>
        }
      }
      </Measure>
    </div>

    )
  }
}

export default PhotoGallery;
