import React, { useState } from "react"
import { Link } from "gatsby"
import style from "./valuecalculator.module.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/contentContainer"
import pricingSeo from "../images/pricing.png"

const Pricing = () => {
  const [calc, setCalc] = useState({
    quality: 'duct',
    kiosks: 2,
    users: 3,
    risk: 'high',
    support: true,
    consult: true,
    warrentyCost: true
  });
 
  const pulseCost = () =>{
    let subCost = 500;
    if(calc.kiosks > 2  && calc.kiosks < 20) {
      subCost = 350;
    }
    if(calc.kiosks > 19){
      subCost= 250;
    }
    //5 hours of tech support to setup survey at $15 an hour = $75
    //15 - 30 mins a day for 5 days a week 52 weeks a year of receptionist time to administer/support survey $1690
    //10 hours a year of data anaylsis work to build report $35 * 10 = $350
    return calc.kiosks * subCost;
  }

  const getDevHoursCost = () => {
    let amount = 0;
    if(calc.quality === 'duct'){
      //5 hours of tech support to setup survey at $15 an hour = $75
      //15 - 30 mins a day for 5 days a week 52 weeks a year of receptionist time to administer/support survey $1690
      //10 hours a year of data anaylsis work to build reports in excel $35 * 10 = $350
      //survey monkey cost calc.users * 75,
      return (((75 + 1690 + (35*10)) / 12) + (calc.users * 75) + ((calc.kiosks * 750) / 12)).toFixed(2);
    }
    if(calc.quality === 'diy'){
      console.log('test diy')
      //80 hours of tech support to setup survey at $40 an hour = $2400
      //15 - 30 mins a day for 5 days a week 52 weeks a year of receptionist time to administer/support survey $1690
      // 3 hour meetings to talk about what needs to be built * 5 people 
      //80 hours a year of data anaylsis work to build reports  $50 * 80 = $350
      //
      amount = (((80 * 40) + (3*5*40) + 1690 + (50*80)) / 12) + (calc.users * 75) + ((calc.kiosks * 1000) / 12) + (calc.kiosks * 60);
      return amount.toFixed(2)
    }
    if(calc.quality === 'dev'){
      //12 months of full time work * 4 person team * $100 an hour 
      //full time support 1 hour a month per kiosk at $15 a month

      let devCost = (2087*100*4)/12 + ((calc.kiosks * 1000) / 12) + (15*calc.kiosks);
      return devCost.toFixed(2)
    }
    if(calc.quality ==='pulse'){
      pulseCost();
    }

  }




  return (
    <Layout>
      <SEO
        title="Value Calculator"
        description="Transparent pricing for the Pulse For Good feedback system"
        img={pricingSeo}
      />
      <Container>
        <div className={style.container}>
          <div className={style.calcholder}>
            <h1 className={style.calcHeader}>Value Calculator</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={style.qualitylevel}>
              <h3 >Quality Level</h3>
              <div className={style.valueLevels}>
                {/* Duct Tape */}

                <div className={style.level}>
                  <input
                    className={style.hiddenInput}
                    type="radio"
                    id="control_01"
                    name="quality"
                    value="duct"
                    checked={calc.quality === "duct"}
                    onChange={e => setCalc({...calc, quality: e.target.value})}
                  />
                  <label for="control_01">
                    <h3 className={style.levelheader}>Duct Tape</h3>
                    <div className={style.leveldetail}>
                      Different software pieces loosly held together by duct
                      tape
                    </div>
                    <ul>
                    <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                    </ul>
                  </label>
                </div>

                {/* DIY */}
                <div className={style.level}>
                  <input
                    className={style.hiddenInput}
                    type="radio"
                    id="control_02"
                    name="quality"
                    value="diy"
                    checked={calc.quality === "diy"}
                    onChange={e => setCalc({...calc, quality: e.target.value})}
                  />
                  <label for="control_02">
                    <h3 className={style.levelheader}>DIY</h3>
                    <div className={style.leveldetail}>
                      Different software pieces loosly held together by duct
                      tape
                    </div>
                    <ul>
                    <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                    </ul>
                  </label>
                </div>

                {/* Prof. Tech */}
                <div className={style.level}>
                  <input
                    className={style.hiddenInput}
                    type="radio"
                    id="control_03"
                    name="quality"
                    value="dev"
                    checked={calc.quality === "dev"}
                    onChange={e => setCalc({...calc, quality: e.target.value})}
                  />
                  <label for="control_03">
                    <h3 className={style.levelheader}>Development Team</h3>
                    <div className={style.leveldetail}>
                      Using a professional development team 
                    </div>
                    <ul>
                    <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                    </ul>
                  </label>
                </div>
                {/* Pulse  */}
                <div className={style.level}>
                  <input
                    className={style.hiddenInput}
                    type="radio"
                    id="control_04"
                    name="quality"
                    value="pulse"
                    checked={calc.quality === "pulse"}
                    onChange={e => setCalc({...calc, quality: e.target.value})}
                  />
                  <label for="control_04">
                    <h3 className={style.levelheader}>Pulse</h3>
                    <div className={style.leveldetail}>
                      Different software and hardware loosly held together by
                      duct tape
                    </div>
                    <ul>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                      <li className={style.levellist}>
                        Survey Monkey/Qualtrics + Refurbished Ipads
                      </li>
                    </ul>
                  </label>
                </div>
              </div>
            </div>
           
            <div className={style.moredetails}>
              <br></br>
             
              <div className={style.level}>
                <h3># of Kiosks </h3>
                <div className={style.slidecontainer}>
                <input className={style.locationNumber} value={calc.kiosks} type="number" min="1" max="100" onChange={e => setCalc({...calc, kiosks: e.target.value})}  />
                </div>
                <br></br>
                <h3># of Organization Users </h3>
                <div className={style.slidecontainer}>
                <input className={style.locationNumber} value={calc.users} type="number" min="1" max="100" onChange={e => setCalc({...calc, users: e.target.value})}  />
                
                </div>
              </div>
              
              <div className={style.level}> 
                <h3 className={style.riskHeader}>Organization Risk Tolerance </h3>
                <input
                   className={style.hiddenInput}
                    type="radio"
                    id="low"
                    name="risk"
                    value="low"
                    checked={calc.risk === "low"}
                    onChange={e => setCalc({...calc, risk: e.target.value})}
                  />
                  <label for="low">Low</label>
                   <input
                    className={style.hiddenInput}
                    type="radio"
                    id="medium"
                    name="risk"
                    value="medium"
                    checked={calc.risk === "medium"}
                    onChange={e => setCalc({...calc, risk: e.target.value})}
                  />
                  <label for="medium">Medium</label>
                   <input
                    className={style.hiddenInput}
                    type="radio"
                    id="high"
                    name="risk"
                    value="high"
                    checked={calc.risk === "high"}
                    onChange={e => setCalc({...calc, risk: e.target.value})}
                  />
                  <label for="high">High</label>
              </div>
              <div className={style.level}>
                <h3>Other Details </h3>
               
                <input className={style.hiddenInput} id="support"  type="checkbox"  checked={calc.support} onChange={e => setCalc({...calc, support: e.target.checked})}   />
                <label for="support">Include Support Costs </label>
                <input className={style.hiddenInput} id="survey"  type="checkbox" checked={calc.consult} onChange={e => setCalc({...calc, consult: e.target.checked})}    />
                <label for="survey">Include Survey Consultation Costs </label>
                <input className={style.hiddenInput} id="hardware"  type="checkbox" checked={calc.warrentyCost} onChange={e => setCalc({...calc, warrentyCost: e.target.checked})}    />
                <label for="hardware">Include Hardware Costs </label>
                <br></br>
              </div>
            </div>

            <h2 className={style.h2}>Estimated Costs</h2>
            <div className={style.costs}>
            <div className={style.level}>
              <h3>Estimated Monthly Cost</h3>
              <div className={style.dollarbillsyo}>${getDevHoursCost()}</div>
            </div>
            <div className={style.level}>
              <h3>Estimated Monthly Cost w/ Pulse</h3>
              <div className={style.dollarbillsyo}>${pulseCost()}</div>
            </div>
            <div className={style.level}>
              <h3>Difference</h3>
              <div>
                As an organization with a <span className={style.bad}>high organizational risk</span> tolerance 
                {calc.quality== "duct" ? <span> coubling together a solution with <span className={style.bad}>Duct Tape quality</span> that includes</span> : ''}
                {calc.quality== "diy" ? <span>test</span> : ''}
                {calc.quality== "dev" ? <span>test</span> : ''}
                {calc.quality== "pulse" ? <span>test</span> : ''}
                 <span className={style.yellow}>{calc.kiosks} kiosk</span>, and <span className={style.yellow}>{calc.users} users</span> will save you <span className={style.savedmoney}>$300</span> a month compared to using Pulse.</div>
            </div>
            </div>
         
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Pricing
