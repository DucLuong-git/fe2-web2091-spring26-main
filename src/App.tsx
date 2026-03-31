import { Toaster } from "react-hot-toast";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { Button, Layout } from "antd";
import { useContext } from "react";
import { userContext } from "./pages/context/UserContext";

import LoginPage from "./pages/context/login";
import { StoryList } from "./pages/Lab5";
import EditStory from "./pages/Lab6";

function App() {
  const { Header, Content, Footer } = Layout;
  const context = useContext(userContext);
  const handleLogout = () => {
    context?.setUser(null);
  };
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {context?.user ? (
              <>
                <img
                  src={context.user.avatar}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span>{context.user.name}</span>
                <Button size="small" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-gray-200">
                  Đăng nhập
                </Link>
                <Link to="/register" className="hover:text-gray-200">
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
      </div>

      <div>
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<StoryList />} />
              <Route path="/edit/:id" element={<EditStory />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <Toaster />
    </>
  );
}

export default App;