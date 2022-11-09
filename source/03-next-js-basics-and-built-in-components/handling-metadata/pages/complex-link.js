import Link from 'next/link';

export default function ComplexLink() {
  return (
    <div>
      <h1>Complex Link</h1>
      <Link
        href={{
          pathname: '/blog/[date]/[slug]/other/[some-shit]',
          query: {
            date: '2020-01-01',
            slug: 'happy-new-year',
            foo: 'bar',
            'some-shit': 'detroyer-2000',
          },
        }}
      >
        Read post
      </Link>
    </div>
  );
}
