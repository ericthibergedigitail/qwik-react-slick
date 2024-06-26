/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import Slider; {type Settings} from "react-slick";

const CarouselSlider = () => {
    const settings : Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
}

export const QCarouselSlider = qwikify$(CarouselSlider)
