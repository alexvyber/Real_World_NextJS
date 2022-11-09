import { useRouter } from 'next/router';

export default function Query({ props }) {
  const { query } = useRouter();
  const { term, number } = query;

  return (
    <div>
      <h3>Term: {term}</h3>
      <h3>Number: {number}</h3>
    </div>
  );
}

// export async function getStaticProps(ctx) {
//   console.log(ctx)

//   return {
//     props: {
//       // query: ctx.params.query,
//       data: "'"
//     }
//   }
// }
