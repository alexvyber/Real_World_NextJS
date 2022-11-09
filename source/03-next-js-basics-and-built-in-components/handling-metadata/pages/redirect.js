import { useRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();
  if (Math.random() > 0.5) {
    router.push('/about');
  } else {
    router.push({
      pathname: '/blog/[date]/[slug]',
      query: {
        date: '2021-01-01',
        slug: 'happy-new-year',
        foo: 'bar',
      },
    });
  }

  return null;
}
