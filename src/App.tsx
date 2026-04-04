import { Toaster } from "react-hot-toast";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { Button, Layout } from "antd";

import { useAuthStore } from "./stores/useAuthStore";
import { StoryList } from "./pages/Lab5";
import EditStory from "./pages/Lab6";
import RegisterPage from "./pages/context/Register";
import LoginPage from "./pages/context/login";

function App() {
  const { Header, Content, Footer } = Layout;
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
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
            {user ? (
                <>
                  <span>{user.email}</span>
                  <span className="text-green-300">Đã đăng nhập</span>

                  <Button size="small" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : ( 
                <>
                  <Link to="/login">Đăng nhập</Link>
                  <Link to="/register">Đăng ký</Link>
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
              <Route path="/register" element={<RegisterPage />} />
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
