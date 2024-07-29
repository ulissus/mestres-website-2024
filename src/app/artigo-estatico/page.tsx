'use-client'
import Image from 'next/image'
import Link from 'next/link'
import { ArticleMain, DownloadEbook } from './_StaticPage'
import { base64Image } from '@/utils/base64';


 const StaticPage = () => {
    return (
        <>
      <ArticleMain className="article">
        <section className="main-section">
          <h1 className="main-section__title">Afinal, o que é Criação de Protótipo?</h1>

          <div className="main-section__author-row">
            <div className="main-section__social-media"></div>
          </div>

          <div className="main-section__breadcrumb">
            <Link href="/">home</Link>
            <span>/</span>
            <Link href="/blog">blog</Link>
            <span>/</span>
            <Link
              href={`/blog/categoria/aplicativos`}
            >
              aplicativos
            </Link>
            <span>/</span>
            <span>Afinal, o que é Criação de Protótipo?</span>

          </div>

 
            <div className="main-section__cover-wrapper">
              <Image
                className="main-section__cover "
                placeholder="blur"
                blurDataURL={base64Image}
                src={'https://blog.mestresdaweb.io/files/151afc43f68608296f4c-mestres.png'}
                alt='Afinal, o que é Criação de Protótipo?'
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
                  Aplicativos
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
            alt={'Fernando'}
            width={168}
            height={168}
            loading="lazy"
            placeholder="blur"
            blurDataURL={base64Image}
          />

          <div className="author-section__bio">
            <span className="author-section__small">Artigo de</span>

            <span className="author-section__name">Fernando Cunha</span>

            <span className="author-section__desc">Com mais de 15 anos de experiência em tecnologia e formado pela FAAP em Administração de empresas, hoje é o CEO da Mestres da Web, empresa referência no mercado nacional e com projeções de expansão internacional.</span>
          </div>
        </section>
      </ArticleMain>
        </>
    );
};

export default StaticPage