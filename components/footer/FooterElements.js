import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
	width: 100%;
	padding: 0 100px;

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;

const FooterRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 100px;

	${media.lessThan('large')`
		flex-direction: column;
		gap: 0;
	`}
`;

const FooterLogoTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 25px;

	${media.lessThan('large')`
		padding-bottom: 50px;
	`};

	${media.lessThan('small')`
		flex-direction: column;
	`}
`;

const FooterHolidazeTitle = styled.div`
	h2 {
		font-size: var(--h2-size);
		letter-spacing: var(--letter-spacing-xxl);
		color: var(--color-black);
	}

	${media.lessThan('large')`
		h2 {
			font-size: var(--h3-size);
			letter-spacing: var(--letter-spacing-xl);
		}
	`}
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

	a {
		color: var(--color-black);
	}

	a:hover {
		cursor: pointer;
	}
`;

const FooterInputContainer = styled.div`
	border: solid 1px var(--color-black);
	width: 65%;

	${media.lessThan('small')`
		width: 100%;
	`}
`;

const FooterInput = styled.input`
	padding: 1rem 1rem;
	background-color: transparent;
	border: none;
	width: 90%;
`;

const FooterButton = styled.button`
	background-color: transparent;
	border: none;

	a {
		color: var(--color-black);
	}
`;

const FooterContent = () => {
	return (
		<div className='section-padding-top inner-content-padding-btm'>
			<FooterContentRow>
				<FooterContentColDouble>
					<div className='inner-content-padding-sm-btm'>
						<FooterContentTitle>Subscribe To Us</FooterContentTitle>
					</div>
					<FooterInputContainer>
						<FooterInput type='text' placeholder='ENTER YOUR EMAIL ADDRESS' />
						<FooterButton type='button'>
							<Link href='mailto:help@holidazehotelsproject.com'>
								<a>
									<FontAwesomeIcon icon={faArrowRight} />
								</a>
							</Link>
						</FooterButton>
					</FooterInputContainer>
				</FooterContentColDouble>
				<FooterContentColSingle>
					<div className='inner-content-padding-sm-btm'>
						<FooterContentTitle>Site Links</FooterContentTitle>
					</div>
					<FooterLinks>
						<Link href='/#Header'>
							<a>Home</a>
						</Link>
						<Link href='/hotels'>
							<a>Our Hotels</a>
						</Link>
						<Link href='/#ourconcept'>
							<a>Our Concept</a>
						</Link>
						<Link href='/contactus'>
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
						src='/images/footer-logo.svg'
						alt='logo'
						layout='fixed'
						width={100}
						height={100}
					/>
					<FooterHolidazeTitle>
						<h2>HOLIDAZE</h2>
					</FooterHolidazeTitle>
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
