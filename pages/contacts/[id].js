import Head from 'next/head';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    },
    revalidate: 60
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
        <h5 className="card-title" dangerouslySetInnerHTML={{__html: itemData.post_title}}/>
        <p className="card-text"dangerouslySetInnerHTML={{__html: itemData.acf_fields}}/>
      </div>
    </article>
  );
}