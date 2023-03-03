import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '500px'
}
const slideImages = [
  {
    url: 'https://media.istockphoto.com/id/1411275350/photo/shelf-with-ceramics-in-pottery-workshop.jpg?b=1&s=170667a&w=0&k=20&c=LSrmenNg6mbeIiS0H07CbRdQRYA3fqTFJLcH1yS12_0=',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1650451290247-872fa1dfea4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFtYm9vJTIwd29ya3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1535554773938-5c4b52cf8d98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;