import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="w-full h-[93%] flex">{children}</main>
    </>
  );
};

export default Layout;
