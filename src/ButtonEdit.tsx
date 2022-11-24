import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function ButtonEdit(args: any) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ opacity: 0, position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        external={externalCloseBtn}
        {...args}
      >
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="examplePassword">Name</Label>
              <Input
                id="Name"
                name="Name"
                placeholder="Name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="E-mail"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Gender</Label>
              <Input
                id="exampleSelectMulti"
                name="selectMulti"
                type="select"
              >
                <option>Male</option>
                <option>Female</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
              />
            </FormGroup>
            
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ButtonEdit;
