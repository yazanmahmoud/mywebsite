import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Contact = () => {
  return (
    <div id="container">
      <div id="header">
        <a href="http://www.fultzhouse.ca/">
          <img id="logo" src="../images/logo.png" alt="Fultz House Museum" />
        </a>
      </div>

      <div id="content">
        <div id="left">
          <ul id="nav">
            <li><a className="sackville" href="../History">Sackville: A Brief History</a></li>
            <li><a className="about" href="../About">About the Museum</a></li>
            <li><a className="events" href="../Events">Upcoming Events</a></li>
            <li><a className="links" href="../Community">Community Links</a></li>
            <li><a className="brochures" href="../Brochures">Historical Brochures</a></li>
          </ul>
        </div>

        <div id="right">
          <h1>Contact Us</h1>
          <h2>Fultz House Museum</h2>
          <p>
            33 Sackville Drive<br />
            Lower Sackville, Nova Scotia<br />
            B4C 0E5
          </p>
          <p>
            <img src="../images/icon-phone.gif" alt="Phone" width="12" height="9" className="icon" /> Telephone: 902-865-3794<br />
            <img src="../images/icon-fax.gif" alt="Fax" width="14" height="14" className="icon" /> Fax: 902-865-6940<br />
            <img src="../images/icon-email.gif" alt="Email" width="11" height="8" className="icon" /> Email: <a href="mailto:fultz.house@ns.sympatico.ca">fultz.house@ns.sympatico.ca</a>
          </p>

          <h2>Hours of Operation</h2>
          <p>Open 7 days a week, 10 am to 5 pm, during the months of July and August.</p>

          <h2>
            <a href="http://maps.google.ca/maps?q=fultz+house" target="_blank" rel="noreferrer">
              <img src="../images/map.png" alt="Map of Fultz House Museum" id="map" />
              Directions
            </a>
          </h2>

          <p><em>From Highway 102/Airport:</em> Take Exit 4C onto Glendale Avenue. Turn left at the lights at Cobequid Road. Turn left at the Memory Lane lights. Follow signs to our parking area.</p>
          <p><em>From Bedford/Halifax:</em> Take Highway 101, exiting at Exit 1K (follow signs for Lower Sackville). At the lights, turn right onto Cobequid Road. Turn right at the Memory Lane lights.</p>
          <p><em>From Dartmouth:</em> Take Highway 7 to Sackville. Exit at Cobequid Road, turning left onto Memory Lane before reaching the lights.</p>
          <p><em>From Windsor:</em> Take Highway 101 toward Halifax/Dartmouth, exit at Beaverbank Road. Turn right at the first set of lights onto Old Sackville Road, continue straight onto Cobequid Road, turn right at Memory Lane lights.</p>
        </div>

        <div className="clear"></div>
      </div>

      <div id="footer">
        <ul id="navFooter">
          <li><Link to="/History">Sackville History</Link></li>
          <li><Link to="/About">About the Museum</Link></li>
          <li><Link to="/Events">Upcoming Events</Link></li>
          <li><Link to="/Community">Community Links</Link></li>
          <li><Link to="/Brochures"></Link></li>
          <li><a href="http://www.fultzhouse.ca/">Home</a></li>
        </ul>
        <div className="clear"></div>
      </div>

      <a id="facebook" href="http://www.facebook.com/">Find us on Facebook</a>
      <p id="copyright">
        Copyright © 2009 Fultz Corner Restoration Society <span className="credit">
          Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.
        </span>
      </p>

      <div className="overlay"></div>
    </div>
  );
};

export default Contact;
