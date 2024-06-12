import React from 'react'
import { Nav, Sidenav } from 'rsuite'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';

function AdminSideNav({ children }) {
    return (
        <div style={{ width: 240, display: 'flex' }}><Sidenav defaultOpenKeys={['3', '4']}>
            <Sidenav.Body style={{ height: '100vh', paddingTop: '10px', marginRight: "10px" }}>
                <Nav activeKey="1">
                    <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                        Statistique
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<GroupIcon />}>
                        Produits
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<GroupIcon />}>
                        Clients
                    </Nav.Item>
                </Nav>
            </Sidenav.Body>
        </Sidenav>{children}</div>
    )
}

export default AdminSideNav