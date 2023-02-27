import express from 'express';
import { createUser } from '../controllers/usersController';
import { login } from '../controllers/loginController';

const router = express.Router();

router.get('/', function (req, res) {
  res.status(200).json({
    status: true,
    message: 'Hello :)',
  });
});

router.post('/register', createUser);
router.post('/login', login);

export default router;
