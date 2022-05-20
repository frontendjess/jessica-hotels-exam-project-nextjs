import styled from 'styled-components';
import media from 'styled-media-query';

const LoginContainer = styled.div`
	padding: 150px 100px;

	${media.lessThan('medium')`
        padding: 150px 25px;
    `}
`;

const LoginAlertContainer = styled.div`
	width: 100%;
`;

const LoginForm = styled.div`
	padding: 100px 0;
	display: flex;
`;

const LoginFormRow = styled.div`
	padding-bottom: 50px;
`;

const LoginFormInput = styled.input`
	padding: 8px;
	width: 300px;
	font-family: var(--font-body);
`;

const LoginFormButton = styled.button`
	background: ${(props) =>
		props.primary ? 'var(--color-button-primary)' : 'white'};

	font-size: 1rem;
	padding: 8px;
	border: none;
	border-radius: 0px;
	transition: all 0.11s ease-out;
	width: 100%;

	:hover {
		border: 1px solid var(--color-black);
		transform: translate(-0.25rem, -0.25rem);
		box-shadow: 0.25rem 0.25rem #000;
		cursor: pointer;
	}

	a {
		color: var(--color-black);
		text-transform: uppercase;
		text-decoration: none;
		font-family: var(--font-body);
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing-size);
	}
`;

export {
	LoginContainer,
	LoginAlertContainer,
	LoginForm,
	LoginFormRow,
	LoginFormInput,
	LoginFormButton,
};
