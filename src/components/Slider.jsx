import { register } from "swiper/element/bundle";
register();
const Slider = () => {
    return (
        <div>
            hi
            <swiper-container
                slides-per-view="6"
                speed="500"
                loop="true"
                css-mode="true"
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
            </swiper-container>
        </div>
    );
};

export default Slider;
