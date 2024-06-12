'use client'
import { TableRefreshProvider } from "@/contexts/TableRefreshProvider";
import AdminSideNav from "../components/AdminSideNav";
import './adminstyle.css'
export default function DashboardLayout({ children }) {
    return (
        <section>
            <AdminSideNav>
                <TableRefreshProvider>
                    <div>
                        {children}
                    </div>
                </TableRefreshProvider>

            </AdminSideNav>
        </section>
    )
}