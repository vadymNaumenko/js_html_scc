// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import style from './navBar.module.css';
export default function NavBar(): JSX.Element {
	return (
		<nav className={style.navTeg}>
			<span className={style.spanButton}>
				<NavLink className={style.navLinkText} to="products">
					Products
				</NavLink>
			</span>
			<span className={style.spanButton}>
				<NavLink className={style.navLinkText} to="posts">
					Posts
				</NavLink>
			</span>
			<span className={style.spanButton}>
				<NavLink className={style.navLinkText} to="users">
					Users
				</NavLink>
			</span>
			<span className={style.spanButton}>
				<NavLink className={style.navLinkText} to="weather">
					Weather
				</NavLink>
			</span>
			<span className={style.spanButton}>
				<NavLink className={style.navLinkText} to="/">
					Home
				</NavLink>
			</span>
		</nav>
	);
}
// <div className="d-flex gap-2 justify-content-center py-5">
// 	<button className="btn btn-primary rounded-pill px-3" type="button">Primary</button>
// 	<button className="btn btn-secondary rounded-pill px-3" type="button">Secondary</button>
// 	<button className="btn btn-success rounded-pill px-3" type="button">Success</button>
// 	<button className="btn btn-danger rounded-pill px-3" type="button">Danger</button>
// 	<button className="btn btn-warning rounded-pill px-3" type="button">Warning</button>
// 	<button className="btn btn-info rounded-pill px-3" type="button">Info</button>
// 	<button className="btn btn-light rounded-pill px-3" type="button">Light</button>
// 	<button className="btn btn-dark rounded-pill px-3" type="button">Dark</button>
// 	<button className="btn btn-link rounded-pill px-3" type="button">Link</button>
// </div>
