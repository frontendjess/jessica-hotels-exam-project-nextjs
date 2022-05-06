import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
	width: 100%;
	border: solid 1px yellow;
`;

const FooterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.lessThan('large')`
		flex-direction: column;
	`}
`;

const FooterLogoTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const FooterCompanyOf = styled.p`
	font-size: var(--font-size);
`;

const FooterContentRow = styled.div`
	display: flex;
	flex-direction: row;

	${media.lessThan('large')`
		flex-direction: column;
	`}
`;

const FooterContentColDouble = styled.div`
	flex: 2 1 auto;

	${media.lessThan('large')`
		padding-bottom: 50px;
	`}
`;

const FooterContentColSingle = styled.div`
	flex: 1 1 auto;

	${media.lessThan('large')`
		padding-bottom: 50px;
	`}
`;

const FooterContentTitle = styled.p`
	font-size: var(--font-size);
	font-weight: var(--font-weight-bold);
`;

const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;

	a,
	p {
		line-height: var(--line-height-md);
	}

	a:hover {
		cursor: pointer;
	}
`;

const FooterInputContainer = styled.div`
	border: solid 1px var(--color-black);
	width: 75%;
`;

const FooterInput = styled.input`
	padding: 1rem 1rem;
	background-color: transparent;
	border: none;
	width: 90%;
`;

const FooterContent = () => {
	return (
		<div className='inner-content-padding-btm'>
			<FooterContentRow>
				<FooterContentColDouble>
					<div className='inner-content-padding-sm-btm'>
						<FooterContentTitle>Subscribe To Us</FooterContentTitle>
					</div>
					<FooterInputContainer>
						<FooterInput type='text' placeholder='ENTER YOUR EMAIL ADDRESS' />
						<button type='button'>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</FooterInputContainer>
				</FooterContentColDouble>
				<FooterContentColSingle>
					<div className='inner-content-padding-sm-btm'>
						<FooterContentTitle>Site Links</FooterContentTitle>
					</div>
					<FooterLinks>
						<Link href='/hotels'>
							<a>Our Hotels</a>
						</Link>
						<Link href='/#ourconcept'>
							<a>Our Concept</a>
						</Link>
						<Link href='/contact'>
							<a>Contact Us</a>
						</Link>
						<Link href='/adminlogin'>
							<a>Admin Login</a>
						</Link>
					</FooterLinks>
				</FooterContentColSingle>
				<FooterContentColSingle>
					<div className='inner-content-padding-sm-btm'>
						<FooterContentTitle>Information</FooterContentTitle>
					</div>
					<FooterLinks>
						<p>Main headquarters</p>
						<p>Slottsparken 1</p>
						<p>Oslo, Norway</p>
					</FooterLinks>
				</FooterContentColSingle>
				<FooterContentColSingle>
					<div className='inner-content-padding-sm-btm'>
						<FooterContentTitle>Follow Us</FooterContentTitle>
					</div>
					<FooterLinks>
						<Link href='https://facebook.com'>
							<a>Facebook</a>
						</Link>
						<Link href='https://instagram.com'>
							<a>Instagram</a>
						</Link>
						<Link href='https://twitter.com'>
							<a>Twitter</a>
						</Link>
					</FooterLinks>
				</FooterContentColSingle>
			</FooterContentRow>
		</div>
	);
};

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

export { FooterContainer, FooterContent, FooterBottom };
