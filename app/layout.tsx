import './globals.css';

export const metadata = {
	title: 'Project X',
	description: 'desc',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="cs">
			<body>{children}</body>
		</html>
	);
}
