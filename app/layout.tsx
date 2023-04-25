import type { Metadata } from 'next';
import Link from 'next/link';

import type { LayoutProps } from './types';
import './globals.css';

export const metadata: Metadata = {
	title: 'Project X',
	description: 'desc',
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<header className="container mx-auto bg-gray-100 rounded-lg p-4 mb-5">
					<nav>
						<ul>
							<li>
								<Link href={'/'}>Project X</Link>
							</li>
							<li>
								<Link href={'/'}>Listings</Link>
							</li>
							<li>
								<Link href={'/sell-car'}>Sell a Car</Link>
							</li>
							<li>
								<Link href={'/about'}>About</Link>
							</li>
							<li style={{ color: 'blue' }}>Search Bar</li>
							<li style={{ color: 'blue' }}>Sign Up</li>
							<li style={{ fontStyle: 'italic' }}>
								<Link href={'/watch-list'}>Watch List</Link>
							</li>
							<li style={{ fontStyle: 'italic', color: 'blue' }}>
								Notifications
							</li>
							<li style={{ fontStyle: 'italic' }}>
								<Link href={'/account'}>Profile</Link>
							</li>
							<li style={{ fontStyle: 'italic' }}>
								<Link href={'/account/listings'}>My listings</Link>
							</li>
							<li style={{ fontStyle: 'italic' }}>
								<Link href={'/account/settings'}>Settings</Link>
							</li>
						</ul>
					</nav>
				</header>
				{children}
			</body>
		</html>
	);
};

export default Layout;
