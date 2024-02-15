const SidebarItem = ({ children }: { children: React.ReactNode }) => (
  <li>
    <a>{children}</a>
  </li>
);

export default SidebarItem;