import styled from 'styled-components';
import Image from 'next/image';

const FooterContainer = styled.footer`
	width: 100%;
	border: solid 1px yellow;
`;

const FooterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FooterLogoTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const FooterCompanyOf = styled.p`
	font-size: var(--font-size);
`;

const FooterBottom = () => {
	return (
		<div className='inner-content-padding-btm'>
			<FooterRow>
				<FooterLogoTitle>
					<Image
						src='/images/navbar-logo.svg'
						alt='logo'
						layout='fixed'
						width={75}
						height={75}
					/>
					<h1 className='footerBottomTitle padding-left-sm'>Holidaze</h1>
				</FooterLogoTitle>
				<FooterCompanyOf>
					This website was created for educational purposes - © Jessica Warr
					2022
				</FooterCompanyOf>
			</FooterRow>
		</div>
	);
};

export { FooterContainer, FooterBottom };
