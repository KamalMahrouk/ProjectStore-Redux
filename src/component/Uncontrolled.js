import Carousel from 'react-bootstrap/Carousel';

function Uncontrolled() {
  return (
    <Carousel className='h-24' controls={false}>
      <Carousel.Item>
        <img alt='' src="https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg" className='h-72 w-full' text="First slide" />
        <Carousel.Caption>
          <h3 className='font-bold placeholder-glow text-6xl text-black text-pretty pt-28 '>Shop with us now!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKKXW_ZrJ354Q5xq_03Szh9CPxGrRwcHz9Q&s" height={140} width={400} className='h-72 w-full' text="Second slide" />
        <Carousel.Caption>
          <h3 className='font-bold placeholder-glow text-6xl text-black text-pretty pt-28 '>Enjoy the best Promotions!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt='' src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg" className='h-72 w-full' text="Third slide" />
        <Carousel.Caption>
          <h3 className='font-bold placeholder-glow text-6xl text-black text-pretty pt-28 '>Biggest flash sales ever!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Uncontrolled;