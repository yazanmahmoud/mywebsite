import React from 'react';
import '../App.css';

// TableRow component
const TableRow = ({ label, contact, isHeader = false, colSpan = 2 }) => {
  if (isHeader) {
    return (
      <tr>
        <td className="label" colSpan={colSpan}>
          {label}
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td dangerouslySetInnerHTML={{ __html: label }} />
      <td className="number" dangerouslySetInnerHTML={{ __html: contact }} />
    </tr>
  );
};

// ContactTable component
const ContactTable = () => {
  const councillors = [
    [
      `<a href="https://www.halifax.ca/city-hall/districts-councillors">Paul Russell</a><span class="desc"> — District 15, Lower Sackville</span>`,
      `📞 902-240-0441<br /><a href="mailto:paul.russell@halifax.ca">paul.russell@halifax.ca</a>`,
    ],
    [
      `<a href="https://www.halifax.ca/city-hall/districts-councillors/district-1">Cathy Deagle-Gammon</a><span class="desc"> — District 1: Enfield, Fall River, Waverley</span>`,
      `📞 902-717-2718<br /><a href="mailto:cathy.deaglegammon@halifax.ca">cathy.deaglegammon@halifax.ca</a>`,
    ],
  ];

  const mlas = [
    [
      `<a href="https://nslegislature.ca/members/profiles/steve-craig">Steve Craig</a> (PC) — Sackville-Cobequid`,
      `📞 902-864-6271<br /><a href="mailto:steve.craig@novascotia.ca">steve.craig@novascotia.ca</a>`,
    ],
    [
      `<a href="https://nslegislature.ca/members/profiles/brad-bj-johns">Brad Johns (PC)</a> — Sackville-Uniacke`,
      `📞 902-865-6467<br /><a href="mailto:bradjohns4mla@gmail.com">bradjohns4mla@gmail.com</a>`,
    ],
    [
      `<a href="https://nslegislature.ca/members/profiles/brian-wong">Brian Wong (PC)</a> — Waverley-Fall River-Beaver Bank`,
      `📞 902-576-3411<br /><a href="mailto:brianwongmla@gmail.com">brianwongmla@gmail.com</a>`,
    ],
  ];

  const mps = [
    [
      `<a href="https://www.ourcommons.ca/Members/en/darrell-samson(88333)">Darrell Samson</a> — Sackville–Preston–Chezzetcook`,
      `📞 902-861-2311<br /><a href="mailto:darrell.samson@parl.gc.ca">darrell.samson@parl.gc.ca</a>`,
    ],
    [
      `<a href="https://lenametlegediab.libparl.ca">Lena Metledge Diab</a> — Halifax West`,
      `📞 902-426-2217<br /><a href="mailto:lenametlege.diab@parl.gc.ca">lenametlege.diab@parl.gc.ca</a>`,
    ],
  ];

  const driveThruSponsors = [
    [`<a href="http://www.paulrussell.ca/">Councillor Paul Russell</a>`, `📞 902-240-0441`],
    [`<a href="http://www.halifax.ca/city-hall/districts-councillors/district-14/councillor-lisa-blackburn">Councillor Lisa Blackburn</a>`, `📞 902-579-7164`],
    [`Members, Volunteers and Friends of the Fultz Corner Restoration Society`, ``],
  ];

  const museums = [
    ["https://uniacke.novascotia.ca/", "Uniacke Estate", "Mount Uniacke, NS"],
    ["http://www.scottmanor.ca/", "Scott Manor House", "Bedford, NS"],
    ["http://www.dartmouthheritagemuseum.ns.ca/", "Dartmouth Heritage Museum", "Dartmouth, NS"],
    ["http://coleharbourfarmmuseum.ca/", "Cole Harbour Heritage Farm Museum", "Cole Harbour, NS"],
    ["http://www.pc.gc.ca/en/lhn-nhs/ns/halifax", "Halifax Citadel", "Halifax, NS"],
    ["http://pc.gc.ca/en/lhn-nhs/ns/prince/", "Prince of Wales Tower", "Halifax, NS"],
    ["http://www.pc.gc.ca/en/lhn-nhs/ns/grandpre", "Grand-Pré Historic Site", "Grand-Pré, NS"],
  ];

  const sackvilleLinks = [
    ["http://www.sackvillenovascotia.ca/", "Sackville Official Website"],
    ["http://www.sackvillebusiness.com/", "Sackville Business Association"],
    ["http://www.thestadium.ca/", "Sackville Sports Stadium"],
    ["http://www.halifaxpubliclibraries.ca/branches/locations/sackville.html", "Sackville Public Library"],
    ["http://www.chebucto.ns.ca/Education/BSLN/", "Bedford Sackville Literacy Network"],
    ["http://www.sackvillerivers.ns.ca/", "Sackville Rivers Association"],
    ["http://www.novascotia.com/see-do/outdoor-activities/sackville-lakes-provincial-park/6057", "Second Lake Provincial Park"],
    ["http://www.springfieldlakerec.com/", "Springfield Lake Rec Centre"],
    ["http://www.millwood.ednet.ns.ca/", "Millwood High School"],
    ["http://www.beaverbank.ca/", "Beaver Bank"],
  ];

  return (
    <table>
      <tbody>
        {councillors.map(([label, contact], i) => (
          <TableRow key={`coun-${i}`} label={label} contact={contact} />
        ))}
        <TableRow label="Members of the Legislative Assembly (MLAs)" isHeader />
        {mlas.map(([label, contact], i) => (
          <TableRow key={`mla-${i}`} label={label} contact={contact} />
        ))}
        <TableRow label="Members of Parliament (MPs)" isHeader />
        {mps.map(([label, contact], i) => (
          <TableRow key={`mp-${i}`} label={label} contact={contact} />
        ))}
        <TableRow label="Event - Drive Thru Sponsors" isHeader />
        {driveThruSponsors.map(([label, contact], i) => (
          <TableRow key={`sponsor-${i}`} label={label} contact={contact} />
        ))}
        <TableRow label="Nearby Historic Sites and Museums" isHeader />
        {museums.map(([url, name, location], i) => (
          <TableRow key={`museum-${i}`} label={`<a href="${url}">${name}</a>`} contact={location} />
        ))}
        <TableRow label="Sackville Community Links" isHeader />
        {sackvilleLinks.map(([url, name], i) => (
          <TableRow key={`sackville-${i}`} label={`<a href="${url}">${name}</a>`} contact="" />
        ))}
      </tbody>
    </table>
  );
};

// Main component
const Community = () => {
  return (
    <div id="container">
      <div id="header">
        <a href="http://www.fultzhouse.ca/">
          <img src="../images/logo.png" alt="Fultz House Museum" id="logo" name="logo" />
        </a>
      </div>

      <div id="content">
        <div id="left">
          <ul id="nav">
            <li><a className="sackville" href="../history">Sackville: A Brief History</a></li>
            <li><a className="about" href="../about">About the Museum</a></li>
            <li><a className="events" href="../events">Upcoming Events</a></li>
            <li><a className="links current" href="../community">Community Links</a></li>
            <li><a className="brochures" href="../brochures">Historical Brochures</a></li>
          </ul>
        </div>

        <div id="right">
          <h1>Community Links</h1>
          <ul>
            <li><a href="#HRM">HRM Municipal Representatives (Councillors)</a></li>
            <li><a href="#MLA">Members of the Legislative Assembly (MLAs)</a></li>
            <li><a href="#MP">Members of Parliament (MPs)</a></li>
            <li><a href="#Tea">Event - Drive Thru Sponsors</a></li>
            <li><a href="#Museums">Nearby Historic Sites and Museums</a></li>
            <li><a href="#Sackville">Sackville Community Links</a></li>
            <li><a href="http://www.hotelscombined.ca/Place/Lower_Sackville.htm">To find Lower Sackville hotels nearby, visit HotelsCombined</a></li>
          </ul>

          {/* table */}
          <ContactTable />
        </div>
      </div>

      <div id="footer">
        <ul id="navFooter">
          <li><a href="/history">Sackville History</a></li>
          <li><a href="/about">About the Museum</a></li>
          <li><a href="/events">Upcoming Events</a></li>
          <li><a href="/community">Community Links</a></li>
          <li><a href="/brochures">Brochures</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="http://www.fultzhouse.ca/">Home</a></li>
        </ul>
        <div className="clear"></div>
      </div>

      <a href="https://www.facebook.com/FultzHouse/" id="facebook">Find us on Facebook</a>

      <p id="copyright">
        Copyright © 2024 Fultz Corner Restoration Society
        <span className="credit">
          Site designed and developed by <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.<br />
          Managed by Paige Aziz
        </span>
      </p>

      <div className="overlay"></div>
    </div>
  );
};

export default Community;
