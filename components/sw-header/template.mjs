const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="index.html"><img src="siliconwat.png"></a>
            <h1>Silicon Wat Campus</h1>
        </section>
        <nav>
            <ul>
                <li>
                    <h3>For Kids</h3>
                    <div>
                        <h4>Coding Classes</h4>
                        <menu>
                            <li>English</li>
                            <li>Math</li>
                        </menu>
                        <h4>Extracurricular Activities</h4>
                        <menu>
                            <li>Music Recital</li>
                            <li>Skate Dancing</li>
                            <li>Takraw Tournament</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Orchards</h3>
                    <div>
                        <h4>Classes</h4>
                        <menu>
                            <li>Outdoor Cooking Class</li>
                            <li>Outdoor Meditation Class</li>
                            <li>Hi</li>
                        </menu>
                        <h4>Farmer's Supermarket</h4>
                        <menu>
                            <li>Outdoor Cooking Class</li>
                            <li>Outdoor Meditation Class</li>
                            <li>Hi</li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Dorms</h3>
                    <div>
                        <h4>Dorms</h4>
                        <menu>
                            <li>Metaverse Arcade</li>
                            <li>Hi</li>
                            <li>Hi</li>
                        </menu>
                        <h4>Locations</h4>
                        <menu>
                            <li>Outdoor Cooking Class</li>
                            <li>Outdoor Meditation Class</li>
                            <li>Hi</li>
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
                            <li>3D Printing</li>
                            <li>Internet of Things</li>
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
                    <h3>Locations</h3>
                    <div>
                        <h4>Volunteer</h4>
                        <menu>
                            <li>Metaverse Arcade</li>
                            <li>Hi</li>
                            <li>Hi</li>
                        </menu>
                        <h4>Donate</h4>
                        <menu>
                            <li>Outdoor Cooking Class</li>
                            <li>Outdoor Meditation Class</li>
                            <li>Hi</li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="changeLanguage(event)">
                <option>English</option>
                <option>Khmer</option>
            </select>
        </aside>
    </header>
`;

export default template;