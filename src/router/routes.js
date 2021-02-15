import React, { lazy } from 'react';

export const routes = [
    {
        path: '/home',
        exact: false,
        private: false,
        component: lazy(() => import('../components/pages/HomePage')),
        fallback: <div> Loading... </div>,
    },
    {
        path: '/projects',
        exact: false,
        private: false,
        component: lazy(() => import('../components/pages/ProjectsPage')),
        fallback: <div> Loading... </div>,
    },
    {
        path: '/skills',
        exact: false,
        private: false,
        component: lazy(() => import('../components/pages/SkillsPage')),
        fallback: <div> Loading... </div>,
    },
]