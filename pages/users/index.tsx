import PageTitle from '@/components/content/PageTitle';
import css from './UsersPages.module.scss';
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

  // DEV : use user's unique ID instead.
  const slugify = (input: string) => {
    if (!input) return '';

    // make lower case and trim
    var slug = input.toLowerCase().trim();

    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
  };

  // DEV : Static Data
  const friends: UserPreviewProps[] = dummyLeaderboard.map((user) => ({
    name: `${user.name} ${user.flag}`,
    img: user.img,
    url: `/users/${slugify(user.name)}`,
    notFollowed: true,
    pending: Math.random() < 0.5,
  }));

  return (
    <main className={css.page}>
      <PageTitle title="Find other players" returnBtn />

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
