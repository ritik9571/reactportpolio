import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I was in urgent need of a new website, and they delivered within an incredibly tight deadline without compromising on quality. Their creative approach helped bring my ideas to life, and the website looks fantastic. If you need reliable and fast service, look no further!",
    },
    {
      img: profilePic2,
      review:
        "I’m thoroughly impressed with the level of service I received. The team guided me through every step of the process, from design to launch. They were always available to answer my questions and provided excellent support, even after the website was up and running. Truly outstanding!",
    },
    {
      img: profilePic3,
      review:
        "The team’s expertise in web development is second to none. They transformed our outdated website into a modern, user-friendly platform that has significantly improved our customer experience. The technical skills they bring to the table are impressive, and I’m glad I chose them for this project.",
    },
    {
      img: profilePic4,
      review:
        "Working with them was a breeze! They maintained clear communication throughout the project and made sure every detail was perfect. The website they delivered exceeded my expectations in terms of design and functionality. I’ve already received positive feedback from my clients about the new look!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
