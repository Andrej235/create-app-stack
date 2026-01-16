export let useNavigate: () => (to: string) => Promise<void> | void = () => {
  throw new Error("NavigationStore is not set up yet");
};

export function setUseNavigate(
  navigateFn: () => (to: string) => Promise<void> | void,
) {
  useNavigate = navigateFn;
}
