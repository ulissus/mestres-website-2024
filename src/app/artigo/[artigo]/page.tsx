import Head from 'next/head';

import { IPublication } from '@/@types/interfaces';
import ArticlePage from '../../ArticlePage/ArticlePage';
import { simpleUrl } from '@/utils/masks/link';

const baseURL = 'https://blog.mestresdaweb.io/';




export async function getData(artigo: string) {

  const res = await fetch(`${baseURL}publication?page=2&limit=50`);
  


    if (!res.ok) {
    throw new Error('Erro ao obter dados');
  }

  const zeroArticle = await res.json();
  
   const article = zeroArticle.results.filter(
    (item: IPublication) => simpleUrl(item.title) === artigo,
  )[0];

  if (!article) {
    return null;
  }
 
const {content, ...rest} = article

 const teste = {...rest}

 console.log(article);
 
  return teste
}

interface Props {
  article: IPublication;
}

interface ParamsProps {
  params: { artigo: string };
}

const Tecnologia = async ({ params: { artigo } }: ParamsProps) => {
 const article = await getData(artigo);

  return (
    <>
      {article ? <ArticlePage {...{ article }} /> : null}
    </>
  );
};

export default Tecnologia;
