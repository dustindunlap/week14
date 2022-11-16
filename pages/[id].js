import Head from 'next/head';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <article className="card col-6 text-dark">
      <div className="card-body">
        <h5 className="card-title">{itemData.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
        <p className="card-text">{itemData.birthdate}</p>
        <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
      </div>
    </article>
  );
}