import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import './globals.css';
import { Container, Header } from '@/components/shared';

const nunito = Nunito({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'DevelopsToday Task',
	description: 'Tesk task for DevelopsToday',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Header />

				<main className="min-h-screen">
					<Container className="mt-10">{children}</Container>
				</main>
			</body>
		</html>
	);
}
