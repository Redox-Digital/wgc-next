import css from './Rankings.module.scss';
import Image from 'next/image';

const players = [
  {
    name: 'J. Jaeggi',
    img: '/layouts/placeholder2.jpg',
    hcp: 16,
    score: 257,
  },
  {
    name: 'J. Jaeggi',
    img: '/layouts/placeholder1.jpg',
    hcp: 18,
    score: 250,
  },
  {
    name: 'J. Jaeggi',
    img: '/layouts/placeholder2.jpg',
    hcp: 16,
    score: 245,
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

            <td>{p.hcp}</td>
            <td>{p.score}</td>
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
        <h3>
          EXTRACURRICULAR
          <br />- HCP Single
        </h3>
        <p>Mar. 14th to Mar. 18th</p>
        <p>
          Game type : <b>Net Strableford</b>
        </p>
      </div>
      <div className={css.prices}>
        <div className={css.price}>
          <h4 title="1st, winner">🥇</h4>
          <p>J. Jaeggi</p>
          <Image src={'/layouts/placeholder1.jpg'} alt={''} width={120} height={120} />
        </div>
        <div className={css.price}>
          <h4 title="2nd">🥈</h4>
          <p>J. Jaeggi</p>
          <Image src={'/layouts/placeholder2.jpg'} alt={''} width={120} height={120} />
        </div>
        <div className={css.price}>
          <h4 title="3rd">🥉</h4>
          <p>J. Jaeggi</p>
          <Image src={'/layouts/placeholder1.jpg'} alt={''} width={120} height={120} />
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

              <td>{p.hcp}</td>
              <td>{p.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
