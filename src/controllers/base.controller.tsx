import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Button, Box, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Home from "./home.controller";

const AUTHENTICATE = gql`
  mutation Authenticate($client: String!, $password: String!) {
    authenticate(client: $client, password: $password) {
      token
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $city: String!
    $state: String!
    $country: String!
    $linkedIn: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      city: $city
      state: $state
      country: $country
      linkedIn: $linkedIn
    ) {
      firstName
      lastName
    }
  }
`;

function CreateUserForm() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      state: "",
      country: "",
      linkedIn: "",
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  if (data) {
    console.log(data);
  }

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => createUser({ variables: values }))}
      >
        <TextInput
          label="First Name"
          placeholder="John"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          placeholder="Doe"
          {...form.getInputProps("lastName")}
        />
        <TextInput
          label="Phone Number"
          {...form.getInputProps("phoneNumber")}
        />
        <TextInput label="City" {...form.getInputProps("city")} />
        <TextInput label="State" {...form.getInputProps("state")} />
        <TextInput label="Country" {...form.getInputProps("country")} />
        <TextInput label="LinkedIn" {...form.getInputProps("linkedIn")} />
        <Button type="submit">Create New User</Button>
      </form>
    </Box>
  );
}

export default function BaseController() {
  const [workflow, setWorkflow] = useState("None");
  return (
    <div>
      <p>What would you like to do today?</p>
      {workflow === "None" && (
        <>
          <ul>
            <div>
              <li>
                <Button
                  type="button"
                  onClick={() => setWorkflow("create:user")}
                >
                  Create a new user?
                </Button>
              </li>
            </div>
            <li>
              <Button
                type="button"
                onClick={() => setWorkflow("workflow:home")}
              >
                Home Workflow
              </Button>
            </li>
          </ul>
        </>
      )}
      {workflow === "workflow:home" && <Home />}
    </div>
  );
}
