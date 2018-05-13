import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import Header from "../Header";

import reducers from "../../reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("should render the Header component", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Headers />
        </Provider>
      ).exists(<Headers />)
    ).toBe(true);
  });
});
