import css from './Rankings.module.scss';
import Image from 'next/image';

const players = [
  {
    name: 'J. Jaeggi',
    img: '/layouts/profile-placeholder.webp',
    hcp: 16,
    score: 257,
  },
  {
    name: 'J. Jaeggi',
    img: '/layouts/profile-placeholder.webp',
    hcp: 18,
    score: 250,
  },
  {
    name: 'J. Jaeggi',
    img: '/layouts/profile-placeholder.webp',
    hcp: 16,
  },
];

export default function Rankings() {
  return (
    <table className={css.rankings}>
      <thead>
        <tr>
          <th>Pos</th>
          <th className={css.name}>Name</th>
          <th>HCP</th>
          <th>Score</th>
        </tr>
      </thead>

      <tbody>
        {players.map((p, key) => (
          <tr key={key}>
            <td>#{key + 1}</td>
            <td className={css.profile}>
              <Image src={p.img} alt={''} width={50} height={50} /> <span>{p.name}</span>
            </td>
            <td className={css.hcp}>{p.hcp}</td>
            <td className={css.score}>{p.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function RankingsWithPrices() {
  return (
    <div className={css.card}>
      <div className={css.head}>
        <Image src={'/logos/logo_excr_white.svg'} alt={''} width={600} height={200} />
        <h5>HCP Up to 54</h5>
        {/*<h3>
          EXTRACURRICULAR
          <br />- HCP Single
        </h3> */}
        <p>Mar. 14th to Mar. 18th</p>
        <p>
          Game type : <b>Net Strableford</b>
        </p>
      </div>
      <div className={css.prices}>
        <div className={css.price}>
          <h4 title="1st, winner">🥇</h4>
          <p>J. Jaeggi</p>
          <Image src={'/layouts/polo1.webp'} alt={''} width={120} height={120} />
        </div>
        <div className={css.price}>
          <h4 title="2nd">🥈</h4>
          <p>J. Jaeggi</p>
          <Image src={'/layouts/polo2.webp'} alt={''} width={120} height={120} />
        </div>
        <div className={css.price}>
          <h4 title="3rd">🥉</h4>
          <p>J. Jaeggi</p>
          <Image src={'/layouts/hat.webp'} alt={''} width={120} height={120} />
        </div>
      </div>
      <table className={css.rankings}>
        <thead>
          <tr>
            <th>Pos</th>
            <th className={css.name}>Name</th>
            <th>HCP</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((p, key) => (
            <tr key={key}>
              <td>#{key + 1}</td>
              <td className={css.profile}>
                <Image src={p.img} alt={''} width={50} height={50} /> <span>{p.name}</span>
              </td>
              <td className={css.hcp}>{p.hcp}</td>
              <td className={css.score}>{p.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
