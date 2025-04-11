import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"

// Context
import { AuthProvider } from "./context/AuthContext"

// Public Pages
import LandingPage from "./pages/LandingPage"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import OTPVerification from "./pages/auth/OTPVerification"

// User Pages
import UserDashboard from "./pages/user/Dashboard"
import Questionnaire from "./pages/user/Questionnaire"
import Catalog from "./pages/user/Catalog"
import Cart from "./pages/user/Cart"
import Checkout from "./pages/user/Checkout"
import OrderConfirmation from "./pages/user/OrderConfirmation"
import UserProfile from "./pages/user/Profile"
import UserOrders from "./pages/user/Orders"

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard"
import AdminProducts from "./pages/admin/Products"
import AdminOrders from "./pages/admin/Orders"
import AdminFeedback from "./pages/admin/Feedback"
import AdminMerchants from "./pages/admin/Merchants"

// Merchant Pages
import MerchantDashboard from "./pages/merchant/Dashboard"
import AddProduct from "./pages/merchant/AddProduct"
import ProductStatus from "./pages/merchant/ProductStatus"

// Components
import PrivateRoute from "./components/routing/PrivateRoute"
import RoleRoute from "./components/routing/RoleRoute"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyles />
        <Header />
        <main>
          <Toaster position="top-right" toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#4aed88',
              }
            },
            error: {
              duration: 4000,
              theme: {
                primary: '#ff4b4b',
              }
            }
          }} />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify-otp" element={<OTPVerification />} />

            {/* User Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <UserDashboard />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/questionnaire"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <Questionnaire />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/catalog"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <Catalog />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <Cart />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <Checkout />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/order-confirmation"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <OrderConfirmation />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <UserProfile />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["user"]}>
                    <UserOrders />
                  </RoleRoute>
                </PrivateRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["admin"]}>
                    <AdminDashboard />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["admin"]}>
                    <AdminProducts />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["admin"]}>
                    <AdminOrders />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/feedback"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["admin"]}>
                    <AdminFeedback />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/merchants"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["admin"]}>
                    <AdminMerchants />
                  </RoleRoute>
                </PrivateRoute>
              }
            />

            {/* Merchant Routes */}
            <Route
              path="/merchant/dashboard"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["merchant"]}>
                    <MerchantDashboard />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/merchant/add-product"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["merchant"]}>
                    <AddProduct />
                  </RoleRoute>
                </PrivateRoute>
              }
            />
            <Route
              path="/merchant/product-status"
              element={
                <PrivateRoute>
                  <RoleRoute roles={["merchant"]}>
                    <ProductStatus />
                  </RoleRoute>
                </PrivateRoute>
              }
            />

            {/* Redirect for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  )
}

export default App
