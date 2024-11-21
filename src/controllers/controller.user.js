import serviceUser from "../services/service.user.js";

async function Inserir (req, res) {

    const { name, email, password } = req.body;

    const user = await serviceUser.Inserir(name, email, password);

    if(email === email)
      res.status(401).json({error: "E-mail ja existe"});
    else
    res.status(201).json(user);
}

async function Login (req, res) {

    const {email, password } = req.body;

    const user = await serviceUser.Login(email, password);

    if(user.length == 0)
        res.status(401).json({error: "E-mail ou senha invalida"});
    else
    res.status(200).json(user);
}

async function Profile(req, res) {
    
    const id_user = req.id_user;
    const user = await serviceUser.Profile(id_user);

    res.status(200).json(user)
}

async function InserirAdmin (req, res) {

    const { name, email, password } = req.body;

    const user = await serviceUser.InserirAdmin(name, email, password);

    res.status(201).json(user);
}

async function LoginAdmin (req, res) {

    const {email, password } = req.body;

    const user = await serviceUser.LoginAdmin(email, password);

    if(user.length == 0)
        res.status(401).json({error: "E-mail ou senha invalida"});
    else
    res.status(200).json(user);
}

/*async function Validar(req, res) {
    const { email } = req.query;

  try {
    const user = await findUserByEmail(email);

    if (user) {
      return res.status(200).json({ exists: true });
    }
    return res.status(200).json({ exists: false });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao verificar o e-mail' });
  }
}*/

async function Listar (req, res) {

  const user = await serviceUser.Listar();

  res.status(200).json(user);
}

export default { Inserir, Login, Profile, InserirAdmin, LoginAdmin, Listar }; 