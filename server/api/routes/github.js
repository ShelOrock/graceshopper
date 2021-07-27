import express from 'express'
import dotenv from 'dotenv';

if (process.env.NODE !== 'production') {
  dotenv.config();
}

const router = express.Router();

// router.get('/login', (_req, res) => {
//   res.redirect(
//     `https://github.com/login/oauth/authorize?client_id=${ process.env.GITHUB_CLIENT_ID }`
//   );
// });

// router.get('/callback', (req, _res, _next) => {

//   const { code } = req.query;

//   axios
//     .post(
//       `https://github.com/login/oauth/access_token?code=${ code }&client_id=${ process.env.GITHUB_CLIENT_ID }&client_secret=${ process.env.GITHUB_CLIENT_SECRET }`,
//       {},
//       { headers: { Accept: 'application/json' } }
//     )
//     .then(response => {
//       User.create({
//         githubAccessToken: response.data.access_token,
//         sessionId: req.cookies.session_id,
//         userType: 'GitHub User'
//       });
//     })
//     .then(() => {
//       User.destroy({
//         where: {
//           sessionId: req.cookies.session_id,
//           userType: 'Guest'
//         }
//       });
//     })
//     .catch(e => console.log('Error authentication with Github', e));
// });

// router.get('/user', (req, res, next) => {
//   axios
//     .get('https://api.github.com/user', {
//       headers: { Authorization: `token ${req.user.githubAccessToken}` }
//     })
//     .then(response => res.send(response.data))
//     .catch(e => console.log('Error while getting response from github user route.', e));
// });

export default router;
