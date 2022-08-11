const { response } = ('express');

const GetUser = (req, res = response) => {
    res.json({
        id: '1',
        msg: ('Bienvenido Controler')
    });
};

const PostUser = (req, res) => {
    res.json({
        id: '1',
        msg: ('POST_Bienvenido Controller')
    });
};

const DeleteUser = (req, res) => {
    res.json({
        id: '1',
        msg: ('DELETE_Bienvenido Controller')
    });
};

module.exports = {
    GetUser,
    PostUser,
    DeleteUser
}