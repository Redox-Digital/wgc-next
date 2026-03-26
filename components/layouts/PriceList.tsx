import css from './PriceList.module.scss';
import leagueCss from '@/components/content/LeagueBadge.module.scss';
import Image from 'next/image';

// DEV : static prizes for now.

export const prizes: PrizeType[] = [
  {
    title: 'Jaquet Droz Tourbillon Skelet-One',
    logo: '/sponsors/JaquetDroz/JD_white.svg',
    description: (
      <>
        <b>L'art de la haute horlogerie.</b> Une pièce exclusive en <b>titane de 41mm</b> dotée d’un
        <b> mouvement Tourbillon</b> squelette. Son cadran en saphir et index en or gris révèle son
        exception! <b>Valeur</b> : +€300’000.-
      </>
    ),
    badge: {
      title: 'Global Raffle',
      className: leagueCss.pgaChampion,
    },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price01.png',
    imgContain: true,
  },
  {
    title: 'LIV Pro-Am à Valderrama',
    logo: '/sponsors/JaquetDroz/4Aces_Logo_white.svg',

    description: (
      <>
        <b>Jouez avec les légendes.</b> Vivez un tour de golf en immersion totale sur le mythique
        parcours de <b>Valderrama</b> (Espagne) aux côtés des stars des <b>4Aces GC</b>.
      </>
    ),
    badge: {
      title: 'category winner',
      className: leagueCss.clubhouseKing,
    },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price02.jpg',
  },
  {
    title: 'Pack Officiel 4Aces',
    logo: '/sponsors/JaquetDroz/logo-under-armor-white.svg',

    description: (
      <>
        <b>Le look complet de l'équipe.</b> Équipez-vous de la tête aux pieds avec la tenue
        officielle des 4Aces portée.
      </>
    ),
    badge: {
      title: 'top 20 of each category',
      className: leagueCss.tournamentReady,
    },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price03.webp',
  },
];

export const prizesShort: PrizeType[] = [
  {
    title: "Une œuvre d'art au poignet",
    logo: '/sponsors/JaquetDroz/JD_white.svg',
    description: (
      <>
        Tentez de remporter par tirage au sort une pièce de haute horlogerie suisse Jaquet Droz,
        d’une valeur de € 300’000.-.
      </>
    ),
    badge: {
      title: 'tirage au sort global',
    },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price01-alt.jpg',
  },
  {
    title: 'LIV Pro-Am Valderrama',
    logo: '/sponsors/JaquetDroz/4Aces_Logo_white.svg',

    description: (
      <>
        Marquez l'histoire en gagnant votre invitation pour jouer aux côtés des légendes lors d'un
        Pro-Am exclusif.
      </>
    ),
    badge: {
      title: 'tirage au sort par catégorie',
      className: leagueCss.clubhouseKing,
    },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price02.jpg',
  },
  {
    title: 'Le kit complet des 4Aces',
    logo: '/sponsors/JaquetDroz/logo-under-armor-white.svg',

    description: <>Pour un équipement de la tête aux pieds de notre partenaire 4Aces.</>,
    badge: {
      title: 'top 20 de chaque catégorie',
      className: leagueCss.tournamentReady,
    },
    img: '/sponsors/JaquetDroz/UGxBG_Apr2026/WGC_UGxBG_Price03.webp',
  },
];

type Props = {
  lightBg?: boolean;
};

export default function PriceList({ lightBg }: Props) {
  return (
    <section className={`${css.section} ${lightBg && css.light}`} id="pricepool">
      <div className={css.sctTitle}>
        <h2>A. Lot. Of. Prizes.</h2>
        <p>
          Our generous sponsors are treating you to something special! Check out our selection of
          prizes for the winners, plus a bonus raffle for a chance to win a Jaquet Droz Swiss
          timepiece worth €300’000.-.
        </p>
      </div>
      <ul className={css.list}>
        {prizes.map((prize, key) => (
          <PrizeLine key={key} {...prize} />
        ))}
      </ul>
    </section>
  );
}

export function PriceListShort({ lightBg }: Props) {
  return (
    <section
      className={`${css.section} ${css.shortListSection} ${lightBg && css.light}`}
      id="pricepool"
    >
      <div className={css.sctTitle}>
        <h2>Votre inscription : le ticket pour une expérience exclusive</h2>
        <p>
          Tentez de remporter par tirage au sort une pièce de haute horlogerie Jaquet Droz, une
          œuvre d'art à six chiffres. Pour chaque catégorie, tentez également votre chance de
          marquer l'histoire en gagnant votre invitation pour jouer aux côtés des légendes lors du
          LIV Pro-Am de Valderrama.
        </p>
      </div>
      <ul className={css.shortList}>
        {prizesShort.map((prize, key) => (
          <PrizeCard key={key} {...prize} />
        ))}
      </ul>
    </section>
  );
}

export type PrizeType = {
  logo?: string;
  title: string;
  description?: string | React.ReactNode;
  img?: string;
  imgContain?: boolean;
  className?: string;

  badge?: {
    title: string;
    className?: string;
  };
};

export function PrizeLine({
  logo,
  title,
  description,
  img,
  imgContain,
  badge,
  className,
}: PrizeType) {
  return (
    <li className={`${css.prize} ${className}`}>
      <div className={css.content}>
        {logo && <Image className={css.logo} src={logo} alt="" width={80} height={32} />}

        <div className={css.texts}>
          {badge ? (
            <span className={`${css.badge} ${badge.className || leagueCss.rookie}`}>
              {badge.title}
            </span>
          ) : (
            ''
          )}
          <h3>{title}</h3>
          {description && <small>{description}</small>}
        </div>
      </div>

      {img && (
        <Image
          className={`${css.image} ${imgContain && css.contain}`}
          src={img}
          alt=""
          width={270}
          height={270}
        />
      )}
    </li>
  );
}

export function PrizeCard({
  logo,
  title,
  description,
  img,
  imgContain,
  badge,
  className,
}: PrizeType) {
  return (
    <li className={`${css.prize} ${css.card} ${className}`}>
      <div className={css.content}>
        {logo && <Image className={css.logo} src={logo} alt="" width={80} height={32} />}

        <div className={css.texts}>
          {badge ? (
            <span className={`${css.badge} ${badge.className || leagueCss.rookie}`}>
              {badge.title}
            </span>
          ) : (
            ''
          )}
          <h3>{title}</h3>
          {description && <small>{description}</small>}
        </div>
      </div>

      {img && (
        <Image
          className={`${css.image} ${imgContain && css.contain}`}
          src={img}
          alt=""
          width={360}
          height={180}
        />
      )}
    </li>
  );
}
