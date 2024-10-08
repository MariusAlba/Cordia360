import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className='Slider'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Website-Builder-09-23-2024_09_42_PM.png?etag=%221270c-66f1a171%22&sourceContentType=image%2Fpng&quality=85"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Screenshot%202024-09-23%20222051.png?etag=W%2F%22f4a1-66f1a3aa%22&sourceContentType=image%2Fpng&quality=85"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://impro.usercontent.one/appid/oneComWsb/domain/cordia360.com/media/cordia360.com/onewebmedia/Screenshot%202024-09-23%20221751.png?etag=W%2F%2210048-66f1a3ab%22&sourceContentType=image%2Fpng&quality=85"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;