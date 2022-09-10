import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Tabs, Tab, Container, Typography, Badge } from '@mui/material';
import { ListContext } from '../contexts/ListProvider';

export const Header = () => {
    const { history } = useContext(ListContext);
    const location = useLocation();
    return (
        <Container>
            <AppBar position="relative" color="primary" sx={{ marginTop: '16px' }}>
                <Tabs
                    value={location.pathname}
                    indicatorColor="secondary"
                    textColor="secondary"
                >
                    <Tab component={NavLink}
                        to='/to-do-list-react'
                        label={
                            <Typography
                                sx={{ p: 0.5 }}
                                color={location.pathname === '/to-do-list-react' ? 'secondary' : 'primary.contrastText'}>
                                Main
                            </Typography>

                        } value={'/to-do-list-react'}
                    />
                    <Tab component={NavLink}
                        to='/to-do-list-react/archive'
                        label={
                            <Badge badgeContent={history.filter(item => item.complete).length} color="error" max={99}>
                                <Typography
                                    sx={{ p: 0.5 }}
                                    color={location.pathname === '/to-do-list-react/archive' ? 'secondary' : 'primary.contrastText'}>
                                    Archive
                                </Typography>
                            </Badge>
                        }
                        value={'/to-do-list-react/archive'}
                    />
                </Tabs>
            </AppBar>
        </Container>
    )
};