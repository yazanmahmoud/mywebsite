document.addEventListener("DOMContentLoaded", function () {
  const container = document.createElement("div");
  container.id = "container";

  // HEADER
  const header = document.createElement("div");
  header.id = "header";
  const logoLink = document.createElement("a");
  logoLink.href = "http://www.fultzhouse.ca/";
  const logoImg = document.createElement("img");
  logoImg.src = "../images/logo.png";
  logoImg.alt = "Fultz House Museum";
  logoImg.id = "logo";
  logoImg.name = "logo";
  logoLink.appendChild(logoImg);
  header.appendChild(logoLink);
  container.appendChild(header);

  // CONTENT WRAPPER
  const content = document.createElement("div");
  content.id = "content";

  // LEFT SIDEBAR
  const left = document.createElement("div");
  left.id = "left";
  left.innerHTML = `
    <ul id="nav">
      <li><a class="sackville" href="../history">Sackville: A Brief History</a></li>
      <li><a class="about" href="../about">About the Museum</a></li>
      <li><a class="events" href="../events">Upcoming Events</a></li>
      <li><a class="links current" href="../links">Community Links</a></li>
      <li><a class="brochures" href="../brochures">Historical Brochures</a></li>
    </ul>
  `;
  content.appendChild(left);

  // RIGHT MAIN CONTENT
  const right = document.createElement("div");
  right.id = "right";
  right.innerHTML = `
    <h1>Community Links</h1>
    <ul>
      <li><a href="#HRM">HRM Municipal Representatives (Councillors)</a></li>
      <li><a href="#MLA">Members of the Legislative Assembly (MLAs)</a></li>
      <li><a href="#MP">Members of Parliament (MPs)</a></li>
      <li><a href="#Tea">Event - Drive Thru Sponsors</a></li>
      <li><a href="#Museums">Nearby Historic Sites and Museums</a></li>
      <li><a href="#Sackville">Sackville Community Links</a></li>
      <li><a href="http://www.hotelscombined.ca/Place/Lower_Sackville.htm">To find Lower Sackville hotels nearby, visit HotelsCombined </a></li>
    </ul>
    <br><br><br>
  `;

  // Main TABLE - for brevity, we can insert the table as raw HTML
  const table = document.createElement("table");
  table.innerHTML = `
    <tbody>
          {/* Councillors */}
          <tr>
            <td><a href="https://www.halifax.ca/city-hall/districts-councillors">Paul Russell</a><span className="desc"> — District 15, Lower Sackville</span></td>
            <td className="number">
              📞 902-240-0441<br />
              <a href="mailto:paul.russell@halifax.ca">paul.russell@halifax.ca</a>
            </td>
          </tr>
          <tr>
            <td><a href="https://www.halifax.ca/city-hall/districts-councillors/district-1">Cathy Deagle-Gammon</a><span className="desc"> — District 1: Enfield, Fall River, Waverley</span></td>
            <td className="number">
              📞 902-717-2718<br />
              <a href="mailto:cathy.deaglegammon@halifax.ca">cathy.deaglegammon@halifax.ca</a>
            </td>
          </tr>

          {/* MLAs */}
          <tr><td className="label" colSpan={2}>Members of the Legislative Assembly (MLAs)</td></tr>
          <tr>
            <td><a href="https://nslegislature.ca/members/profiles/steve-craig">Steve Craig</a> (PC) — Sackville-Cobequid</td>
            <td className="number">
              📞 902-864-6271<br />
              <a href="mailto:steve.craig@novascotia.ca">steve.craig@novascotia.ca</a>
            </td>
          </tr>
          <tr>
            <td><a href="https://nslegislature.ca/members/profiles/brad-bj-johns">Brad Johns (PC)</a> — Sackville-Uniacke</td>
            <td className="number">
              📞 902-865-6467<br />
              <a href="mailto:bradjohns4mla@gmail.com">bradjohns4mla@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td><a href="https://nslegislature.ca/members/profiles/brian-wong">Brian Wong (PC)</a> — Waverley-Fall River-Beaver Bank</td>
            <td className="number">
              📞 902-576-3411<br />
              <a href="mailto:brianwongmla@gmail.com">brianwongmla@gmail.com</a>
            </td>
          </tr>

          {/* MPs */}
          <tr><td className="label" colSpan={2}>Members of Parliament (MPs)</td></tr>
          <tr>
            <td><a href="https://www.ourcommons.ca/Members/en/darrell-samson(88333)">Darrell Samson</a> — Sackville–Preston–Chezzetcook</td>
            <td className="number">
              📞 902-861-2311<br />
              <a href="mailto:darrell.samson@parl.gc.ca">darrell.samson@parl.gc.ca</a>
            </td>
          </tr>
          <tr>
            <td><a href="https://lenametlegediab.libparl.ca">Lena Metledge Diab</a> — Halifax West</td>
            <td className="number">
              📞 902-426-2217<br />
              <a href="mailto:lenametlege.diab@parl.gc.ca">lenametlege.diab@parl.gc.ca</a>
            </td>
          </tr>

          {/* Drive Thru Sponsors */}
          <tr><td className="label" colSpan="2">Event - Drive Thru Sponsors</td></tr>
          <tr><td><a href="http://www.paulrussell.ca/">Councillor Paul Russell</a></td><td className="number">📞 902-240-0441</td></tr>
          <tr><td><a href="http://www.halifax.ca/city-hall/districts-councillors/district-14/councillor-lisa-blackburn">Councillor Lisa Blackburn</a></td><td className="number">📞 902-579-7164</td></tr>
          <tr><td>Members, Volunteers and Friends of the Fultz Corner Restoration Society</td></tr>

          {/* Museums */}
          <tr><td className="label" colSpan="2">Nearby Historic Sites and Museums</td></tr>
          {[
            ["https://uniacke.novascotia.ca/", "Uniacke Estate", "Mount Uniacke, NS"],
            ["http://www.scottmanor.ca/", "Scott Manor House", "Bedford, NS"],
            ["http://www.dartmouthheritagemuseum.ns.ca/", "Dartmouth Heritage Museum", "Dartmouth, NS"],
            ["http://coleharbourfarmmuseum.ca/", "Cole Harbour Heritage Farm Museum", "Cole Harbour, NS"],
            ["http://www.pc.gc.ca/en/lhn-nhs/ns/halifax", "Halifax Citadel", "Halifax, NS"],
            ["http://pc.gc.ca/en/lhn-nhs/ns/prince/", "Prince of Wales Tower", "Halifax, NS"],
            ["http://www.pc.gc.ca/en/lhn-nhs/ns/grandpre", "Grand-Pré Historic Site", "Grand-Pré, NS"]
          ].map(([url, name, location], i) => (
            <tr key={i}><td><a href={url}>{name}</a></td><td className="number">{location}</td></tr>
          ))}

          {/* Sackville Links */}
          <tr><td className="label" colSpan="2">Sackville Community Links</td></tr>
          {[
            ["http://www.sackvillenovascotia.ca/", "Sackville Official Website"],
            ["http://www.sackvillebusiness.com/", "Sackville Business Association"],
            ["http://www.thestadium.ca/", "Sackville Sports Stadium"],
            ["http://www.halifaxpubliclibraries.ca/branches/locations/sackville.html", "Sackville Public Library"],
            ["http://www.chebucto.ns.ca/Education/BSLN/", "Bedford Sackville Literacy Network"],
            ["http://www.sackvillerivers.ns.ca/", "Sackville Rivers Association"],
            ["http://www.novascotia.com/see-do/outdoor-activities/sackville-lakes-provincial-park/6057", "Second Lake Provincial Park"],
            ["http://www.springfieldlakerec.com/", "Springfield Lake Rec Centre"],
            ["http://www.millwood.ednet.ns.ca/", "Millwood High School"],
            ["http://www.beaverbank.ca/", "Beaver Bank"]
          ].map(([url, name], i) => (
            <tr key={i}><td><a href={url}>{name}</a></td><td className="number"></td></tr>
        ))}

        </tbody>
  `;
  right.appendChild(table);
  content.appendChild(right);

  const clearDiv = document.createElement("div");
  clearDiv.className = "clear";
  content.appendChild(clearDiv);

  container.appendChild(content);

  // FOOTER
  const footer = document.createElement("div");
  footer.id = "footer";
  footer.innerHTML = `
    <ul id="navFooter">
      <li><a href="/">Sackville History</a></li>
      <li><a href="../about">About the Museum</a></li>
      <li><a href="../events">Upcoming Events</a></li>
      <li><a href="../links">Community Links</a></li>
      <li><a href="../brochures">Brochures</a></li>
      <li><a href="../misc/contact.html">Contact Us</a></li>
      <li><a href="http://www.fultzhouse.ca/">Home</a></li>
    </ul>
    <div class="clear"></div>
  `;
  container.appendChild(footer);

  // Facebook Link
  const facebook = document.createElement("a");
  facebook.href = "https://www.facebook.com/FultzHouse/";
  facebook.id = "facebook";
  facebook.textContent = "Find us on Facebook";
  container.appendChild(facebook);

  // Copyright
  const copyright = document.createElement("p");
  copyright.id = "copyright";
  copyright.innerHTML = `Copyright © 2024 Fultz Corner Restoration Society 
    <span class="credit">Site designed and developed by 
    <a href="mailto:tywalkland@hotmail.com">Ty Walkland</a>.<br>Managed by Paige Aziz</span>`;
  container.appendChild(copyright);

  // Overlay
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  container.appendChild(overlay);

  // Append everything to the body
  document.body.appendChild(container);
});
