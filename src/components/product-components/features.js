import React from 'react';
import * as style from './features.module.scss'
import kioskgif from "../../videos/kiosk-animation.mp4"
import kioskstraight from "../../images/kioskstraight.jpg"
import dashboardAnimated from "../../videos/dashboard-animation.mp4"
import userAnimated from "../../videos/user-animation.mp4"
import emailAnimated from "../../videos/weeklyemail-animation.mp4"
import filterAnimated from "../../videos/filter-animations.mp4"

const Features  = () => {

  return (
    <div className={style.container}>
    <div className={style.row}>
      <h1 className={style.headline}>What you get with Pulse</h1>
      <div className={style.featureRow}>
        <div className={style.featureImageLeft}>
        <video alt="Animated survey" className={style.kioskanimation} src={kioskgif} autoPlay loop muted/>
      
      
        </div>
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Physical kiosks installed in your facility</h2>
            We ship you a physical kiosk that is mounted within your building,
            providing your clients a quick, consistent way to leave feedback. No
            more dedicating resources to interviews, paper surveys, and
            spreadsheets.
          </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Online surveys available as well</h2>
            Want to reach even more people, no problem. The Pulse survey can be
            sent out digitally, allowing you to reach clients through email and
            outreach groups.
          </div>
        </div>
      </div>
      <div className={style.featureRow2}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Use the data dashboard to see trends</h2>
            Each survey is automatically consolidated into a data dashboard, which lets you filter and splice the data any way you see fit. You can see trends and anomalies in real time, allowing you to react and respond in a timely manner.
          </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Share your data</h2>
            Sharing your data is a simple as clicking a button. You can print, download, and send, helping you get the data to who needs to see it quickly.
          </div>
        </div>
        <div className={style.featureImageLeft}>
        <video alt="Animated dashboard report" className={style.kioskanimation} src={dashboardAnimated} autoPlay loop muted/>
        
        </div>
      </div>
      </div>
{/* 
Row 2 */}
<div className={style.row}>
     
      <div className={style.featureRow}>
        <div className={style.featureImageLeft}>
        <video alt="Animated email report" className={style.kioskanimation} src={emailAnimated} autoPlay loop muted/>
        </div>
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Weekly Emails to key stakeholders</h2>
            Every user with a login to your Pulse dashboard will receive a weekly summary of the week's previous activities. This includes the number of responses, the rankings, increase or decrease from previous week, and a sampling of free text responses. This provides an easy way to keep your finger on the pulse of your organization.
          </div>
          
        </div>
      </div>
      <div className={style.featureRow2}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Dashboard access control</h2>
            You have complete control over who has access to your data dashboard. You can invite as many new users as you want, giving them access to see, filter, and export the data themselves.           </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Aggregated view</h2>
            Pulse is designed to be installed in single locations and multiple locations within a single organization. If you have multiple Pulse kiosks you will be able to see scores and data for all your kiosks from a single page.          </div>
        </div>
       
        <div className={style.featureImageLeft}>
        <video alt="Animated display of report filtering" className={style.kioskanimation} src={filterAnimated} autoPlay loop muted/>
        </div>
      </div>
      </div>
{/* Row 3 */}
<div className={style.row}>
     
      <div className={style.featureRow}>
        <div className={style.featureImageLeft}>
        <video alt="Animated display of someone using the kiosk" className={style.kioskanimation} src={userAnimated} autoPlay loop muted/>
        </div>
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Secure Kiosks</h2>
            Our standard kiosk enclosure is designed for secure wall or surface mounted installation. Formed steel and aluminum with rivets for added structural integrity creates a slim-line surface and a security enclosure with added room for power routing.
          </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Low maintenance</h2>
            Each kiosk comes with installation guide, setup, and 4G connectivity to ensure that your kiosk is up an running easily and continuous to run without much interaction from you. Our goal is to take away the hassle of gathering feedback and allow you to focus on responding to the data.
          </div>
        </div>
      </div>
      <div className={style.featureRow2}>
        
        <div className={style.featureDetails}>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Mobile Access</h2>
            The data dashboard can be viewed from any mobile device, allowing you to share and access your data anywhere.           </div>
          <div className={style.detailRow}>
            <h2 className={style.featureHeader}>Warranty</h2>
            If anything happens to your kiosk we will work with you to get it back up and running. If the kiosk needs to be replace, you simply pay a $100 deductible and we will replace everything.          </div>
        </div>
        <div className={style.featureImageLeft}>
        <img alt="kiosk"  className={style.featurePic} src={kioskstraight}/>
        </div>
      </div>
      </div>
    </div>);
};
export default Features