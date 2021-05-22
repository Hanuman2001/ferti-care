import React,{Fragment} from 'react'
import "./dashboard.css"
import {logout} from './actions/actions'
import {connect} from 'react-redux'
const Dashboard = ({logout}) => {
    return (
<Fragment>
        <div id="topnavbar">
        <div>
          <p>Call-now:6468444464744</p>
        </div>
        <div>
          <img src="https://i.dlpng.com/static/png/6724083_preview.png" alt="" />
        </div>
      </div>
      <nav>
        <div>
          <h2>Ferticare</h2>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Fertility Doctors</li>
            <li>Our Services</li>
            <li>Knowledge Center</li>
            <li>Contact Us</li>
            <li> <a href="/" onClick={logout}>Log out</a>  </li>
          </ul>
        </div>
      </nav>
  
      <section class="upper-container">
        <h2>Find Fertility Treatment best suited for you</h2>
        <p>IUI,IVF,ICSI,Medcication</p>
  
        <h4>Start Your Treatment Journey</h4>
        <div class="upper-middle-container">
          <div class="middle-container">
            <div>
              <p>What treatment are You Looking for ?</p>
              <div class="checkboxes">
                <div class="check-box">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> UVI</label><br />
                </div>
  
                <div class="check-box">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> UVI</label><br />
                </div>
                <div class="check-box">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label for="vehicle1"> UVI</label><br />
                </div>
              </div>
            </div>
            <div class="option">
              <select name="When can You Talk" id="appoint">
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
  
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
                <option value="">9am to 10 am</option>
              </select>
            </div>
            <div class="phone">
              <input
                type="text"
                id="phone"
                name="vehicle1"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div class="top-btn">
            <button type="button" style={{width:"200px"}}  class="btn btn-outline-danger">
              Book Consultations
            </button>
          </div>
        </div>
      </section>
  
      <section class="major-lower">
        <h3>Fertility Treatments</h3>
        <div class="lower-container">
          <div class="lower-container-images">
            <div>
              <img
                src="https://static.wixstatic.com/media/183362_121ebc2679cd47fc9371c5d89937034e~mv2.png/v1/fill/w_147,h_147,al_c,q_85,usm_0.66_1.00_0.01/in-vitro.webp"
                alt=""
              />
              <h3>IVF</h3>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/183362_ef8212df58b1413981fa8a7dc1ab20cf~mv2.png/v1/fill/w_147,h_147,al_c,q_85,usm_0.66_1.00_0.01/IUI.webp"
                alt=""
              />
              <h3>IUI</h3>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/183362_d1965a17ff784c89a183adf841e70ee7~mv2.png/v1/fill/w_147,h_147,al_c,q_85,usm_0.66_1.00_0.01/ICSI.webp"
                alt=""
              />
              <h3>ICSI</h3>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/183362_53c7dadd4b3648398aa8277720696077~mv2.png/v1/fill/w_147,h_146,al_c,q_85,usm_0.66_1.00_0.01/Donation.webp"
                alt=""
              />
              <h3>Donor Sperm Donor Egg</h3>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/183362_17ce2929d722422b80d807c2fae65cc2~mv2.png/v1/fill/w_147,h_146,al_c,q_85,usm_0.66_1.00_0.01/Surrogacy.webp"
                alt=""
              />
              <h3>Surrogacy</h3>
            </div>
          </div>
        </div>
        <div class="lower-near-container">
          <h2>Services</h2>
  
          <p>
            We will assist you to find the right treatment to turn your dream into
            reality
          </p>
          <div class="cards">
            <div class="inside_card">
              <div>
                <img
                  src="https://www.svgrepo.com/show/257899/stethoscope-doctor.svg"
                  alt=""
                />
              </div>
  
              <h3>Doctor Consultation</h3>
              <p>
                Consult with a fertility doctor for a telephonic or face-to-face
                consultation
              </p>
              <div>
                <button type="button" class="btn btn-outline-danger">
                  Contact Us
                </button>
              </div>
            </div>
            <div class="inside_card">
              <div>
                <img
                  src="https://www.svgrepo.com/show/96451/customer-service.svg"
                  alt=""
                />
              </div>
  
              <h3>Fertility Companion</h3>
              <p>
                Talk to our care manager who will help you find answers to your
                questions
              </p>
              <div>
                <button type="button" class="btn btn-outline-danger">
                  Contact Us
                </button>
              </div>
            </div>
            <div class="inside_card">
              <div>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/medical-flat-34/64/37-Medical_report-512.png"
                  alt=""
                />
              </div>
  
              <h3>Second Opinion Report</h3>
              <p>
                Get written advice from best doctors before or during your
                treatment
              </p>
              <div>
                <button type="button" class="btn btn-outline-danger">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Fragment>
    )
}

export default connect(null,{logout})(Dashboard)
