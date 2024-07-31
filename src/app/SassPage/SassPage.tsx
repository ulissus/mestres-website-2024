'use client';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import dynamic from 'next/dynamic';

import parse from 'html-react-parser';
import styles from './SassPage.module.scss';


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


import { IPublication } from '@/@types/interfaces';
import { base64Image } from '@/utils/base64';



const SassPage = ({ article }: Props) => {



return <div className={styles.article}>
        <section className={styles.main_section}>
          <h1 className={styles.main_section__title}>{article.title}</h1>

          <div className={styles.main_section__author_row}>
            <div className={styles.main_section__social_media}></div>
          </div>

          <div className={styles.main_section__breadcrumb}>
            <Link href="/">home</Link>
            <span>/</span>
            <Link href="/blog">blog</Link>
            <span>/</span>
            <Link
              href={`/blog/categoria/aplicativos/${article?.category.name.toLowerCase()}`}
            >
              {article.category.name.toLowerCase()}
              
            </Link>
            <span>/</span>
            <span>{article.title}</span>

          </div>

 
            <div className={styles.main_section__cover_wrapper}>
              <Image
                className={styles.main_section__cover}
                placeholder="blur"
                blurDataURL={base64Image}
                src={article.cover}
                alt={article.title}
                fill
                priority={true}
              />
            </div>


          <div className={styles.main_section__article_wrapper}>
            <article className={styles.main_section__article} >



              {article.content ? parse(article?.content) : <h1>nao encontrado</h1>}

              <div className={styles.main_section__bottom_row}>

                <div className={styles.main_section__category}>
                  <b>Categoria: </b>
                  {article?.category.name}
                </div>
              </div>
            </article>

            <div className={styles.main_section__column}>

              <a className={styles.download}
                href="/assets/files/Ferramentas_Imperdiveis_para_Devs.pdf"
                download
              >
                <h2 className={styles.download__title}>
                  Acelere o desenvolvimento de Software com o poder das
                  Inteligências Artificiais!
                </h2>

                <div className={styles.download__card}>
                  <span>Download Gratuito</span>

                  <b>Ebook para Devs</b>
                </div>
              </a>


            </div>
          </div>
        </section>

        <section className={styles.author_section}>
          <Image
            className={styles.author_section__author_picture}
            src={'/assets/img/author.webp'}
            alt={article?.user.name}
            width={168}
            height={168}
            loading="lazy"
            placeholder="blur"
            blurDataURL={base64Image}
          />

          <div className={styles.author_section__bio}>
            <span className={styles.author_section__small}>Artigo de</span>

            <span className={styles.author_section__name}>Fernando Cunha</span>

            <span className={styles.author_section__desc}>Com mais de 15 anos de experiência em tecnologia e formado pela FAAP em Administração de empresas, hoje é o CEO da Mestres da Web, empresa referência no mercado nacional e com projeções de expansão internacional.</span>
          </div>
        </section>
</div>
};

export default SassPage;
