import Cookie from 'cookies';

export default function (req, res) {
    const cookies = new Cookie(req, res);

    const authToken = cookies.set('auth-token', 'Auth Token:' + Math.ceil(Math.random() * 1000));

    if(authToken) {
        return res.redirect(302, '/api/users');
    }

    return res.status(200).json({
        success: !!authToken,
        message: "Not redirected to /api/cookie because auth cookie could not be set",
        info: "Authenticated result"
    });
}