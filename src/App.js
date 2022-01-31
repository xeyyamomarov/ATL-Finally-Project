import "./App.css";
import MainLayout from "containers/mainLayout";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import EmployeesPage from "pages/EmployeesPage";
import { DayOffPage, BusinessTripPage, GuestPage, ITSupplyPage, PurchasePage, VacationPage } from 'pages/InquiriesInquiriesPage';
import NotificationsPage from "pages/NotificationsPage";
import Users from "pages/Users/Users";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/day-off" element={<DayOffPage />} />
          <Route path="/business-trip" element={<BusinessTripPage />} />
          <Route path="/vacation" element={<VacationPage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/it-supply" element={<ITSupplyPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user-roles" element={<Users />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;