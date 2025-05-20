import React from 'react';
import '../styles.css';

const brochures = [
  { file: 'AfternoonTea.pdf', title: 'A History of Afternoon Tea' },
  { file: 'Laundry.pdf', title: 'A History of Laundry' },
  { file: 'Theater.pdf', title: "A Theater Lover's Delight - The Sackville Drive-in" },
  { file: 'Abraham.pdf', title: 'Great Minds of Sackville - Abraham Gesner and George Lawson' },
  { file: 'Soap.pdf', title: 'All About Soap & Candle Making' },
  { file: 'Captain.pdf', title: 'Captain John Gorham - Hero or Monster?' },
  { file: 'Fenerty.pdf', title: 'Charles Fenerty: The Life & Times' },
  { file: 'Childhood.pdf', title: 'Childhood Play' },
  { file: 'Chocolate.pdf', title: 'Chocolate Chip Trip - A History of Cookies' },
  { file: 'Citizens.pdf', title: 'Citizens Who Care: The Stories of Ted B. Blackburn and Gertrude Parker' },
  { file: 'Cornwallis.pdf', title: 'Cornwallis - The Controversial Founder of Halifax' },
  { file: 'Craftspeople.pdf', title: 'Craftspeople in the Community' },
  { file: 'BeaverBank.pdf', title: 'Early Life & Social Developments in Beaver Bank' },
  { file: 'Favorite.pdf', title: 'Favorite Things' },
  { file: 'Folklore.pdf', title: 'Folklore is...' },
  { file: 'SiptoCash.pdf', title: 'From Sip to Cash - The Savvy Bottle Collector' },
  { file: 'Galloping.pdf', title: 'Galloping into the Past...The Sackville Downs Story' },
  { file: 'Games.pdf', title: 'Games From Long Ago' },
  { file: 'Ghost.pdf', title: 'Ghost Stories @ Fultz House' },
  { file: 'Ghostly.pdf', title: 'Ghostly Encounters' },
  { file: 'GhostlyG.pdf', title: 'Ghostly Going-On' },
  { file: 'GhostlyT.pdf', title: 'Ghostly Tales' },
  { file: 'HTB.pdf', title: 'Harold T. Barrett - Mr. Beaver Bank' },
  { file: 'Heading.pdf', title: 'Heading Down the Rails - A Look at Railway Heritage' },
  { file: 'Sackville.pdf', title: 'Historic Sackville: The Early Years' },
  { file: 'Outhouses.pdf', title: 'How Outhouses Came To Be' },
  { file: 'Leading.pdf', title: 'Leading the Charge...One Step Forward' },
  { file: 'Leslie.pdf', title: 'Leslie Thomas & A.J. Smeltzer' },
  { file: 'EnglishCooking.pdf', title: 'Out of Sackville Kitchens - English Cooking' },
  { file: 'FrenchCooking.pdf', title: 'Out of Sackville Kitchens - French Cooking' },
  { file: 'GermanStaples.pdf', title: 'Out of Sackville Kitchens - German Staples' },
  { file: 'Prepping.pdf', title: 'Prepping for Food in Old Sackville Kitchens' },
  { file: 'Business.pdf', title: "Sackville's Business Heritage" },
  { file: 'Destinations.pdf', title: 'Sackville Destinations' },
  { file: 'Parties.pdf', title: 'Tea Parties - Endless Possibilities' },
  { file: 'Teaching.pdf', title: 'Teaching and Learning in a One & Two Room School House' },
  { file: 'Coopering.pdf', title: 'The Art of Coopering' },
  { file: 'Cenotaph.pdf', title: 'The Cenotaph at Sackville Heritage Park' },
  { file: 'Cure.pdf', title: 'The Cure for What Ails You...Homemade & Natural Remedies' },
  { file: 'Extraordinary.pdf', title: 'The Extraordinary Woman of Sackville' },
  { file: 'Fultz.pdf', title: 'The Fultz Family in Perspective' },
  { file: 'Grove.pdf', title: 'The Grove Finishing School' },
  { file: 'Hand-stitched.pdf', title: 'The History of Hand-stitched Creations' },
  { file: 'FolkloreHolidays.pdf', title: 'The History and Folklore of Holidays in Nova Scotia' },
  { file: 'StJohn.pdf', title: 'The History of St. John the Evangelist Anglican Church' },
  { file: 'Stagecoach.pdf', title: 'The History of Stagecoach Travel in Nova Scotia' },
  { file: 'Cooper.pdf', title: 'The Life & Tools of a Cooper' },
  { file: 'Maroon.pdf', title: 'The Maroon Hill Education Story' },
  { file: 'Blacksmith.pdf', title: 'The Old Blacksmith Shop' },
  { file: 'Smithy.pdf', title: 'The Old Fashioned Smithy' },
  { file: 'Wheelwright.pdf', title: 'The Wheelwright Craft' },
  { file: 'Travelling.pdf', title: 'Travelling in the Early Days' },
  { file: 'Two.pdf', title: 'Two Good Men: The Lives of Harry R. Hamilton & Burdett Lively' },
  { file: 'Useful.pdf', title: "Useful Objects From The Late 1800's" },
  { file: 'Christmas.pdf', title: 'Victorian Christmas Traditions' },
  { file: 'Village.pdf', title: 'Village Carpentry' },
  { file: 'Weather.pdf', title: 'Weather Lore for All Seasons' },
  { file: 'Whatnot.pdf', title: 'Whatnots? to Chamber Pots: Everyday Life in the Mid-19th Century' },
];

function Brochures() {
  return (
    <div id="container">
      <div id="header">
        <a href="http://www.fultzhouse.ca/">
          <img alt="Fultz House Museum" id="logo" src="../images/logo.png" />
        </a>
      </div>

      <div id="content">
        <div id="left">
          <ul id="nav">
            <li><a className="sackville" href="../history">Sackville: A Brief History</a></li>
            <li><a className="about" href="../about">About the Museum</a></li>
            <li><a className="events" href="../events">Upcoming Events</a></li>
            <li><a className="links" href="../links">Community Links</a></li>
            <li><a className="brochures current" href="../brochures">Historical Brochures</a></li>
          </ul>
        </div>

        <div id="right">
          <h1>Historical Brochures</h1>
          <table>
            <tbody>
              {brochures.map(({ file, title }) => (
                <tr key={file}>
                  <td>
                    <a href={`../brochures/${file}`} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="clear"></div>
      </div>

      <div id="footer">
        <ul id="navFooter">
          <li><a href="/">Sackville History</a></li>
          <li><a href="../about">About the Museum</a></li>
          <li><a href="../events">Upcoming Events</a></li>
          <li><a href="../links">Community Links</a></li>
          <li><a href="../brochures">Brochures</a></li>
          <li><a href="../misc/contact.html">Contact Us</a></li>
          <li><a href="http://www.fultzhouse.ca/">Home</a></li>
        </ul>
        <div className="clear"></div>
      </div>

      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Find us on Facebook</a>

      <p id="copyright">
        Copyright © 2016 Fultz Corner Restoration Society{' '}
        <span className="credit">
          Site designed and developed by{' '}
          <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.
        </span>
      </p>

      <div className="overlay"></div>
    </div>
  );
}

export default Brochures;
