import styled from 'styled-components';
import media from 'styled-media-query';

const AdminButton = styled.button`
	background: ${(props) =>
		props.primary
			? 'var(--color-button-admin)'
			: 'var(--color-button-primary-rgb)'};

	font-size: 1rem;
	padding: 1.15rem 1.75rem;
	border: none;
	border-radius: 0px;
	transition: all 0.11s ease-out;
	color: var(--color-white);
	font-family: var(--font-body);
	text-transform: uppercase;

	:hover {
		border: 1px solid var(--color-gray);
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.25rem 0.25rem #000;
		cursor: pointer;
	}

	a {
		color: var(--color-white);
		text-transform: uppercase;
		text-decoration: none;
		font-family: var(--font-body);
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
	}
`;

const AdminReturnButtonWrapper = styled.div`
	padding-top: 100px;
`;

const AdminReturnButton = styled.button`
	background: ${(props) =>
		props.primary
			? 'var(--color-button-primary)'
			: 'var(--color-primary-secondary)'};

	font-size: 1rem;
	padding: 1.15rem 1.75rem;
	border: none;
	border-radius: 0px;
	transition: all 0.11s ease-out;
	color: var(--color-black);
	font-family: var(--font-body);
	text-transform: uppercase;
	border: solid 1px var(--color-black);

	:hover {
		border: 1px solid var(--color-black);
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.25rem 0.25rem #000;
		cursor: pointer;
	}

	a {
		color: var(--color-white);
		text-transform: uppercase;
		text-decoration: none;
		font-family: var(--font-body);
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
	}
`;

const AdminTitle = styled.h1`
	font-size: var(--h2-size);
	letter-spacing: var(--letter-spacing-xxl);
	line-height: var(--line-height-xxl);
	padding-bottom: 100px;

	${media.lessThan('large')`
		font-size: var(--h2-mobile-size);
		letter-spacing: var(--letter-spacing-xl);
		line-height: var(--line-height-xl);
	`}

	${media.lessThan('small')`
		font-size: var(--h4-mobile-size);
		letter-spacing: var(--letter-spacing-md);
		line-height: var(--line-height-md);
	`}
`;

const AdminFunctionalityLink = styled.a`
	color: var(--color-secondary);
	cursor: pointer;
	font-weight: var(--font-weight-semi-bold);
	border-bottom: solid 1px var(--color-secondary);
	transition: all 0.11s ease-out;

	:hover {
		color: var(--color-black);
	}
`;

export {
	AdminButton,
	AdminReturnButton,
	AdminReturnButtonWrapper,
	AdminTitle,
	AdminFunctionalityLink,
};
