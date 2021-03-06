import type { FC } from "react";
import Head from "next/head";
interface IProps {
  title: string
}
export const Header:FC<IProps> = function({title}){
    return (
    <Head>
        <title>{title} | rexulec.</title>
        <meta name="description" content="I'm a full stack developer with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares." />
        <link rel="icon" href="/icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="title" content="ReXulEc"/>
        <meta name="description" content="I'm a full stack developer with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://rexulec.com"/>
        <meta property="og:title" content="rexulec | mert doğu"/>
        <meta property="og:description" content="I'm a full stack developer with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."/>
        <meta property="og:image" content="https://rexulec.com/icon.png"/>
        <meta property="theme-color" content="#d6cdf9"/>

        <meta property="twitter:url" content="https://rexulec.com"/>
        <meta property="twitter:title" content="rexulec.com"/>
        <meta property="twitter:description" content="I'm a full stack developer with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."/>
        <meta property="twitter:image" content="https://rexulec.com/icon.png"/>
        <meta property="twitter:domain" content="rexulec.com"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      </Head>
    );
};
