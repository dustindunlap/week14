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
        <h5 className="card-title">{itemData.post_title}</h5>
        <p className="card-text">{itemData.acf_fields}</p>
      </div>
    </article>
  );
}