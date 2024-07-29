'use client';

import styled from 'styled-components';

export const ArticleMain = styled.div`
  &.article {
    width: 100%;
    max-width: 1200px;

    margin: 0 auto;
    padding: 5em 15px;

    .main-section {
      .main-section__title {
        font-size: 2.5rem;
      }

      .main-section__author-row {
        padding: 15px 0;

        border-bottom: 1px solid var(--gray);
      }

      .author__data {
        color: var(--black) !important;
      }

      .main-section__breadcrumb {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 3px;
        padding: 15px 5px 0;

        color: var(--black);
      }

      .main-section__share-social {
        margin-left: auto;

        padding: 5px 15px 0;
      }

      .main-section__cover-wrapper {
        position: relative;

        width: 100%;
        max-width: 1300px;
        height: 500px;

        margin: 3em 0;

        border-radius: 20px;
        overflow: hidden;

        @media (max-width: 1250px) {
          width: 100%;
          margin: 3em 0;

          transform: unset;
        }

        &:hover {
          .main-section__cover {
            img {
              transform: scale(1.4);
            }
          }
        }
      }

      .main-section__cover {
        transform: scale(1.3);
        position: absolute;
        inset: 0;

        margin: 0 auto;

        transition: all 0.3s ease-out;

        object-fit: cover;
      }

      .main-section__article-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        width: 100%;
      }

      .main-section__summary {
        display: flex;
        flex-direction: column;
        gap: px;

        padding: 15px;
        margin: -15px 0 30px !important;

        color: var(--purple85);

        border-radius: 15px;
        border: 2px double var(--purple85);

        background-color: #fafafb;

        ul {
          margin: 0 !important;
        }

        li {
          padding: 3px 0;
          cursor: pointer;
        }
      }

      .main-section__summary-title {
        font-size: 1.3rem;
        font-weight: bold;
        padding: 5px 0;
      }

      .main-section__article {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 15px 0;

        width: 100%;
        max-width: 795px;

        font-family: var(--roboto);
        line-height: 1.3rem;
        font-size: 1.1rem;

        ul {
          list-style: disc !important;
          margin-left: 30px;
        }

        ol {
          list-style: decimal;
          margin-left: 30px;
        }

        h2 {
          font-weight: bold;
          font-size: 1.5rem;
        }

        h3 {
          font-weight: bold;
          font-size: 1.2rem;
        }

        a {
          color: #673ab7 !important;
          text-decoration: underline;
        }

        strong {
          font-weight: 700;
        }

        img {
          width: 100%;
          height: auto;
          margin: 0 auto;
        }

        .ql-tooltip {
          display: none;
        }
      }

      .main-section__column {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 50px 15px;

        width: 100%;
        height: fit-content;

        padding-bottom: 2em;

        @media (min-width: 1220px) {
          max-width: 360px;
        }
      }

      .main-section__bottom-row {
        display: flex;
        gap: 15px;

        padding: 15px 0;

        border-bottom: 1px solid var(--gray);
      }

      .main-section__category {
        margin-left: auto;
        b {
          font-weight: bold;
        }

        @media (max-width: 568px) {
          display: none;
        }
      }

      .main-section__social-media {
      }
    }

    .author-section {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      width: 100%;
      max-width: 765px;

      padding: 3em 0;

      .author-section__author-picture {
        border-radius: 50%;
      }

      .author-section__bio {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .author-section__small {
          color: var(--gray52);
        }

        .author-section__name {
          font-size: 1.5rem;
        }

        .author-section__desc {
          color: var(--gray52);
          max-width: 350px;
        }
      }
    }
  }
`;

export const Newsletter = styled.div`
  &.newsletter {
    width: 100%;
    .newslettercard {
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 15px;

      width: 100%;
      min-height: 450px;

      padding: 0 15px 30px 15px;

      color: var(--light);
      font-size: 1.6rem;
      font-weight: bold;

      border-radius: 20px;

      span {
        display: inline-flex;
        flex-direction: column;
        gap: 10px;

        color: #fff2d4;
        font-size: 2.5rem;
        text-transform: uppercase;
        b {
          font-size: 1.2rem;
          text-transform: lowercase;
          letter-spacing: 3px;
        }
      }

      small {
        display: inline-flex;
        gap: 15px;
        color: #fff2d4;
        margin: 20px 0 15px;

        b {
          font-size: 1rem;
        }
      }

      background: linear-gradient(
          to bottom,
          transparent,
          rgb(78 73 73/ 40%) 40%,
          rgb(38 110 100/ 80%) 75%
        ),
        url(/assets/img/treinamento_mestres_vert.webp);
      background-size: cover;
      background-position: center;

      .newsletter-input__subscribe {
        max-width: 480px;
      }

      &:hover {
        &:before {
          top: 5px;
        }
      }
    }

    .newsletter-input {
    }

    .newsletter-input__subscribe {
      gap: 2px;
      flex-wrap: nowrap;

      @media (max-width: 380px) {
        flex-wrap: wrap;
      }
    }
  }
`;

export const DownloadEbook = styled.a`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  .download-ebook__title {
    color: #44444f;
    font-family: var(--noto);
    font-size: 1.3rem;
    font-weight: bold;
  }

  .download-ebook__card {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;

    width: 100%;
    min-height: 450px;

    padding: 15px 15px 30px 15px;

    color: var(--light);
    font-size: 1.6rem;
    font-weight: bold;

    border-radius: 20px;

    span {
      display: inline-flex;
      flex-direction: column;
      gap: 10px;

      color: #fff2d4;
      color: var(--green);
      font-size: 2rem;
      text-transform: uppercase;
      text-align: center;
    }

    b {
      margin-top: auto;
      font-weight: bold;
      text-align: center;
    }

    background: url(/assets/img/capa-ebook.webp), linear-gradient(#000, #000);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
