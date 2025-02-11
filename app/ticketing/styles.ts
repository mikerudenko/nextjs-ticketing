import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    bottom: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
    width: 1rem;
    height: 0.3rem;
    border-radius: 15px;
    background: hsl(0, 0%, 90%);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  flex-grow: 1;
  font-weight: 900;
`;

export const HeaderButton = styled.button`
  color: inherit;
  background: none;
  border: 1px solid hsl(0, 0%, 92%);
  border-radius: 50%;
  margin: 0 0.25rem;
  width: 28px;
  height: 28px;
  padding: 0.35rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  margin: 1.25rem 0;
  justify-content: center;
`;

export const LegendItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.35rem;

  svg {
    margin-right: 0.2rem;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
`;

export const LegendItemName = styled.span`
  text-transform: capitalize;
  color: hsl(0, 0%, 75%);
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 0.6rem;
`;

export const TheaterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.75rem 0;
`;

export const TheaterScreen = styled.p`
  text-align: center;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  color: hsl(0, 0%, 80%);
  border-radius: 20px;
  border: 1px solid currentColor;
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  background: inherit;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translate(0%, -50%);
    width: 70px;
    height: 1px;
    background: currentColor;
  }
  &:before {
    right: 100%;
  }
  &:after {
    left: 100%;
  }
`;

export const TheaterSeats = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(10, 18px);
  grid-template-rows: repeat(10, 18px);
  grid-gap: 0.75rem 0.3rem;
  grid-auto-flow: dense;
`;

export const FillerSeat = styled.div`
  visibility: hidden;
  opacity: 0;
  &:nth-child(2) {
    grid-column: 10/11;
    grid-row: 1/2;
  }
  &:nth-child(3) {
    grid-row: 6/11;
    grid-column: 1/2;
  }
  &:nth-child(4) {
    grid-column: 10/11;
    grid-row: 6/11;
  }
`;

export const Seat = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0.25rem;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 90%);
    border-radius: 5px;
  }
`;

export const DetailsHeading = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 0;
`;

export const DetailsButton = styled.button`
  flex-shrink: 0;
  background: none;
  font-family: inherit;
  font-size: 0.7rem;
  color: hsl(0, 0%, 70%);
  border: 1px solid currentColor;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin: 0 0.5rem;
  display: flex;
  align-items: flex-end;
  text-transform: capitalize;

  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.35rem;
    pointer-events: none;
  }
`;

export const CheckoutContainer = styled.button`
  margin-top: 1.75rem;
  width: 100%;
  background: var(--accent, #fd6d8e);
  box-shadow: 0 2px 5px -4px currentColor;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  font-family: inherit;
  color: var(--background, #ffffff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckoutTotal = styled.strong`
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
`;

export const CheckoutAction = styled.span`
  font-size: 0.9rem;
`;

export const Screen = styled.div`
  --color: ${({ theme }) => (theme === "light" ? "#2c2f62" : "#eee")};
  --background: ${({ theme }) => (theme === "light" ? "#fff" : "#2c2f62")};
  --accent: ${({ theme }) => (theme === "light" ? "#fd6d8e" : "#fcb43c")};
  border-radius: 30px;
  width: 300px;
  min-height: 500px;
  color: var(--color, #2c2f62);
  background: var(--background, #ffffff);
  padding: 2rem 2rem 1.25rem;
  box-shadow: 0 2px 10px -8px hsla(0, 0%, 0%, 0.4);
  margin: 1rem;
`;
