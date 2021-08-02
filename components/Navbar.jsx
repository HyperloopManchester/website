import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar flex-spaced">
            <input type="checkbox" className="hidden-input menu-toggle" id="menu-toggler" />
            <ul className="navbar-menu" id="menu">
                <li>
                <label className="menu-toggle-label" htmlFor="menu-toggler">
                    <img className="menu-toggle-icon" src="/menu.svg" alt="menu" />
                </label>
                </li>
                <Link href="/" passHref><li className="menu-brand menu-link"><img src="/images/manchester_hyperloop.png"/></li></Link>
                <Link href="/events" passHref><li className="menu-link">Events</li></Link>
                <Link href="/team" passHref><li className="menu-link">Team</li></Link>
            </ul>
            </nav>
        );
}