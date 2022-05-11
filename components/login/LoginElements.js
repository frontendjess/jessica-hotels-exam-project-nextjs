import styled from 'styled-components';
import media from 'styled-media-query';

const LoginContainer = styled.div`
	padding: 150px 100px;

	${media.lessThan('medium')`
        padding: 150px 25px;
    `}
`;

export default LoginContainer;
