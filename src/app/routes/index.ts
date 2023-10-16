import express from 'express';
import { AuthRoutes } from '../modules/auth/routes';
import { UserRoutes } from '../modules/user/routes';
import { CategoryRoutes } from '../modules/category/routes';
import { CleaningServiceRoutes } from '../modules/cleaningServices/routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes
  },
  {
    path: "/users",
    routes: UserRoutes
  },
  {
    path: "/categories",
    routes: CategoryRoutes
  },
   {
    path: '/cleaning-service',
    routes: CleaningServiceRoutes,
  },
   {
    path: '/booking',
    routes: CleaningServiceRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
