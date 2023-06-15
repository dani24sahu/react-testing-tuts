import { fireEvent, render } from "@testing-library/react";
import CommentForm from "../components/CommentForm";

test("Initial Conditions", () => {
  render(<CommentForm />);

  const commentInput = screen.getByRole("textBox");

  // Testing Input field exists or not
  expect(commentInput).toBeInTheDocument()

  const checkBox = screen.getByLabelText('I agree terms and conditions', {exact:false})
  expect(checkBox).toBeInTheDocument()

  const submitBtn = screen.getByRole("button", {name:'comment', exact:false})
  expect(submitBtn).toBeDisabled()
});

test("Enable submit button on type and check-box click", ()=>{
    render(<CommentForm />);

    const checkBox = screen.getByLabelText('I agree terms and conditions', {exact:false})

    const submitBtn = screen.getByRole("button", {name:'comment', exact:false})

    const commentInput = screen.getPlaceholderText('write your comment here', {exact:false})


    fireEvent.change(commentInput, {target:{value:"text"}})
    fireEvent.click(checkBox)

    expect(submitBtn).toBeEnabled()

    fireEvent.click(checkBox)
    expect(submitBtn).toBeDisabled()
})
