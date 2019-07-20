import React, { PureComponent } from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@airbnb/controller";
export default class RegisterConnector extends PureComponent {
  dummysubmit = async (values: any) => {
    console.log("Vla ", values);
    return null;
  };
  render() {
    return (
      <React.Fragment>
        <RegisterController />
        <RegisterView submit={this.dummysubmit} />
      </React.Fragment>
    );
  }
}
