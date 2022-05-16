import styled from 'styled-components';
import media from 'styled-media-query';

const AlwaysAtHolidazeSection = styled.section`
	position: relative;
`;

const AlwaysAtHolidazeContainer = styled.div`
	background-color: var(--color-white-bg);
	padding: 50px 0;
	color: var(--color-black);
`;

const AlwaysAtHolidazeRow = styled.div`
	padding: 0 100px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 50px;

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;

const AlwaysAtHolidazeCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 16px;
	text-align: center;

	h6 {
		font-size: var(--h6-mobile-size);
	}
`;

const AlwaysAtHolidazeHeading = styled.div`
	position: absolute;
	padding: 0 100px;
	top: 130px;
	text-transform: uppercase;

	h5 {
		font-size: var(--h5-size);
		text-transform: uppercase;
		letter-spacing: var(--letter-spacing-md);

		${media.lessThan('small')`
        font-size: var(--mobile-h5-size);
        `}
	}
`;

export {
	AlwaysAtHolidazeSection,
	AlwaysAtHolidazeContainer,
	AlwaysAtHolidazeRow,
	AlwaysAtHolidazeCol,
	AlwaysAtHolidazeHeading,
};
