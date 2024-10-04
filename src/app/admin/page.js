import AdminHeader from './components/AdminHeader';
import Sidebar from './components/Sidebar';

export default function AdminLayout({ children }) {
    return (
        <div className="flex">
            <Sidebar /> {/* Sidebar remains fixed */}
            <div className="flex-grow">
                
                <main>{children}</main> {/* Main content will change */}
            </div>
        </div>
    );
}
