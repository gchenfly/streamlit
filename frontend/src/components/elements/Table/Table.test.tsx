/**
 * @license
 * Copyright 2018-2020 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import { mount } from "enzyme"
import { fromJS } from "immutable"

import mock from "./mock"
import { Table, Props } from "./Table"
import { Table as ReactTable } from "reactstrap"

const getProps = (elementProps: object = {}): Props => ({
  element: fromJS({
    ...mock,
    ...elementProps,
  }),
  width: 0,
})

describe("Table Element", () => {
  it("renders without crashing", () => {
    const props = getProps()
    const wrapper = mount(<Table {...props} />)

    expect(wrapper.find(ReactTable).length).toBe(1)
    expect(wrapper.find(".stTable").length).toBe(1)
  })
})
