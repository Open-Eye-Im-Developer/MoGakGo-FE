import { sortingLanguages } from "../_utils/sortingLanguages";
import { Language } from "../_type/signup";

describe("sortingLanguages", () => {
  it("should sort the data by lines in descending order and calculate the percentage", () => {
    const mockData: Language[] = [
      {
        imageUrl: "https://www.google.com",
        language: "JavaScript",
        byteSize: 3000,
      },
      {
        imageUrl: "https://www.google.com",
        language: "TypeScript",
        byteSize: 5000,
      },
      {
        imageUrl: "https://www.google.com",
        language: "CSS",
        byteSize: 2000,
      },
    ];

    const result = sortingLanguages(mockData);

    expect(result).toEqual([
      {
        imageUrl: "https://www.google.com",
        language: "TypeScript",
        byteSize: 5000,
        percentage: 50.0,
      },
      {
        imageUrl: "https://www.google.com",
        language: "JavaScript",
        byteSize: 3000,
        percentage: 30.0,
      },
      {
        imageUrl: "https://www.google.com",
        language: "CSS",
        byteSize: 2000,
        percentage: 20.0,
      },
    ]);
  });
});
