import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import ProductDescription from "./components/shop_page/Product_Description/ProductDescription";
import ChatModal from "../src/components/ui/ChatModal/ChatModal";
import CurrencyConverter from "../src/components/ui/CurrencyConverter/CurrencyConverter";
import Dashboard from "./pages/Dashboard";
import PrivacyandPolicy from "./pages/PrivacyandPolicy";
import TermsAndCondition from "./pages/TermsAndConditions";
import FAQ from "./pages/FaqFooter";
import Blog1 from "./components/ui/blogpage/Blog1";
import Blog2 from "./components/ui/blogpage/Blog2";
import Blog3 from "./components/ui/blogpage/Blog3";
import Blog4 from "./components/ui/blogpage/Blog4";
import Blog5 from "./components/ui/blogpage/Blog5";
import Blog6 from "./components/ui/blogpage/Blog6";
import Blog7 from "./components/ui/blogpage/Blog7";
import Blog8 from "./components/ui/blogpage/Blog8";
import Blog9 from "./components/ui/blogpage/Blog9";
import Blog10 from "./components/ui/blogpage/Blog10";
import Blog11 from "./components/ui/blogpage/Blog11";
import Blog12 from "./components/ui/blogpage/Blog12";
import Blog13 from "./components/ui/blogpage/Blog13";
import Blog14 from "./components/ui/blogpage/Blog14";
import Blog15 from "./components/ui/blogpage/Blog15";
import Blog16 from "./components/ui/blogpage/Blog16";
import BlogUncat1 from "./components/ui/blogpage/BlogUncat1";
import BlogUncat2 from "./components/ui/blogpage/BlogUncat2";



function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/privacy_policy">
            <PrivacyandPolicy />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndCondition />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/product_description">
            <ProductDescription />
          </Route>
          <Route path="/Blog1">
            <Blog1 />
          </Route>
          <Route path="/Blog2">
            <Blog2 />
          </Route>
          <Route path="/Blog3">
            <Blog3 />
            </Route>
          <Route path="/Blog4">
            <Blog4 />
          </Route>
          <Route path="/Blog5">
            <Blog5 />
          </Route>
          <Route path="/Blog6">
            <Blog6 />
          </Route>
          <Route path="/Blog7">
            <Blog7 />
          </Route>
          <Route path="/Blog8">
            <Blog8 />
          </Route>
          <Route path="/Blog9">
            <Blog9 />
          </Route>
          <Route path="/Blog10">
            <Blog10 />
          </Route>
          <Route path="/Blog11">
            <Blog11 />
          </Route>
          <Route path="/Blog12">
            <Blog12 />
          </Route>
          <Route path="/Blog13">
            <Blog13 />
          </Route>  
          <Route path="/Blog14">
            <Blog14 />
          </Route>
          <Route path="/Blog15">
            <Blog15 />
          </Route>
          <Route path="/Blog16">
            <Blog16 />
            </Route> 
          <Route path="/BlogUncat1">
            <BlogUncat1 />
          </Route>
          <Route path="/BlogUncat2">
            <BlogUncat2 />
          </Route>
        </Switch>
        {/* chat modal */}
        <ChatModal />
        {/* chat modal */}
        <CurrencyConverter />
      </Layout>
    </div>
  );
}

export default App;


