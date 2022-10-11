const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="index.html"><img src="siliconwat.png"></a>
            <a href="index.html"><h1>Silicon Wat Campus</h1></a>
        </section>
        <nav>
            <ul>
                <li>
                    <h3>For Kids</h3>
                    <div>
                        <h4>Coding Classes</h4>
                        <menu>
                            <li>English</li>
                            <li>Khmer</li>
                            <li>Math</li>
                        </menu>
                        <h4>Extracurricular Activities</h4>
                        <menu>
                            <li>Music Recitals</li>
                            <li>Skate Dancing</li>
                            <li>Takraw Tournaments</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Orchards</h3>
                    <div>
                        <h4>Outdoor Group Activities</h4>
                        <menu>
                            <li>Silent Walking Meditation</li>
                            <li>Fruit Picking & Eating</li>
                            <li>Fruit Drink Mixing</li>
                        </menu>
                        <h4>Indoor Farmers' Markets</h4>
                        <menu>
                            <li class="not-ready">Pro Teal</li>
                            <li>Chrouy Svay</li>
                            <li class="not-ready">Phumi Klong</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Dorms</h3>
                    <div>
                        <h4>Anemities</h4>
                        <menu>
                            <li>Gondola Ferry</li>
                            <li>Metaverse Arcade</li>
                        </menu>
                        <h4>Locations</h4>
                        <menu>
                            <li>Pro Teal</li>
                            <li class="not-ready">Chrouy Svay</li>
                            <li class="not-ready">Phumi Klong</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Startup Incubator</h3>
                    <div>
                        <h4>Team Workshops</h4>
                        <menu>
                            <li>Hack-a-Thon</li>
                            <li class="not-ready">3D Printing</li>
                            <li class="not-ready">Internet of Things</li>
                        </menu>
                        <h4>CEO Club</h4>
                        <menu>
                            <li>Apply for Funding</li>
                            <li>Portfolio Companies</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Visit Us!</h3>
                    <div>
                        <h4>Book</h4>
                        <menu>
                            <li>Airbnb</li>
                        </menu>
                        <h4>Volunteer</h4>
                        <menu>
                            <li>Tutor</li>
                            <li>Mentor</li>
                        </menu>
                        <h4>Donate</h4>
                        <menu>
                            <li>Benefits</li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="changeLanguage(event)">
                <option>Cambodia</option>
                <option disabled>Ukraine</option>
                <option disabled>United States</option>
            </select>
        </aside>
    </header>
`;

export default template;