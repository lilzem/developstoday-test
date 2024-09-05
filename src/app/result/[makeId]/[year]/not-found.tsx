import { Container, Title } from '@/components/shared';

export default function NotFoundPage() {
	return (
		<Container className="mt-10 text-center">
			<Title className="font-bold" text="Looks like your vehicle is not exist" size="2xl" />
		</Container>
	);
}
