const {login}=require("../controllers/login.js");
const {getCharById}=require("../controllers/getCharById");
const {postPedido}=require("../controllers/postPedido.js")
const {deleteFav}=require("../controllers/deleteFav.js")
const {postUser}=require("../controllers/postUser.js")
const {getPedido}=require("../controllers/getPedido.js")
const {postIngrediente}=require("../controllers/postIngrediente.js");
const {postPizza} = require("../controllers/postPizza.js");
const {postPrecio} =require("../controllers/postPrecios.js");
const {getPrecios} =require ("../controllers/getPrecios.js")
const router = require("express").Router();

router.get("/login",login);
router.get("/precio", getPrecios)
router.get("/character/:id",getCharById);
router.get("/pedido",getPedido);
router.post("/login",postUser);
router.post("/pedido",postPedido);
router.post("/delete",deleteFav)
router.post("/ingrediente",postIngrediente)
router.post("/pizza",postPizza)
router.post("/precio", postPrecio)

module.exports=router;