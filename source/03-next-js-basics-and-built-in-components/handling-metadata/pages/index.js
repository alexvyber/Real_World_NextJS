import Head from 'next/head';
import Link from 'next/link';
import Widget from '../components/Widget';

function IndexPage() {
  return (
    <>
      <Head>
        <title> Welcome to my Next.js website </title>
      </Head>
      <div>
        <Link href="/about" passHref>
          <a>About us</a>
        </Link>
      </div>
      <div>
        <Widget pageName="index" />
      </div>
      <div>
        <Link href="/redirect" passHref>
          <a>Back to the Future</a>
        </Link>
      </div>
    </>
  );
}

export default IndexPage;
