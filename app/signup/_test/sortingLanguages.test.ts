import { sortingLanguages } from "../_utils/sortingLanguages";

describe("sortingLanguages", () => {
  it("should sort the data by lines in descending order and calculate the percentage", () => {
    const mockData = [
      {
        image: "/images/JSIcon.webp",
        name: "JavaScript",
        lines: 3000,
      },
      {
        image: "/images/TSIcon.webp",
        name: "TypeScript",
        lines: 5000,
      },
      {
        image: "/images/CSSIcon.webp",
        name: "CSS",
        lines: 2000,
      },
    ];

    const result = sortingLanguages(mockData);

    expect(result).toEqual([
      {
        image: "/images/TSIcon.webp",
        name: "TypeScript",
        lines: 5000,
        percentage: 50.0,
      },
      {
        image: "/images/JSIcon.webp",
        name: "JavaScript",
        lines: 3000,
        percentage: 30.0,
      },
      {
        image: "/images/CSSIcon.webp",
        name: "CSS",
        lines: 2000,
        percentage: 20.0,
      },
    ]);
  });
});
