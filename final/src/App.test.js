import { render, } from "@testing-library/react";
import { initializeTimes } from "./App";
import BookingForm from "./BookingForm";

test("initializeTimes returns the correct times", () => {
    render(<BookingForm/>)
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(initializeTimes)
});
