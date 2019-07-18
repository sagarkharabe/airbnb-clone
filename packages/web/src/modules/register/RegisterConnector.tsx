import React, { PureComponent } from "react";
import { RegisterView } from "./ui/RegisterView";

export default class RegisterConnector extends PureComponent {
  dummysubmit = async (values: any) => {
    console.log("Vla ", values);
    return null;
  };
  render() {
    return <RegisterView submit={this.dummysubmit} />;
  }
}
