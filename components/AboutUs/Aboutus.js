import Image from "next/image";
import EnvImg from "/public/environment.png"
import React from "react";
import styles from "./Aboutus.module.css"
import Link from "next/link";
import palakmam from "/public/images/aboutus/palakmam.jpg"
import tyagi from "/public/images/aboutus/tyagi.jpg"
import kish from "/public/images/aboutus/kish.jpg"
import sri from "/public/images/aboutus/sri.jpg"
import amish from "/public/images/aboutus/amisha.jpg"
import vs from "/public/images/aboutus/vs.jpg"
import priya from "/public/images/aboutus/priya.jpg"
import va from "/public/images/aboutus/va.jpg"
import mohit from "/public/images/aboutus/mohit.jpg"
// import mohit from "/public/images/aboutus/mohi.jpg"


import { FaLinkedin } from "react-icons/fa"

function Aboutus(){
   return(
       <>
          <div className={styles.page}>
            {/* <nav className={styles.nav}>
                <div className={styles.navbar}>
                <Link href="/" passHref>
                <span className={styles.navbar}>Logo</span>
                </Link>
                <Link href="/" passHref>
                <span className={styles.home}>HOME</span>
                </Link>
                    
                </div>
                <div className={styles.signup}>
                    <button className={styles.btn} type="submit">SignUp</button>
                </div>
            </nav> */}
            <div className={styles.container}>
              <div className={styles.grid1}>
                <div className={styles.content1}>
                <Image className={styles.image} alt="" src={EnvImg} />
                </div>
                <div className={styles.content2}>
                   <div className={styles.text}>
                    <h1 className={styles.color} >
                    
                        <u>
                        OUR MISSION</u></h1>
                       
                    <ul >
                    <div className={styles.gap1}>
                    
<span className={styles.color} ><b>
&#9733; How  can everyone contribute in conserving our environment without wasting time and money??</b></span></div>
<li className={styles.gap1}type="square"> No need to worry our app will do it for you &nbsp; <b>&#8658;</b></li>
<li className={styles.gap1}>
Ambition for creating this app is to make people aware about our precious environment and the ways to reduce <b>CARBON FOOTPRINT </b>.</li>
<li className={styles.gap2}>
Let users know about the various eco-friendly alternatives and easy access to those alternatives.</li>
<li className={styles.gap2}>
Easier for startups to access the materials required  and will help them scale up their business at a faster rate.</li>
<li className={styles.gap2}>
Informing people about incentives taken by different companies and this will advertise environmentally sustainable products.</li>
<li className={styles.gap2}>
Will introduce a sense of support and appreciation to those working to reduce the impact of human usage on the environment.</li>
</ul>
                 </div>
                </div>
              </div>
            <div className={styles.grid2}>
                <div className={styles.block1}>
                    <h1>Who We Are?</h1>
                </div>
                <div className={styles.block2}>
                    <div className={styles.item}>
                        <p>We all are the team members of <b>Google Developer Student Club</b> at <b> NIT PATNA</b>.
To see the current scenario of our eco-system we collectively thought to build a user friendly app which can help people to contribute in protecting our environment.
All of our team members are following our academics also making awesome real life problem solving projects.
</p>
                       <Link href="/Feedback">                         
                       <button className={styles.buttn} type="submit" >Contact Us</button>
                       </Link>
                     </div>
                </div>
            </div>
            <div className={styles.grid3}>
                <h1  className={`${styles.c1} ${styles.h1}`}>MEET OUR TEAM</h1>
                <div className={styles.row1}>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={palakmam} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Palak Kumari(Team leader)</h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={tyagi} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Shivam Tyagi</h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={kish} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Kishan Kumar</h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={sri} />
                        <div className={styles.about}>
                            <h3  className={styles.c1}>Srijan Shovit</h3>

                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={tyagi} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Shivam Tyagi</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={amish} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Amisha Bharti</h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={vs} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Vivek Srivastava</h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={priya} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Priya Kumari</h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={va} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Vivek Ankit </h3>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <Image className={styles.img1} alt="" src={mohit} />
                        <div className={styles.about}>
                        <h3  className={styles.c1}>Mohit </h3>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>

       </>
   )
}
 
export default Aboutus;