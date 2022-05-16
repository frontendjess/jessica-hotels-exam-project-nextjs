import {
	AlwaysAtHolidazeSection,
	AlwaysAtHolidazeContainer,
	AlwaysAtHolidazeRow,
	AlwaysAtHolidazeCol,
	AlwaysAtHolidazeHeading,
} from './AlwaysAtHolidazeElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faWifi,
	faLeaf,
	faBottleWater,
	faSpa,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import { faMessage } from '@fortawesome/free-regular-svg-icons';

import Image from 'next/image';

export default function AlwaysAtHolidaze() {
	return (
		<>
			<AlwaysAtHolidazeSection>
				<Image
					src='/images/arrowvector01.png'
					alt='arrow vector'
					width={150}
					height={143}
				/>
				<AlwaysAtHolidazeHeading>
					{' '}
					<h5>Always at Holidaze</h5>
				</AlwaysAtHolidazeHeading>

				<AlwaysAtHolidazeContainer>
					<AlwaysAtHolidazeRow>
						<AlwaysAtHolidazeCol>
							<div>
								<FontAwesomeIcon className='features-icon' icon={faWifi} />
							</div>
							<div>
								<h6>Strong Wifi</h6>
							</div>
						</AlwaysAtHolidazeCol>
						<AlwaysAtHolidazeCol>
							<div>
								<FontAwesomeIcon className='features-icon' icon={faLeaf} />
							</div>
							<div>
								<h6>Eco Friendly Toiletries</h6>
							</div>
						</AlwaysAtHolidazeCol>
						<AlwaysAtHolidazeCol>
							<div>
								<FontAwesomeIcon
									className='features-icon'
									icon={faBottleWater}
								/>
							</div>
							<div>
								<h6>Water Bottle Filling Stations</h6>
							</div>
						</AlwaysAtHolidazeCol>
						<AlwaysAtHolidazeCol>
							<div>
								<FontAwesomeIcon className='features-icon' icon={faMessage} />
							</div>
							<div>
								<h6>No Need to Call - Text the Lobby</h6>
							</div>
						</AlwaysAtHolidazeCol>
						<AlwaysAtHolidazeCol>
							<div>
								<FontAwesomeIcon className='features-icon' icon={faSpa} />
							</div>
							<div>
								<h6>Extra Towel Racks</h6>
							</div>
						</AlwaysAtHolidazeCol>
						<AlwaysAtHolidazeCol>
							<div>
								<FontAwesomeIcon className='features-icon' icon={faUtensils} />
							</div>
							<div>
								<h6>Breakfasts Included - Local Produce</h6>
							</div>
						</AlwaysAtHolidazeCol>
					</AlwaysAtHolidazeRow>
				</AlwaysAtHolidazeContainer>
			</AlwaysAtHolidazeSection>
		</>
	);
}
