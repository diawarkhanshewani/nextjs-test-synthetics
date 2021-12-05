import Cookie from 'cookies';

export default function (req, res) {
    const cookies = new Cookie(req, res);

    const authToken = cookies.get('auth-token');

    if(!authToken) {
        return res.redirect(302, '/api/auth');
    }

    return res.status(200).json({
        data: [
            {
                id: 'uvwlke',
                name: 'John Doe',
                age: 39,
            },
            {
                id: 'uikmnk',
                name: 'Michael Jordan',
                age: 42,
            }
        ],
        success: true,
        message: 'Auth Token found in cookie',
        info: "This page will redirect to /auth if auth cookie couldn't be found"
    });
}