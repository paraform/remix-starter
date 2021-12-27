import { css } from "../../stitches.config";
import { ActionFunction, Form, MetaFunction, redirect } from "remix";
import { Button } from "~/components";
import { colorSchemeCookie, getColorScheme } from "../utils/cookies";
import { center } from "~/styles/layouts.styles";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme = currentColorScheme === "light" ? "dark" : "light";

  return redirect(request.url, {
    headers: {
      "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};

export default function Index() {
  return (
    <div className={center({ css: { colorway: "grey" } })}>
      <Form method="post">
        <Button type="submit" colorway="success">
          Click Me
        </Button>
      </Form>
    </div>
  );
}
