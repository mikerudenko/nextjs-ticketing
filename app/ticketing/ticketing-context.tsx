import React, { createContext, useContext, useState } from "react";
import { INITIAL_SEAT_MAP } from "@/components/constants";

const SEAT_PRICE = 10;

const TicketingContext = createContext(null);

export const TicketingProvider = ({ children }) => {
  const [seats, setSeats] = useState(INITIAL_SEAT_MAP);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [randomlySelectedSeats, setRandomlySelectedSeats] = useState([]);

  const selectRandomSeat = () => {
    const availableSeats = seats
      .map((seat, index) => (seat === "available" ? index : null))
      .filter((index) => index !== null);
    if (availableSeats.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSeats.length);
      const newSeats = [...seats];
      newSeats[availableSeats[randomIndex]] = "selected";
      setSeats(newSeats);
      setSelectedSeats((prev) => [
        ...prev,
        { seat: availableSeats[randomIndex], price: SEAT_PRICE },
      ]);
      setRandomlySelectedSeats((prev) => [
        ...prev,
        availableSeats[randomIndex],
      ]);
    }
  };

  const deselectRandomSeat = () => {
    if (randomlySelectedSeats.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * randomlySelectedSeats.length
      );
      const seatToDeselect = randomlySelectedSeats[randomIndex];
      const newSeats = [...seats];
      newSeats[seatToDeselect] = "available";
      setSeats(newSeats);
      setSelectedSeats((prev) =>
        prev.filter((seat) => seat.seat !== seatToDeselect)
      );
      setRandomlySelectedSeats((prev) =>
        prev.filter((seat) => seat !== seatToDeselect)
      );
    }
  };

  const toggleSeatSelection = (index) => {
    const newSeats = [...seats];
    if (newSeats[index] === "available") {
      newSeats[index] = "selected";
      setSelectedSeats((prev) => [...prev, { seat: index, price: SEAT_PRICE }]);
    } else if (newSeats[index] === "selected") {
      newSeats[index] = "available";
      setSelectedSeats((prev) => prev.filter((seat) => seat.seat !== index));
      setRandomlySelectedSeats((prev) => prev.filter((seat) => seat !== index));
    }
    setSeats(newSeats);
  };

  return (
    <TicketingContext.Provider
      value={{
        seats,
        selectedSeats,
        selectRandomSeat,
        deselectRandomSeat,
        toggleSeatSelection,
      }}
    >
      {children}
    </TicketingContext.Provider>
  );
};

export const useTicketing = () => useContext(TicketingContext);
