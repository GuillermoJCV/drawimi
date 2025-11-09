import Provider from "@/components/chakra-ui/provider";
import FirebaseProvider from "@/components/context/firebase-context";
import { render as rtlRender } from "@testing-library/react";

export function render(ui: React.ReactNode) {
  return rtlRender(<>{ui}</>, {
    wrapper: (props: React.PropsWithChildren) => (
      <Provider>
        <FirebaseProvider>{props.children}</FirebaseProvider>
      </Provider>
    ),
  });
}
