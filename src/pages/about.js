import React from 'react';
import style from './about.module.scss';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/contentContainer";
import blake from "../images/blakegray.jpg"
import wes from "../images/wes.jpg"
import marc from "../images/marc.jpg"
import rem from "../images/rem.jpg"
import ty from "../images/ty.jpg"
import travis from "../images/travis.jpg"
import { Link } from "gatsby"
//Advisors
import mark from "../images/advisors/mark.jpg"
import iain from "../images/advisors/iain.jpg"
import tamera from "../images/advisors/tamera.jpg"
import kat from "../images/advisors/kathryn.jpg"
import amy from "../images/advisors/amy.jpg"
import fargo from "../images/advisors/jamison.jpg"
import michele from "../images/advisors/michelle.jpg"
import mattthomas from "../images/advisors/matt.jpg"
import mitchell from "../images/advisors/mitchell.jpg"
import jim from "../images/advisors/jim.jpg"
import stacy from "../images/advisors/stacy.jpg";
import stacey from "../images/advisors/stacey.jpg";
import wheels from "../images/feedbackFromWheelChair.jpg"
import map from "../images/map.png"


const About  = () => {
    const leaders =[{
        name: "Blake Kohler",
        title: "Co-Founder & CEO",
        img: blake,
    },
    {
        name: "Wesley Meacham",
        title: "Co-Founder & Design",
        img: wes,

    },
    {
        name: "Travis Marble",
        title: "Co-Founder & Development",
        img: travis,

    },
    {
        name: "Remington Rainey",
        title: "Co-Founder & CRO",
        img: rem,

    },
    {
        name: "Tyrell Fenn",
        title: "Co-Founder & Design",
        img: ty,

    } ,
    {
        name: "Marc Weaver",
        title: "Co-Founder & CFO",
        img: marc,
    }];

    const advisors =[{
        name: "Mark Johnston",
        title: "National Homeless Expert",
        img: mark,
    },
    {
        name: "Kathryn Monet",
        title: "Veteran Homeless Expert",
        img: kat,

    },
    {
        name: "Stacy Lloyd",
        title: "Patient Experience Expert",
        img: stacy,

    },
    {
        name: "Iain De Jong",
        title: "National Homeless Expert",
        img: iain,

    },
   
    {
        name: "Amy Daeschel",
        title: "Homeless Advocate",
        img: amy,

    },
    {
        name: "Dr. Jamison Fargo",
        title: "Dean for Research",
        img: fargo,

    } ,
    {
        name: "Tamera Kohler",
        title: "National Homeless Expert",
        img: tamera,
    },
    {
        name: "Mitchell Colver",
        title: "Student Analytics  Expert",
        img: mitchell,
    },
    {
        name: "Matt Thomas",
        title: "COO/CFO Centeva",
        img: mattthomas,
    },
    {
        name: "Michele S. Williams",
        title: "National Homeless Expert",
        img: michele,
    },
    {
        name: "Colonel Jim D. McDonough",
        title: "National Veterans Expert",
        img: jim,
    },
    {
        name: "Stacey Tinianov",
        title: "Patient Experience Expert",
        img: stacey,
    },
];


  return (
<Layout>
<SEO title="About Us" description="Learn about the people and ideas behind Pulse For Good" img={wheels}/>
<Container>
<div className={style.container}>
<h1 className={style.missionHeader}>Our Mission</h1>
<h2 className={style.missionSub}>Improve the world's most important organizations</h2>
<p className={style.missionText}>
Our mission at Pulse is to provide data to decision makers that empowers them to make the best choices they can for the people they serve. We believe that decisions backed by accurate, quality, and timely data will make services better for customers. We also believe that everyone, no matter their situation in life, deserves to have their voice heard and feel like they are being listened to. We hold true the words of twentieth-century philosopher Paul Tillich when he said, “The first duty of love is to listen.” We add that the second duty of love is to act. We strive to help organizations listen, act, and love.</p>
<h1>Meet our team</h1>
<div className={style.leadershipHolder}>
{ leaders.map(l => {
    return (<div className={style.leader} key={l.name}>
        <img alt={l.name} className={style.leaderImg} src={l.img} />
        <div className={style.leaderName}>{l.name}</div>
        <div className={style.leaderTitle}>{l.title}</div>
        </div>)

})}

</div>
<h1>Advisory Board</h1>
<div className={style.advisoryHolder}>
{ advisors.map(l => {
    return (<div className={style.leader} key={l.name}>
        <img alt={l.name} className={style.leaderImg} src={l.img} />
        <div className={style.leaderName}>{l.name}</div>
        <div className={style.leaderTitle}>{l.title}</div>
        </div>)

})}

</div>
<h1 className={style.impactHeader}>Impact</h1>
<div className={style.impactHolder}>
    <div className={style.left}>
    <img alt="wheels" src={wheels}/>
    </div>
    <div className={style.right}>
    <p>
    Pulse is devoted to helping vulnerable communities by supporting those that serve them. We provide a safe place for individuals to share feedback regarding the assistance they receive without fear of retribution. We strongly believe in maintaining the anonymity of the individual.
    </p><p>
While our solution is flexible and adaptable enough to fit into any market, we chose to focus on vulnerable populations because we feel this is a segment of the population that is often ignored. We believe everyone deserves to be treated with respect and to have their opinions heard and considered.
</p><p>
As part of our mission, we also ensure we have a secondary impact on top of the services rendered by our feedback system. For every survey response, we make a small monetary donation. We donate to organizations such as invisiblepeople.tv and other organizations that also are striving to help individuals have their voice heard.
</p></div>
</div>
<h1>Locations</h1>
<h3 className={style.befirst}>No locations in your state yet?  <Link className={style.demo} to="/demo">Be the first!</Link></h3>
<img alt="Pulse Map" src={map} />



</div>

</Container>
</Layout>


  )
};
export default About