import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenedLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

const OpenedRestaurantCard = withOpenedLabel(RestaurantCard);

it("should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("4.4 stars");
  expect(resName).toBeInTheDocument();
});

it("should render RestaurantCard component with Opened Label Higher Order Component.", () => {
  //Homework test HOC : withPromotedLabel()

  render(<OpenedRestaurantCard resData={MOCK_DATA} />);
  const openText = screen.getByText("4.4 stars");
  expect(openText).toBeInTheDocument();
});
