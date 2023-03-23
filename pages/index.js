import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ReachingOut Family Homes</title>
        <meta name="description" content="ReachingOut Family Homes" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
      </Head>
      <Navbar />

      <main>
        <section className={styles.heroBox}>
          <div className={`${styles["heroCard"]} ${"card"}`}>
            <img className={styles.heroLogo} src="/img/logo.jpg"></img>
            <h1>Dedicated to the Needs of Children</h1>
            <div className={`${"row"} ${styles["heroBtnRow"]}`}>
              <div className={`${"col-sm"}`}>
                <a href="#about"><button className={`${"btn btn-primary"}  ${styles["heroBtn"]}`}>About</button></a>
              </div>
              <div className={`${"col-sm"}`}>
                <a href="#contact"><button className={`${"btn btn-primary"}  ${styles["heroBtn"]}`}>Contact Us</button></a>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT REACHNINGOUT*/}
        <section className="container" id="about">
          <div className={`${styles["aboutUs"]} ${"row"}`}>
            <div className={`${styles["aboutCopy"]} ${"col-sm-6"}`}>
            
              <h1>About Reaching Out</h1>
                <p>
                Reachingout Family Homes is an inter-denominational community based Special Treatment Foster Care organization.   Our purpose is to provide care for Special Needs Children –  children having emotional, behavioural, physical, medical and developmental handicaps.
                </p>
                <p>
                RFH opened its’ doors for business on May 4, 1989.  We are licensed by the Ministry of Children and Youth Services.  RFH receives referrals from the various Children’s Aid Societies in Central, South Eastern and Northern Ontario.
                </p>
               
            </div>
            <div className={`${"col-sm-6"} ${"card"} ${styles["ourPhilosophy"]}`}>

              <div className={styles.ourPhilosophyCopy}>
                <h1>Our Philosophy</h1>
                <p>Reachingout’s philosophy is to provide the least restrictive alternative to the child’s natural family and where possible, the objective will be to sustain ongoing natural family involvement in liaison with the placing agency.</p>
                <p>RFH is staffed by 15 professional staff with varied backgrounds in social work, psychology and extensive experience in the Child Care field.</p>
                <p>We offer regular visits to the home to provide support to the entire foster family.  We are also on call 24 hours a day, 7 days a week to provide support for any situation that may arise.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.support}>
          <div className={`${"container"} ${styles["support"]}`}>
            <h1>How We Support Families</h1>
              <div className="row">
             
                <div className="col-sm-4">
                  <div className={`${styles["fosterCategoriesCard"]} ${"card"}`}>
                    <div className={styles.fosterCategoriesCopy}>
                      <img className={styles.homeImg} src="../img/home.png"></img>
                <p>Reachingout offers three categories of foster homes:</p>
                <ul>
                  <li>Specialized Foster Care</li>
                  <li>Treatment Foster Care</li>
                  <li>Mixed Modality Foster Care</li>
                </ul>
                <p>Each category provides services to its individual client group.</p>
                </div>
                </div>
                </div>
                <div className="col-sm-8">
              <div className={`${styles["services"]} ${"card"}`}>
              
                <div className={styles.servicesCopy}>
                <h1>Who We Work With</h1>
              <p>Reachingout Family Homes is a specialized parent model program for emotionally disturbed and developmentally/multihandicapped children. Reachingout will provide assessments and treatment in a family environment on either a short term or long term basis. The diagnostic service group being identified is within the following categories:</p>
                <div className={`${"row"} ${styles["iconRow"]}`}>
                    <div className={`${"col-sm-12"} ${styles["rowItem"]}`}>Emotional and behavioural disturbances</div>
                    <div className={`${"col-sm-12"} ${styles["rowItem"]}`}>Developmentally handicapped</div>
                    <div className={`${"col-sm-12"} ${styles["rowItem"]}`}>Physically handicapped</div>
                    <div className={`${"col-sm-12"} ${styles["rowItem"]}`}>Medically Fragile</div>

                </div>
               
                <p>Reachingout Family Homes will combine the extensive and varied professional expertise of a Social Work and a CYW staff. A consulting Psychologist and individual therapy is available in the community on a supplementary basis.</p>
                </div>
                </div>
                </div>
              </div>

              </div>
                
        </section>
        <section>
        <div className={`${"container"} ${styles["mixedModalityCopy"]}`}>
                  <h1>Mixed Modality Program</h1>
                  <p>The goal of Reachingout Family Homes is to provide four treatment beds in each mixed modality home.  These beds are for children with emotional/behavioural disturbances and/or high medical needs.</p>
                  <p>The Mixed Modality program will operate with one full time Social Work staff that will oversee the running of the program. The support team will consist of a full time Child and Youth Worker who will be available to the home for forty hours per week – the time frame to be determined between the CYW and the Treatment Home parents.</p>
          </div>

        </section>

        <section id="contact">
         <div className={`${"container"} ${styles["contactContainer"]}`}>

         

              <form action="https://formspree.io/f/mnqrpoqk" method="POST"  className={`${"card"} ${styles["contactCopy"]}`}>
                <h1>Contact Us</h1>
             
                <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group"><label className="form-label">Email Address *</label><input required name="email" placeholder="Email" type="email" className="form-control" /><small className="text-muted form-text">We will never share your email with anyone else.</small></div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group"><label className="form-label">Phone *</label><input required name="name" placeholder="Phone" type="tel" className="form-control" /></div>
                    </div>
                </div>
                <div className="form-group"><label className="form-label">Message *</label><textarea required name="message" rows="3" id="exampleForm.ControlTextarea1" className="form-control"></textarea></div>
                <button type="submit" className="btn btn-primary">Submit</button><input type="hidden" name="_template" value="box" />
              </form>
              </div>
        </section>       
             
      </main>
      <Footer/>


    </div>
  )
}

