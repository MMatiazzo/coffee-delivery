import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2.5rem 7rem;

	div.location-cart {
		padding: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;

		span {
			padding: 0.5rem;

			display: flex;
			align-items: center;
			gap: 0.2rem;

			background: ${(props) => props.theme['purple-ligth']};
			border-radius: 8px;

			color: ${(props) => props.theme['purple-dark']};

			.location {
				color: ${(props) => props.theme['purple-base']};
			}
		}

		button.shopping-cart {
			border: none;
			border-radius: 8px;

			padding: 0.4rem;

			background: ${(props) => props.theme['yellow-ligth']};
			color: ${(props) => props.theme['yellow-dark']};

			cursor: pointer;
		}
	}
`;
