import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/chakra-ui/password-input";
import { useForm } from "react-hook-form";
import { useCreateEmailPass } from "@/hooks/firebase/auth/firebase";

interface FormValues {
  email: string;
  password: string;
}

function SignUp() {
  const signUp = useCreateEmailPass();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    signUp(data.email, data.password);
  });

  return (
    <form data-testid={TestId.FORM} onSubmit={onSubmit}>
      <Stack gap="4" align="center" colorPalette="green">
        <Field.Root data-testid={TestId.FIELD_EMAIL} invalid={!!errors.email}>
          <Field.Label>Username or Email</Field.Label>
          <Input {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root
          data-testid={TestId.FIELD_PASSWORD}
          invalid={!!errors.password}
        >
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Sign Up</Button>
      </Stack>
    </form>
  );
}

enum TestId {
  FORM = "form-sign-up-test-id",
  FIELD_EMAIL = "form-sign-up-field-email-test-id",
  FIELD_PASSWORD = "form-sign-up-field-password-test-id",
}
export default SignUp;
export { TestId };
