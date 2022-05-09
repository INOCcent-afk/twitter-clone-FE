import { getDays, getNumberOfDayBaseOnMonth } from "../datePicker";

describe("Date Picker", () => {
  describe("Months", () => {
    test("january should have an ending day of 31", () => {
      let endDay = getNumberOfDayBaseOnMonth("january");

      expect(endDay).toBe(31);
    });

    test("february should have an ending day of 29", () => {
      let endDay = getNumberOfDayBaseOnMonth("february");

      expect(endDay).toBe(29);
    });

    test("november should have an ending day of 31", () => {
      let endDay = getNumberOfDayBaseOnMonth("november");

      expect(endDay).toBe(30);
    });
  });

  describe("Days", () => {
    test("january should have a 31 days", () => {
      let day = getDays("january");

      expect(day).toHaveLength(31);
    });

    test("february should have a 29 days", () => {
      let day = getDays("february");

      expect(day).toHaveLength(30);
    });

    test("november should have a 30 days", () => {
      let day = getDays("november");

      expect(day).toHaveLength(30);
    });
  });
});
