const {login}=require("../controllers/login.js");
const {getCharById}=require("../controllers/getCharById");
const {postPedido}=require("../controllers/postPedido.js")
const {deleteFav}=require("../controllers/deleteFav.js")
const {postUser}=require("../controllers/postUser.js")
const {getPedido}=require("../controllers/getPedido.js")
const {postIngrediente}=require("../controllers/postIngrediente.js")
const router = require("express").Router();

router.get("/login",login);
router.post("/login",postUser);
router.get("/character/:id",getCharById);
router.get("/pedido",getPedido);
router.post("/pedido",postPedido);
router.post("/delete",deleteFav)
router.post("/ingrediente",postIngrediente)


module.exports=router;