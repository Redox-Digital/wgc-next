import css from '@/pages/LeaderboardPage.module.scss';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setBothRadios: (arg1: string, arg2: string) => void;
  setArg1: Dispatch<SetStateAction<string>>;
  setArg2: Dispatch<SetStateAction<string>>;
  arg1: string;
  arg2: string;
};

export default function XpTogglesInput({ setBothRadios, setArg1, setArg2, arg1, arg2 }: Props) {
  return (
    <div className={`${css.toggles} ${css.mobile}`}>
      <div className={css.toggle1}>
        <label htmlFor="global">
          <input
            type="radio"
            name="arg1"
            id="global"
            onClick={() => setArg1('global')}
            checked={arg1 === 'global'}
          />
          <span>Global Leaderboards</span>
        </label>
        <label htmlFor="friends">
          <input
            type="radio"
            name="arg1"
            id="friends"
            onClick={() => setArg1('friends')}
            checked={arg1 === 'friends'}
          />
          <span>Friends Leaderboards</span>
        </label>
      </div>

      <div className={css.toggle2}>
        <label htmlFor="xp">
          <input
            type="radio"
            name="arg2"
            id="xp"
            onClick={() => setArg2('xp')}
            checked={arg2 === 'xp'}
          />
          <span>Overall XP</span>
        </label>
        <label htmlFor="score">
          <input
            type="radio"
            name="arg2"
            id="score"
            onClick={() => setArg2('score')}
            checked={arg2 === 'score'}
          />
          <span>Cumulative Net Stableford</span>
        </label>
      </div>
    </div>
  );
}

type toggleProps = {
  arg: string;
  setArg: Dispatch<SetStateAction<string>>;
  className?: string;
};

export function FriendsToggleInput({ arg, setArg, className }: toggleProps) {
  return (
    <div className={`${css.toggles} ${className}`}>
      <div className={css.toggle1}>
        <label htmlFor="followers">
          <input
            type="radio"
            name="arg"
            id="followers"
            onClick={() => setArg('followers')}
            checked={arg === 'followers'}
          />
          <span>Followers</span>
        </label>
        <label htmlFor="following">
          <input
            type="radio"
            name="arg"
            id="following"
            onClick={() => setArg('following')}
            checked={arg === 'following'}
          />
          <span>Following</span>
        </label>
      </div>
    </div>
  );
}

// Legacy Function
/*
export function TogglesInput({ setBothRadios, setArg1, setArg2, arg1, arg2 }: Props) {
  return (
    <>
      <div className={`${css.toggles} ${css.desktop}`}>
        <label htmlFor="m-single">
          <input
            type="radio"
            name="toggleDesktop"
            id="m-single"
            onClick={() => setBothRadios('month', 'single')}
            checked={arg1 === 'month' && arg2 === 'single'}
          />
          <span>Monthly – HCP Single</span>
        </label>
        <label htmlFor="m-18">
          <input
            type="radio"
            name="toggleDesktop"
            id="m-18"
            onClick={() => setBothRadios('month', 'up to 18')}
            checked={arg1 === 'month' && arg2 === 'up to 18'}
          />
          <span>Monthly – HCP up to 18</span>
        </label>
        <label htmlFor="m-54">
          <input
            type="radio"
            name="toggleDesktop"
            id="m-54"
            onClick={() => setBothRadios('month', 'up to 54')}
            checked={arg1 === 'month' && arg2 === 'up to 54'}
          />
          <span>Monthly – HCP up to 54</span>
        </label>
        <label htmlFor="a-single">
          <input
            type="radio"
            name="toggleDesktop"
            id="a-single"
            onClick={() => setBothRadios('all-time', 'single')}
            checked={arg1 === 'all-time' && arg2 === 'single'}
          />
          <span>All-Time – HCP Single</span>
        </label>
        <label htmlFor="a-18">
          <input
            type="radio"
            name="toggleDesktop"
            id="a-18"
            onClick={() => setBothRadios('all-time', 'up to 18')}
            checked={arg1 === 'all-time' && arg2 === 'up to 18'}
          />
          <span>All-Time – HCP up to 18</span>
        </label>
        <label htmlFor="a-54">
          <input
            type="radio"
            name="toggleDesktop"
            id="a-54"
            onClick={() => setBothRadios('all-time', 'up to 54')}
            checked={arg1 === 'all-time' && arg2 === 'up to 54'}
          />
          <span>All-Time – HCP up to 54</span>
        </label>
      </div>

      <div className={`${css.toggles} ${css.mobile}`}>
        <div className={css.toggle1}>
          <label htmlFor="monthly">
            <input
              type="radio"
              name="arg1"
              id="monthly"
              onClick={() => setArg1('month')}
              checked={arg1 === 'month'}
            />
            <span>Monthly leaderboard</span>
          </label>
          <label htmlFor="all-time">
            <input
              type="radio"
              name="arg1"
              id="all-time"
              onClick={() => setArg1('all-time')}
              checked={arg1 === 'all-time'}
            />
            <span>All-time leaderboard</span>
          </label>
        </div>

        <div className={css.toggle2}>
          <label htmlFor="hcpSingle">
            <input
              type="radio"
              name="hcpRadio"
              id="hcpSingle"
              onClick={() => setArg2('single')}
              checked={arg2 === 'single'}
            />
            <span>HCP single</span>
          </label>
          <label htmlFor="hcp18">
            <input
              type="radio"
              name="hcpRadio"
              id="hcp18"
              onClick={() => setArg2('up to 18')}
              checked={arg2 === 'up to 18'}
            />
            <span>HCP up to 18</span>
          </label>
          <label htmlFor="hcp54">
            <input
              type="radio"
              name="hcpRadio"
              id="hcp54"
              onClick={() => setArg2('up to 54')}
              checked={arg2 === 'up to 54'}
            />
            <span>HCP up to 54</span>
          </label>
        </div>
      </div>
    </>
  );
}
  */
