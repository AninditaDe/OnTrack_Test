import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchInput from "../SearchInput";

configure({ adapter: new Adapter() });

/* Can be extended */
describe("<SearchInput />", () => {
  it("render correctly text component <SearchInput/>", () => {
    const TextInputComponent = shallow(<SearchInput />);
    expect(TextInputComponent).toMatchSnapshot();
  });
});
