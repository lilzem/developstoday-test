import { cn } from '@/lib/utils';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './container';
import { Title } from './title';

interface HeaderProps {
	className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={cn('border-b', className)}>
			<Container className="flex items-center justify-between py-0 px-3">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={200} height={100} />
				</Link>

				<Title className="text-black" text="Test task for DevelopsToday" size="md" />
			</Container>
		</header>
	);
};
