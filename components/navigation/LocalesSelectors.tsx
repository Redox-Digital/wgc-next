import css from './LocalesSelectors.module.scss';

export default function RegionSelect() {
  return (
    <label htmlFor="region" className={css.selectGroup}>
      Region :{' '}
      <select name="region" id="region">
        <option value="eu">Europe</option>
        <option value="am">Americas</option>
        <option value="as">Asia</option>
      </select>
    </label>
  );
}

export function LangSelect() {
  return (
    <label htmlFor="lang" className={css.selectGroup}>
      Language :{' '}
      <select name="lang" id="lang">
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </label>
  );
}
