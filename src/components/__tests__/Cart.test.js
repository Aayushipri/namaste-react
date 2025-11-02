import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   })
// );

it("should Load restaurant menu component.", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Pot Rice (3)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(3);
});

it("should check whether Cart 0 items present in the document ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getByText("Cart ( 0 items)")).toBeInTheDocument();
});

it("should check click on the Add button and change in Cart items in Header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Pot Rice (3)");
  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByRole("button", {
    name: "Add",
  });

  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart ( 1 items)")).toBeInTheDocument();
});

it("should check two times click on the Add button and change in Cart items in Header ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Pot Rice (3)");
  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByRole("button", {
    name: "Add",
  });

  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart ( 3 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  // fireEvent.click(
  //   screen.getByRole("button", {
  //     name: "Clear cart",
  //   })
  // );

  // expect(screen.getAllByTestId("foodItems").length).toBe(3);
  // expect(
  //   screen.getByText("Cart is empty. Add items to the cart.")
  // ).toBeInTheDocument();
});

it("should check whether Clear Cart button in Cart page working fine or not ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Pot Rice (3)");
  fireEvent.click(accordianHeader);

  fireEvent.click(
    screen.getByRole("button", {
      name: "Clear cart",
    })
  );

  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  expect(
    screen.getByText("Cart is empty. Add items to the cart.")
  ).toBeInTheDocument();
});
