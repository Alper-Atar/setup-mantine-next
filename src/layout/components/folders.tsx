import { Navbar } from '@mantine/core';

export function Folders(props: INavigationProps) {
    const {opened} = props;
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section>Section</Navbar.Section>
      <Navbar.Section grow mt="md">
        Section
      </Navbar.Section>
      <Navbar.Section>Section</Navbar.Section>
    </Navbar>
  );
}

export interface INavigationProps {
  opened: boolean;
}
