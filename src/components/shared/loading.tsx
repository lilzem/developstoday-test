import { FC } from 'react';

import { Container } from './container';
import { Title } from './title';

export const Loading: FC = () => {
	return (
		<Container className="mt-10 text-center">
			<Title text="Loading..." size="lg" />
		</Container>
	);
};
