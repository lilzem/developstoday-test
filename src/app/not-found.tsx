import { Container, Title } from '@/components/shared';
import { Button } from '@/components/ui';
import Link from 'next/link';

export default function NotFound() {
	return (
		<Container className="mt-10 text-center flex flex-col gap-5 items-center">
			<Title className="font-bold" text="Looks like your vehicle does not exist" size="2xl" />

			<Link href="/">
				<Button>Come back Home</Button>
			</Link>
		</Container>
	);
}
