import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';


function Home() {
  return (
    <div id="container">
      {/* Header */}
      <div id="header">
        <a href="http://www.fultzhouse.ca/">
          <img alt="Fultz House Museum" id="logo" src="../images/logo.png" />
        </a>
        <address className="header">
          33 Sackville Drive<br />
          Lower Sackville, NS B4C 0E5<br />
          <img alt="Phone" className="icon" src=",,/images/icon-phone.gif" width="12" height="9" /> 902-865-3794<br />
          <img alt="Fax" className="icon" src="../images/fax.jpg" width="12" height="12" /> 902-865-3794<br />
          <img alt="Email" className="icon" src="../images/icon-email.gif" width="11" height="8" />
          <a href="mailto:fultz.house@ns.sympatico.ca">fultz.house@ns.sympatico.ca</a>
        </address>
      </div>

      {/* Content */}
      <div id="content">
        {/* Sidebar */}
        <div id="left">
          <ul id="nav">
            <li><a className="sackville" href="../history">Sackville: A Brief History</a></li>
            <li><a className="about" href="../about">About the Museum</a></li>
            <li><a className="events" href="../events">Upcoming Events</a></li>
            <li><a className="links" href="../community">Community Links</a></li>
            <li><a className="brochures" href="../brochures">Historical Brochures</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div id="right">
          <h1>Welcome to Fultz House</h1>
          <p>Sackville's Heritage Portal</p>
          <p className="intro">
            <img alt="Front exterior shot of Fultz House Museum" className="photo" src="images/photoHouse.png" />
            <span className="drop">L</span>ocated at the corner of Nova Scotia's most famous intersection, Fultz House Museum's collections reflect over 200 years of Sackville history. Constructed in the 1860s, Bennett Fultz's house is now home to hundreds of artifacts, photographs, and displays. Come discover Sackville's proud history for yourself!
          </p>

          <p><strong>Land Acknowledgement Statement on Mi’kma’ki:</strong><br />
          “We acknowledge that we are in Mi'kma'ki, the ancestral and unceded territory of the Mi'kmaq people.”</p>

          <p><strong>African Ancestry Statement:</strong><br />
          “We acknowledge that people of African descent have been in Nova Scotia for more than 400 years and we honour and offer gratitude to those ancestors of African descent who came before us to this land.”</p>

          <p><strong>A Statement of Acknowledgement on Acadian Culture and Heritage:</strong><br />
          “We recognize and celebrate not only the historical roots of Acadians, but also the ongoing strength and resiliency of its people, and an invaluable culture, artistry and heritage, vibrant traditions, in addition to the crucial role that historic and thriving Acadian communities have played in shaping the rich, intricate cultural tapestry of Nova Scotia.”</p>

          <h2>Where to find us</h2>
          <p>Fultz House Museum is located at the intersection between Old Sackville Road, Sackville Drive and Cobequid Road in Lower Sackville, Nova Scotia.</p>
          <p>Click on the <a href="contact/index.html">Contact Us</a> page for more information and directions.</p>

          <div className="hours">
            <p><strong>The Museum is open to the public as follows:</strong></p>
            <p><strong>June:</strong><br />Sunday 10am - 5pm<br />Saturday 10am - 5pm</p>
            <p><strong>July and August:</strong><br />
              Sunday 10am - 5pm<br />
              Monday - Friday 11am - 5pm<br />
              Saturday 10am - 5pm
            </p>
            <p><strong>Off-season tours by appointment:</strong> Email <a href="mailto:fultz.house@ns.sympatico.ca?subject=Fultz House Tour Request">fultz.house@ns.sympatico.ca</a> or call 902-865-3794</p>
          </div>

          <p>Admission by donation.</p>
          <p>Some artifacts are viewable online through <a href="http://www.novamuse.ca">Nova Muse</a>.</p>
        </div>

        <div className="clear"></div>
      </div>

      {/* Footer */}
      <div id="footer">
        <ul id="navFooter">
          <li><a href="/history">Sackville History</a></li>
          <li><a href="/about">About the Museum</a></li>
          <li><a href="/events">Upcoming Events</a></li>
          <li><a href="/community">Community Links</a></li>
          <li><a href="/brochures">Brochures</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="http://www.fultz-house.ca/">Home</a></li>
        </ul>

        <div className="clear"></div>
      </div>

      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Follow us on Facebook</a>

      <p id="copyright">
        © 2024 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.<br />
          Managed by Paige Aziz
        </span>
      </p>

      <div className="overlay"></div>
    </div>
  );
}

export default Home;
