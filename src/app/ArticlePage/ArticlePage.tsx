'use client';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import dynamic from 'next/dynamic';





interface Props {
  article: IPublication;
}

interface Video {
  videoId: string;
}

interface Audio {
  link: string;
}

import Link from 'next/link';

import { ArticleMain, DownloadEbook, Newsletter } from './_articlePage';
import { IPublication } from '@/@types/interfaces';
import { base64Image } from '@/utils/base64';



const ArticlePage = ({ article }: Props) => {



  return (
    <>

      <ArticleMain className="article">
        <section className="main-section">
          <h1 className="main-section__title">{article?.title}</h1>

          <div className="main-section__author-row">
            <div className="main-section__social-media"></div>
          </div>

          <div className="main-section__breadcrumb">
            <Link href="/">home</Link>
            <span>/</span>
            <Link href="/blog">blog</Link>
            <span>/</span>
            <Link
              href={`/blog/categoria/${article?.category.name.toLowerCase()}`}
            >
              {article.category.name.toLowerCase()}
            </Link>
            <span>/</span>
            <span>{article?.title}</span>

          </div>

 
            <div className="main-section__cover-wrapper">
              <Image
                className="main-section__cover "
                placeholder="blur"
                blurDataURL={base64Image}
                src={article.cover}
                alt={article.title}
                fill
                priority={true}
              />
            </div>


          <div className="main-section__article-wrapper">
            <article className="main-section__article" >

              {/* {require('html-react-parser')(article?.content)} */}

              <div className="main-section__bottom-row">

                <div className="main-section__category">
                  <b>Categoria: </b>
                  {article?.category.name}
                </div>
              </div>
            </article>

            <div className="main-section__column">

              <DownloadEbook
                href="/assets/files/Ferramentas_Imperdiveis_para_Devs.pdf"
                download
              >
                <h2 className="download-ebook__title">
                  Acelere o desenvolvimento de Software com o poder das
                  Inteligências Artificiais!
                </h2>

                <div className="download-ebook__card">
                  <span>Download Gratuito</span>

                  <b>Ebook para Devs</b>
                </div>
              </DownloadEbook>


            </div>
          </div>
        </section>

        <section className="author-section">
          <Image
            className="author-section__author-picture"
            src={'/assets/img/author.webp'}
            alt={article?.user.name}
            width={168}
            height={168}
            loading="lazy"
            placeholder="blur"
            blurDataURL={base64Image}
          />

          <div className="author-section__bio">
            <span className="author-section__small">Artigo de</span>

            <span className="author-section__name">{article?.user.name}</span>

            <span className="author-section__desc">{article?.user.bio}</span>
          </div>
        </section>
      </ArticleMain>

    </>
  );
};

export default ArticlePage;
