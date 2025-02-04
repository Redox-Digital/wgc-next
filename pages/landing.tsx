import Link from 'next/link';
import css from './Landing.module.scss';

export default function Home() {
  return (
    <main>
      <section id="intro-section" className={css.intro}>
        <div className={css.introGradient}>
          <div className={css.container}>
            <h1 className="text-shadow">
              Joue au golf physiquement tout en rivalisant digitalement
            </h1>
            <p className="on-image text-shadow">
              Jouez physiquement dans le club de votre choix en vous mesurant virtuellement à
              n&apos;importe quel autre joueur dans le monde!
            </p>

            <a href="#" className="btn btn-primary btn-m-100">
              Vers les challenges
            </a>
            <a href="#how-to-section" className="btn btn-secondary btn-m-100">
              Comment jouer
            </a>
          </div>
        </div>
      </section>
      <div id="temp-events" className="container">
        <div className="row">
          <div className="col-0 col-lg-2 col-xl-4">{/* Spacer */}</div>
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <Link href="#" className="event">
              <div className="img-container">
                <img src="/layouts/stensen1.jpeg" alt="Henrik Stensen Eyewear Event" />
              </div>

              <div className="texts">
                <div className="surtitle">
                  <sup>De 1er avril au 15 juin</sup>
                </div>
                <h5>Championnat HS</h5>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </Link>
          </div>

          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <a href="#" className="event">
              <div className="img-container">
                <img src="/layouts/trackman.jpg" alt="Join us on Trackman" />
              </div>

              <div className="texts">
                <h5>WGC Winter Challenge sur TRACKMAN</h5>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      <section id="concept-section">
        <div className="container">
          <h2>Le concept</h2>
          <p className="subtitle">
            World Golf Challenge est la première plateforme digitale de golf réunissant des joueurs
            de tous niveaux, qui s’affrontent sur de vrais parcours lors de Challenges virtuels. Le
            meilleur du golf en phygital !
          </p>

          <div className="row mt-4">
            <div className="col col-12 col-sm-6 col-lg-3">
              <div className="concept-item">
                <div className="icon">
                  <i className="fa-solid fa-pencil"></i>
                </div>

                <p>
                  <b>Rejoins un Challenge</b>
                </p>

                <p>Chaque jour, choisis un Challenge sur l&apos;écran</p>
              </div>
            </div>

            <div className="col col-12 col-sm-6 col-lg-3">
              <div className="concept-item">
                <div className="icon">
                  <i className="fa-solid fa-golf-ball-tee"></i>
                </div>

                <p>
                  <b>Joue au golf</b>
                </p>

                <p>Real action on the greens</p>
              </div>
            </div>

            <div className="col col-12 col-sm-6 col-lg-3">
              <div className="concept-item">
                <div className="icon">
                  <i className="fa-solid fa-medal"></i>
                </div>

                <p>
                  <b>Entre ton score & gagne !</b>
                </p>

                <p>Beaucoup d&apos;amusement et de bons prix</p>
              </div>
            </div>

            <div className="col col-12 col-sm-6 col-lg-3">
              <div className="concept-item">
                <div className="icon">
                  <i className="fa-solid fa-sack-dollar"></i>
                </div>

                <p>
                  <b>Paie ton Challenge</b>
                </p>

                <p>Paiement simple & sécurisé via Paypal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-section">
        <div className="one-two-thirds-section">
          <div className="one-third">
            <div className="container">
              <h2 className="text-shadow">Comment jouer</h2>
              <p className="on-image text-shadow">
                Choisis un Challenge correspondant au jour de ta partie de golf. Pour un Buy-in,
                charge ton compte via PayPal en toute sécurité. La répartition des gains sera
                visible dans le Lobby. Un amateur peut rejoindre un Challenge de catégories
                d’handicap plus élevées mais pas inférieures. Les Pros ne participent pas aux
                compétitions amateurs (hors Private).
              </p>
              {/* <!-- to the About page --> */}
              <a href="#" className="btn btn-secondary">
                Plus d&apos;informations
              </a>
            </div>
          </div>
          <div className="two-thirds">
            <div className="container">
              <div className="numbered-items">
                <div className="item">
                  <div className="item-title">
                    <span className="item-number">1</span>
                    <h5>Rejoins un Challenge</h5>
                  </div>

                  <p>
                    Choisis un Challenge à l&apos;écran, va jouer sur le terrain de ton choix. Pour
                    les Buy-in, utilise notre partenaire Paypal pour créditer ton compte de façon
                    sécurisée. Toutes les informations seront disponibles dans le Lobby du
                    Challenge.
                  </p>
                </div>
                <div className="item">
                  <div className="item-title">
                    <span className="item-number">2</span>
                    <h5>Inscris ton score</h5>
                  </div>
                  <p>
                    Ton parcours terminé, rejoins ton lobby (bande verte en bas de ton portable, ou
                    carré vert sur ton desktop) et inscris ton score dans le Challenge que tu viens
                    de jouer. Assure-toi de bien entrer ton score au bon format de jeu (p.e. Net
                    Stableford vs Net Stroke Play).
                  </p>
                </div>
                <div className="item">
                  <div className="item-title">
                    <span className="item-number">3</span>
                    <h5>Classement</h5>
                  </div>
                  <p>
                    Le ranking final du Challenge de la journée <i>(10pm CET)</i>. Tu peux découvrir
                    tes classements dans ton profile ou sur l’onglet Leaderboard{' '}
                    <i>(hors Private)</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="horiz-banner">
        <img className="d-none d-md-block" src="/layouts/banner.jpg" alt="HS Championship" />
        <img className="d-block d-md-none" src="/layouts/banner-mobile.jpg" alt="HS Championship" />
      </div>

      <section id="challenges-categories-section">
        <div className="container">
          <h2>Rivalise avec d&apos;autres joueurs</h2>
          <p className="subtitle">
            Choisis la catégorie qui correspond à ton handicap ou au-dessus, rejoins un Challenge et
            défie le monde!
          </p>

          <div className="row my-4">
            {/* <!-- to the Clubhouse, challenges already filtered ? --> */}
            <a href="#" className="col-12 col-sm-6 col-lg-3">
              <div className="category-card cat-hcp-single">
                <div className="top">
                  <h4>HCP Single</h4>
                </div>
                <div className="bottom"></div>
              </div>
            </a>
            <a href="#" className="col-12 col-sm-6 col-lg-3">
              <div className="category-card cat-hcp-16">
                <div className="top">
                  <h4>HCP up to 16</h4>
                </div>
                <div className="bottom"></div>
              </div>
            </a>
            <a href="#" className="col-12 col-sm-6 col-lg-3">
              <div className="category-card cat-hcp-54">
                <div className="top">
                  <h4>HCP up to 54</h4>
                </div>
                <div className="bottom"></div>
              </div>
            </a>
            <a href="#" className="col-12 col-sm-6 col-lg-3">
              <div className="category-card cat-hcp-pro">
                <div className="top">
                  <h4>Pro</h4>
                </div>
                <div className="bottom"></div>
              </div>
            </a>
          </div>

          {/* <!-- to the Clubhouse --> */}
          <a href="#" className="btn btn-secondary">
            Voir tous les challenges
          </a>
        </div>
      </section>

      <section id="private-challenges-section">
        <div className="two-one-thirds-section">
          <div className="two-thirds">
            <div className="container">
              <h2>Tournois privés</h2>
              <p>
                Que tu sois un joueur, un club, une société, crée ton propre Challenge. Détermine le
                format <i>(free/buy-in, amateurs et/ou pros)</i>, les dates et le type de jeu. La
                plateforme génère un lien privé que tu peux envoyer aux participants de ton choix.
              </p>
              {/* <!-- to the Clubhouse, Private challenges section --> */}
              <Link href="#" className="btn btn-primary">
                Crée ton challenge
              </Link>
            </div>
          </div>
          <div className="one-third"></div>
        </div>
      </section>

      <section id="cta" className="">
        <div className="cta-background container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="text-shadow">
                Rejoins dès à présent, et joue contre d&apos;autres golfeurs
              </h3>
            </div>
            <div className="col-12  col-md-6">
              {/*<!-- to Register -->*/}
              <a className="btn btn-primary" href="#">
                Rejoindre gratuitement
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
