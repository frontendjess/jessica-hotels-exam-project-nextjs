import styled from 'styled-components';
import media from 'styled-media-query';

const EnquirySentContainer = styled.div`
	padding: 100px 100px 0 100px;

	${media.lessThan('medium')`
        padding: 100px 25px 0 25px;
    `}
`;

const EnquirySentTitle = styled.div`
	font-size: var(--h4-size);
	font-family: var(--font-body);
	letter-spacing: var(--letter-spacing-lg);
	line-height: var(--line-height-lg);

	${media.lessThan('medium')`
        font-size: var(--h4-mobile-size);
        letter-spacing: var(--letter-spacing-md);
        line-height: var(--line-height-md);
    `}
`;

export { EnquirySentContainer, EnquirySentTitle };
