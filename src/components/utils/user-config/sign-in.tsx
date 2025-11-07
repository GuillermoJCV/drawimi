import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/chakra-ui/password-input";
import { useForm } from "react-hook-form";
import { useSignInEmailPass, useProvider } from "@/hooks/firebase";
import { Provider } from "@/constants/utils/auth-providers";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";

interface FormValues {
  email: string;
  password: string;
}

function SignIn() {
  const signWithGoogle = useProvider(Provider.GOOGLE);
  const signWithFacebook = useProvider(Provider.FACEBOOK);
  const signWithTwitter = useProvider(Provider.TWITTER);
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
      <Stack gap="4" align="center">
        <Field.Root invalid={!!errors.email} colorPalette="green">
          <Field.Label>Username or Email</Field.Label>
          <Input {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password} colorPalette="green">
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit" colorPalette="green">
          Sign Up
        </Button>
        <Button colorPalette="white" w="full" onClick={() => signWithGoogle()}>
          Sign with
          <BsGoogle />
        </Button>
        <Button colorPalette="blue" w="full" onClick={() => signWithFacebook()}>
          Sign with
          <BsFacebook />
        </Button>
        <Button colorPalette="teal" w="full" onClick={() => signWithTwitter()}>
          Sign with
          <BsTwitter />
        </Button>
      </Stack>
    </form>
  );
}

export default SignIn;
