import css from './Carousel.module.scss';
import Image from 'next/image';

type Slide = {};

export default function Carousel() {
  const slides = [
    {
      id: 'item-1',
      title: '1. Join a Challenge',
      desc: 'Join an open Challenge, free or buy-in.',
      img: '/layouts/how-to-play/step-1.jpg',
    },
    {
      id: 'item-2',
      title: '2. Go out, play golf',
      desc: 'Play a round of golf physically.',
      img: '/layouts/how-to-play/step-2.jpg',
    },
    {
      id: 'item-3',
      title: '3. Enter your score',
      desc: 'After your round, enter your score on WGC.',
      img: '/layouts/how-to-play/step-3.jpg',
    },
    {
      id: 'item-4',
      title: '4. Redeem your price',
      desc: 'When the Challenge is over, you can redeem your price : we have goodies or direct cash prices.',
      img: '/layouts/how-to-play/step-4.jpg',
    },
  ];

  return (
    <div className={css.carousel}>
      <div className={css.scroller}>
        {slides.map((slide) => (
          <label key={slide.id} htmlFor={slide.id} className={css.slide}>
            <Image src={slide.img} alt="" fill />
            <div className={css.overlay} />
            <div className={css.content}>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
