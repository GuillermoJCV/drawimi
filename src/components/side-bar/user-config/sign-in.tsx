import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/chakra-ui/password-input";
import { useForm } from "react-hook-form";
import { useSignInEmailPass } from "@/hooks/firebase";

interface FormValues {
  email: string;
  password: string;
}

function SignIn() {
  const signIn = useSignInEmailPass();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    signIn(data.email, data.password);
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="center" colorPalette="green">
        <Field.Root invalid={!!errors.email}>
          <Field.Label>Username or Email</Field.Label>
          <Input {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Sign Up</Button>
      </Stack>
    </form>
  );
}

export default SignIn;
