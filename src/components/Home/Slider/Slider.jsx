import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductList } from 'redux/products/selectors';
import { useEffect } from 'react';
import { getProductList } from 'redux/products/operations';
import { ImgSlide, ImgSlider, SliderContainer } from './Slider.styled';

const SliderComponent = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true, // Включає автоматичну прокрутку
    autoplaySpeed: 3500, // Час (в мілісекундах) між автоматичними переходами
  };

  return (
    <>
      <SliderContainer>
        <Slider {...settings}>
          {productList.map(product => (
            <ImgSlide key={product._id}>
              <ImgSlider src={product.img} alt={product.title} />
            </ImgSlide>
          ))}
        </Slider>
      </SliderContainer>
    </>
  );
};
export default SliderComponent;
