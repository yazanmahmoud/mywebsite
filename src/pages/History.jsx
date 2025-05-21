import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../images/logo.png';
import photo01 from '../images/photo01.png';
import photo02 from '../images/photo02.png';
import photo03 from '../images/photo03.png';


const History = () => {
  return (
    <div id="container">
      <div id="header">
        <a href="http://www.fultzhouse.ca/">
          <img id="logo" src={logo} alt="Fultz House Museum" />
        </a>
      </div>

      <div id="content">
        {/* Sidebar Navigation */}
        <div id="left">
          <ul id="nav">
            <li><Link to="/history" className="sackville current">Sackville: A Brief History</Link></li>
            <li><Link to="/about" className="about">About the Museum</Link></li>
            <li><Link to="/events" className="events">Upcoming Events</Link></li>
            <li><Link to="/community" className="links">Community Links</Link></li>
            <li><Link to="/brochures" className="brochures">Historical Brochures</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div id="right">
          <h1>A Brief History of Sackville</h1>

          <p className="right">
            <img
              className="caption"
              src={photo01}
              alt="Felled trees line the riverbank"
            />
            Logging along the Sackville River brought many settlers to the Sackville area in the 1800s.
          </p>

          <p>
            <span className="drop">S</span>ackville’s earliest roots as a settlement can be traced back to a fort
            built at the head of Bedford Basin to defend Halifax against French soldiers and their Mi’kmaq allies.
            Named Fort Sackville in honour of Lionel Cranfield Sackville, Duke of Dorset, the small barracks and
            palisade were constructed on high ground near the mouth of the Sackville River in what is now Bedford.
            Fort Sackville’s strategic position facilitated communication with Acadian communities in the Annapolis
            Valley and reinforced Halifax’s defenses.
          </p>

          <p className="left">
            <img
              className="caption"
              src={photo02}
              alt="Pictured are several local woodsmen preparing to move a log down the Sackville River"
            />
            Pictured are several local woodsmen preparing to move a log down the Sackville River, c.1920. From the
            left: Percy Harpell, Johnny Smeltzer, A.J. Smeltzer, Frank Robinson, Duncan Fader and Ed Thomas.
          </p>

          <p>
            Joseph Scott, one of Sackville’s first residents, landed in Halifax in 1749 onboard the ship London. An
            entrepreneur, his timber business soon expanded beyond the head of the basin to sawmills constructed along
            the Sackville River. In addition to his business ventures, Scott held several public offices over his
            lifetime, becoming a Justice of the Peace, paymaster of the Halifax garrison, and serving as a member of the
            Legislative Assembly for Kings County. In 1767, Scott was granted land at the northern extremity of Bedford
            Basin, where he would have a large Dutch Colonial-style manor built for his family. Today, the Scott Manor
            House stands as the oldest residence in the Bedford-Sackville area.
          </p>

          <p className="right">
            <img
              className="caption"
              src={photo03}
              alt="A mother and her three small children going for a ride in a horse-drawn buggy"
            />
            A mother and her three small children going for a ride in a horse-drawn buggy. Many of Sackville's early
            residents depended on animals for farm work and transportation.
          </p>

          <p>
            Sackville’s location at the head of Bedford Basin proved to be a pivotal intersection for travelers
            journeying to Truro and Windsor. The road to Cobequid, a Mi’kmaq term for “the end of the water’s flow”,
            was transformed from a rough narrow path to a major road as stagecoach service to Truro was established in
            1816. Likewise, Acadian farmers had employed the path to Chebucto for almost 100 years before Cornwallis
            sent orders to have the roadway widened for improved passage to Windsor and the Minas Basin. With access to
            both of these important roadways, Sackville became a traditional stopping place for travelers. Twelve Mile
            House, an inn operated by the Fultz family, soon became a Sackville landmark. Early morning stagecoaches
            from Halifax regularly stopped at the inn for breakfast, while Halifax society members gathered in the 40 by
            25 foot ballroom for special events. Twelve Mile House operated successfully for over 50 years.
          </p>

          <h2>The Fultz Family</h2>

          <p>
            <span className="drop">I</span>n 1858, Bennett Fultz, a wheelwright and cabinet maker, purchased the piece
            of land opposite Twelve Mile House from his cousin William. On the property, he built a 20 by 20 foot house
            for himself and for his wife, Mary Robinson. As their family grew to eight children, their small house was
            soon expanded to a full two-storey building with a dining room and summer kitchen. The Fultzes took
            advantage of their busy intersection by operating a post office from Mary's kitchen window. Herman, one of
            the Fultz children, became a talented iron worker, operating a successful blacksmith shop across the street.
            With enterprising Fultzes on each corner of the intersection, there can be no doubt of this family's
            influence in Sackville's early days.
          </p>
        </div>

        <div className="clear" />
      </div>

      {/* Footer */}
      <div id="footer">
        <ul id="navFooter">
          <li><Link to="/history">Sackville History</Link></li>
          <li><Link to="/about">About the Museum</Link></li>
          <li><Link to="/events">Upcoming Events</Link></li>
          <li><Link to="/community">Community Links</Link></li>
          <li><Link to="/brochures">Brochures</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div className="clear" />
      </div>

      <a id="facebook" href="https://www.facebook.com/FultzHouse/">Find us on Facebook</a>

      <p id="copyright">
        Copyright © 2024 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.
        </span>
      </p>

      <div className="overlay" />
    </div>
  );
};

export default History;
