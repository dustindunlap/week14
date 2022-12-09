import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { getSortedList } from '../lib/data';



export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },
    revalidate: 60
  }
}

export default function Home(){
    return(<>
      <h1>Post types</h1>
      <div className="list-group">
      <Link href={'/contacts'}>
      <a className="list-group-item list-group-item-action">Contacts</a>
      </Link>
      <Link href={'/products'}>
      <a className="list-group-item list-group-item-action">Products</a>
      </Link>
      <Link href={'/thirds'}>
      <a className="list-group-item list-group-item-action">Thirds</a>
      </Link>
      </div>
    </>
  );
}
/*export default function Home({ allData }) {
  return (
    <>
        <h1>List of Names</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
    </>
  );
}*/
