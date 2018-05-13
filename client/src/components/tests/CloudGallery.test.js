import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CloudGallery from "../CloudGallery";

configure({ adapter: new Adapter() });

describe("<Gallery />", () => {
  it("should render only the logo and log in button if not logged in", () => {
    const wrapper = shallow(<CloudGallery />);
    expect(wrapper.find(CloudGallery).toHaveLength(2));
  });
});
