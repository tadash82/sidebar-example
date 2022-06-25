import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain } from "./styles";

function Layout({ children }) {
  return (
    <SLayout>
      <Sidebar />
      <SMain>{children}</SMain>
    </SLayout>
  );
}

export default Layout;
