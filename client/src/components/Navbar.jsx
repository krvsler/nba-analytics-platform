import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.nav}>
            <h2> NBA Analytics</h2>
            <div style={styles.links}>
                <Link style={styles.link} to="/">Dashboard</Link>
                <Link style={styles.link} to="/players">Players</Link>
                <Link style={styles.link} to="/teams">Teams</Link>
                <Link style={styles.link} to="/compare">Compare</Link>
            </div>
        </nav>
    );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1d1d1d',
    color: '#fff',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
  },
};

export default Navbar;