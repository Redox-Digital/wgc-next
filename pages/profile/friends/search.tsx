import PageTitle from '@/components/content/PageTitle';
import css from './Friends.module.scss';
import CopyLink from '@/components/inputs/CopyLink';
import { TextInput } from '@/components/inputs/Inputs';
import { useState } from 'react';
import { FriendPreview, UserPreviewProps } from '@/components/content/FriendPreview';
import { dummyLeaderboard } from '@/constants/DummyData';

export default function FriendsSearch() {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  // DEV : Static Data
  const friends: UserPreviewProps[] = dummyLeaderboard.map((user) => ({
    name: `${user.name} ${user.flag}`,
    img: user.img,
    url: '/profile',
    notFollowed: true,
    pending: Boolean(Math.round(Math.random())),
  }));

  return (
    <main className={css.page}>
      <PageTitle title="Add friends" returnBtn />

      <section className={css.search}>
        <h6>Search</h6>
        <TextInput
          id={'search'}
          type={'text'}
          placeholder="Name or Email"
          label={''}
          value={search}
          changeHandler={handleChange}
        />
      </section>

      {search.length > 0 ? (
        <section className={css.search}>
          <h6>3213 results</h6>
          <div className={css.list}>
            {friends.map((f, key) => (
              <FriendPreview key={key} {...f} />
            ))}
          </div>
        </section>
      ) : (
        <section className={css.referring}>
          <h3>Earn XP by referring your friends!</h3>
          {/* DEV : replace with the correct referal link synthax */}
          <CopyLink text="https://wgc.gg/register?affiliate=7874" />
        </section>
      )}

      {/* DEV : removed for now.
        <section className={css.suggestions}></section>*/}
    </main>
  );
}
