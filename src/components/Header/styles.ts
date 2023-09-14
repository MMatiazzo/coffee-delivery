import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2rem auto 2rem;
`;

export const CartSettingsContainer = styled.div`
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
`;
