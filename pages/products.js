import Link from 'next/link';
import { getSortedList } from '../lib/productData';



export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },
    revalidate: 60
  };
}

function Home({ allData }) {
    return (
      <>
          <h1>List of Products</h1>
          <div className="list-group">
            {allData.map(({ id, name }) => (
              <Link key={id} href={`/products/${id}`}>
                <a className="list-group-item list-group-item-action">{name}</a>
              </Link>
            ))}
          </div>
      </>
    );
}

export default Home;