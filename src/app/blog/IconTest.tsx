import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import { IconProps } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react/dist/ssr/index";
type IconPropsExtended = IconProps & {
  name: keyof typeof PhosphorIcons; // Ensures type safety for icon names
};
export default function testIcon({ name }: IconPropsExtended) {
  const IconComp = PhosphorIcons[name];
  if (!IconComp) {
    console.error(`Icon "${name}" not found in Phosphor Icons`);
    return <span>Icon not found</span>; // Fallback UI
  }[
  return <IconComp size={100} weight="duotone" color={"currentColor"} />;
}
