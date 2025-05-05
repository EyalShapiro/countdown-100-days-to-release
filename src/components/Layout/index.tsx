import React, { type ReactNode } from "react";
import styled from "styled-components";

const Background = styled.div`
	background: url("/src/assets/background.jpg") no-repeat center/cover;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BlurredBox = styled.div`
	backdrop-filter: blur(10px);
	background: rgba(255, 255, 255, 0.2);
	border-radius: 12px;
	padding: 2rem;
	text-align: center;
	max-width: 90%;
	width: 400px;

	@media (max-width: 480px) {
		width: 90%;
		padding: 1.5rem;
	}
`;

interface LayoutProps {
	children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
	<Background>
		<BlurredBox>{children}</BlurredBox>
	</Background>
);
