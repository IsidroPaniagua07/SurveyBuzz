import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="w-full h-[90%] flex">{children}</main>
    </>
  );
};

export default Layout;
