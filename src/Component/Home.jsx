import React ,{useState}from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from '../image/home1slider.png'
import fourth from"../image/fourth.png"
import icon1 from '../image/Color Letter Avatar.png'
import icon2 from '../image/Color Letter Avatar (1).png'
import icon3 from '../image/Color Letter Avatar (2).png'
import icon4 from '../image/law 1.png'
import icon5 from '../image/education 1.png'
import icon6 from '../image/healthcare 1.png'
import icon7 from '../image/architect 1.png'
import splide1 from"../image/splide1.svg"
import splide2 from"../image/splide2.svg"
import splide3 from"../image/splide3.svg"
import splide4 from"../image/splide4.svg"
import splide5 from"../image/splide4.svg"
import splide6 from"../image/splide6.svg"
import crouser1 from "../image/crouser1.png"
import crouser2 from "../image/crouser2.png"
import crouser3 from "../image/crouser3.png"
const Crouser1=[
    {
        image: crouser1,
        title: "Research articles, case studies, clinical practice updates.",
        daytitle: "2 days ago"

    },
    {
        image: crouser2,
        title: "Research articles, case studies, clinical practice updates.",
        daytitle: "2 days ago"   
    },
    {
        image: crouser3,
        title: "Research articles, case studies, clinical practice updates.",
        daytitle: "2 days ago"   
    },
    {
        image: crouser1,
        title: "Research articles, case studies, clinical practice updates.",
        daytitle: "2 days ago"

    },
    {
        image: crouser2,
        title: "Research articles, case studies, clinical practice updates.",
        daytitle: "2 days ago"   
    },
    {
        image: crouser3,
        title: "Research articles, case studies, clinical practice updates.",
        daytitle: "2 days ago"   
    }
];



const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      var settings1 = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
    // const carouselRef = useRef(null);

    // const handleCarouselMove = (positive = true) => {
    //   const slideWidth = carouselRef.current.querySelector('.carousel-slide').clientWidth;
    //   carouselRef.current.scrollLeft = positive ? carouselRef.current.scrollLeft + slideWidth : carouselRef.current.scrollLeft - slideWidth;
    // };
    const [Page, setPage] = useState(5);
  const [Page1, setPage1] = useState(2);
  const [Page2, setPage2] = useState(1)

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % Crouser1.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + Crouser1.length) % Crouser1.length);
//   };

//   const currentItem = Crouser1[currentIndex];
  // const currentItem1=Crouser1[currentIndex+1];
    return (
        <>
                <div id="First_section">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6">
                                <h1>Ready to start by engaging <span>expert professionals.</span></h1>
                                <p>Book and meet over 12,06+ professionals for solutions in our global community.</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <img src={first} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="second_section">
                    <div className="container second-container">
                        <div className="row">
                            <div className="col-lg-4 d-flex">
                                <img src={icon1} alt="" />
                                <p>An open access to the world’s bes</p>
                            </div>
                            <div className="col-lg-4 d-flex">
                                <img src={icon2} alt="" />
                                <p>An open access to the world’s bes</p>

                            </div>
                            <div className="col-lg-4 d-flex">
                                <img src={icon3} alt="" />
                                <p>An open access to the world’s bes</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div id="third_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Discover top services</h2>
                            </div>
                        </div>
                        <div className="row row2 text-center center-card">
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon4} alt="" />
                                    <p>Advocates</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon5} alt="" />
                                    <p>Education</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon6} alt="" />
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon7} alt="" />
                                    <p>Architecture</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon6} alt="" />
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon4} alt="" />
                                    <p>Advocates</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon5} alt="" />
                                    <p>Education</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon6} alt="" />
                                    <p>Health</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon7} alt="" />
                                    <p>Architecture</p>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className='inner_div'>
                                    <img src={icon6} alt="" />
                                    <p>Health</p>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
                <div id="fourth_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={fourth} alt="" />
                            </div>
                            <div className="col-lg-6">
                                <p>Why ?</p>
                                <h1>Ready to start by engaging  <span>expert professionals.</span></h1>
                                <p>Book and meet over 12,06+ professionals for solutions in our global community.</p>
                                <button type="button" class="btn btn-outline-primary btn-fourth">Know more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fifth_section">
                    <div className="fifth-container">
                        <div className="fifth-main-sec">
                            <div className="top-fifth-sec">
                                <div className="five-heading"><h2>Feeds</h2></div>
                                <div className="five-right-heading">
                                    <div className="five-right-btn">
                                         <button type="button" class="btn btn-outline-primary btn-fourth">Know more</button>
                                    </div>
                                    <div className="five-right-svg-btn">                                      
                                        <svg  width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="42" fill="#F5F5F5"/>
                                        <g clip-path="url(#clip0_0_1)">
                                        <rect width="1440" height="6626" transform="translate(-1214 -2147)" fill="white"/>
                                        <path d="M24.3205 29.0448L25.5032 27.8621L18.6411 21L25.5032 14.1379L24.3205 12.9552L16.2757 21L24.3205 29.0448Z" fill="#495D71"/>
                                        <circle cx="21" cy="21" r="20" stroke="#909CA8" stroke-width="2"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_0_1">
                                        <rect width="1440" height="6626" fill="white" transform="translate(-1214 -2147)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>   
                                        <svg  width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="42" fill="#F5F5F5"/>
                                        <g clip-path="url(#clip0_0_1)">
                                        <rect width="1440" height="6626" transform="translate(-1268 -2147)" fill="white"/>
                                        <path d="M17.6795 29.0448L16.4968 27.8621L23.3589 21L16.4968 14.1379L17.6795 12.9552L25.7243 21L17.6795 29.0448Z" fill="#495D71"/>
                                        <circle cx="21" cy="21" r="20" stroke="#909CA8" stroke-width="2"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_0_1">
                                        <rect width="1440" height="6626" fill="white" transform="translate(-1268 -2147)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>   
                                </div>   
                            </div>
                            <div className="center-five">
                                <div className="boottom-fifth-sec">
                                <Slider {...settings}>
                                    {
                                        Crouser1.map((item)=>
                                        (
                                            <div className="bottom-title">
                                                <img src={item.image} alt="" />
                                                <div className="text-five-sec">
                                                <p>{item.title}</p>
                                                <span>{item.daytitle}</span>
                                                </div>
                                                
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                           
                               
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sixth_section">
                    <div className="container-sixth">
                        <div className="sixth-section">
                            <h1>Ready to start by engaging <span>expert professionals.</span></h1>
                            <p>We want to help you build an epic career with expert mentors.
                            From junior to leadership, we are here to grow with you on this journey.</p>
                            <div className="button-center-six">
                                <button type="button" className="btn btn-outline-primary btn-sixth">Know more</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                  
               

                <div id="eight-section">
                    <div className="eight-section">
                        <div className="eight-main1">
                        <Slider {...settings1}>
                       
                        <div className="joki1">
                            <img src={splide1} alt="" />
                        </div>
                        <div className="joki1">
                            <img src={splide2} alt="" />
                        </div>
                        <div className="joki1">
                            <img src={splide3} alt="" />
                        </div>
                        <div className="joki1">
                            <img src={splide4} alt="" />
                        </div>
                        <div className="joki1">
                            <img src={splide5} alt="" />
                        </div>
                        <div className="joki1">
                            <img src={splide6} alt="" />
                        </div>
                       
                        
                        </Slider>
                        </div>
                    </div>
                </div>
         

        </>
    )
}

export default Home
