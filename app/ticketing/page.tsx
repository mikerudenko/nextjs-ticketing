"use client";

import { AppProvider, useApp } from "../app-context";
import IconAvailable from "@/components/IconAvailable";
import IconReserved from "@/components/IconReserved";
import IconSelected from "@/components/IconSelected";
import SVGIcons from "@/components/SVGIcons";
import { TicketingProvider, useTicketing } from "./ticketing-context";
import {
  HeaderContainer,
  HeaderTitle,
  HeaderButton,
  LegendContainer,
  LegendItem,
  LegendItemName,
  FillerSeat,
  Seat,
  Screen,
  TheaterContainer,
  TheaterScreen,
  TheaterSeats,
  DetailsContainer,
  DetailsHeading,
  DetailsButton,
  CheckoutContainer,
  CheckoutTotal,
  CheckoutAction,
} from "./styles";
// Component to inject the icon created through a symbol element
// Render the svg icon using the href passed as props
const Icon = ({
  href,
  size = 100,
  text,
}: {
  href: string;
  size: number;
  text?: string;
}) => {
  return (
    <svg className={href} width={size} height={size}>
      <use href={`#${href}`} />
      {text && (
        <text x="50" y="65" fontSize="2.7rem" textAnchor="middle" fill="#fff">
          {text}
        </text>
      )}
    </svg>
  );
};

// Header component, displaying a heading and two buttons

// phone screen as a rounded box with a noticeable shadow
// update the custom properties according to the theme variable

/******************* Logic: Start updating from here ************************/

// render the two buttons making use of the Icon component
const Header = () => {
  const { selectRandomSeat, deselectRandomSeat, selectedSeats } =
    useTicketing();
  const { toggleTheme, theme } = useApp();
  const buttons = ["plus", "minus"];
  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      <HeaderContainer>
        <HeaderTitle>Choose Seats</HeaderTitle>
        {buttons.map((button) => (
          <HeaderButton
            key={button}
            onClick={button === "plus" ? selectRandomSeat : deselectRandomSeat}
          >
            <Icon href={button} size="28" />
          </HeaderButton>
        ))}
        <IconSelected size={16} number={selectedSeats.length} />
      </HeaderContainer>
    </div>
  );
};

/**
 * Load icon files from svg. There's no need to change this component.
 */
const Legend = () => {
  return (
    <>
      <div style={{ display: "none" }}>
        <SVGIcons />
      </div>
      <LegendContainer>
        <LegendItem>
          <IconAvailable size={16} number={5} />
          <LegendItemName>Available</LegendItemName>
        </LegendItem>
        <LegendItem>
          <IconReserved size={16} />
          <LegendItemName>Reserved</LegendItemName>
        </LegendItem>
        <LegendItem>
          <IconSelected size={16} number={5} />
          <LegendItemName>Selected</LegendItemName>
        </LegendItem>
      </LegendContainer>
    </>
  );
};

/**
 * Render the grid of seats
 */
const Theater = () => {
  const { seats, toggleSeatSelection } = useTicketing();
  const FillerSeats = Array(4)
    .fill("")
    .map((item, i) => <FillerSeat key={i} />);

  const Seats = seats.map((seat, i) => (
    <Seat
      onClick={() => toggleSeatSelection(i)}
      data-index={i}
      data-status={seat}
      key={i}
    >
      <Icon href={seat} size="16" />
    </Seat>
  ));

  return (
    <TheaterContainer>
      <TheaterScreen>Screen</TheaterScreen>
      <TheaterSeats>
        {FillerSeats}
        {Seats}
      </TheaterSeats>
    </TheaterContainer>
  );
};

// for each selected seat include a button with the close icon
const Details = () => {
  const { toggleSeatSelection, selectedSeats } = useTicketing();
  return (
    <DetailsContainer>
      <DetailsHeading>Details</DetailsHeading>
      {selectedSeats.map((selectedSeat) => {
        const { seat, price } = selectedSeat;
        return (
          <DetailsButton key={seat} onClick={() => toggleSeatSelection(seat)}>
            Seat: {seat} Price: ${price}
            <Icon href="close" size="12" />
          </DetailsButton>
        );
      })}
    </DetailsContainer>
  );
};

const Checkout = () => {
  const { selectedSeats } = useTicketing();
  const totalPrice = selectedSeats.reduce(
    (total, seat) => total + seat.price,
    0
  );
  return (
    <CheckoutContainer>
      <CheckoutTotal>${totalPrice}</CheckoutTotal>
      <CheckoutAction>Checkout</CheckoutAction>
    </CheckoutContainer>
  );
};

// render the components making up the screen
// use the theme in the styled component
// pass the array of seats and the sum to the fitting components
const Phone = () => {
  const { theme } = useApp();
  return (
    <Screen theme={theme}>
      <Header />
      <Legend />
      <Theater />
      <Details />
      <Checkout />
    </Screen>
  );
};

/**
 * Page component to manage the state of the application and render the phone screen(s)
 * There are 3 state to a seat:
 * - reserved: reserved by other users and cannot be changed in this app
 * - available: available to be selected
 * - selected: selected by the current user
 *
 * Each seat has a price of 10, configured in the SEAT_PRICE constant
 */
const TicketingPage = () => {
  return (
    <AppProvider>
      <TicketingProvider>
        <div className="app w-full flex items-center justify-center">
          <Phone />
        </div>
      </TicketingProvider>
    </AppProvider>
  );
};

export default TicketingPage;
