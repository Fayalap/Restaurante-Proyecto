const {login}=require("../controllers/login.js");
const {getCharById}=require("../controllers/getCharById");
const {postPedido}=require("../controllers/postPedido.js")
const {deleteFav}=require("../controllers/deleteFav.js")
const {postUser}=require("../controllers/postUser.js")
const {getPedido}=require("../controllers/getPedido.js")
const {postIngrediente}=require("../controllers/postIngrediente.js");
const {postPromo} = require("../controllers/postPromo.js");
const {getPromos} = require("../controllers/getPromos.js");
const {postPrecio} =require("../controllers/postPrecios.js");
const {getPrecios} =require ("../controllers/getPrecios.js");
const { putInfoUser } = require("../controllers/putInfoUser.js");
const router = require("express").Router();

router.get("/login",login);
router.post("/total", getPrecios)
router.get("/character/:id",getCharById);
router.get("/pedido",getPedido);
router.get("/promos", getPromos);
router.post("/login",postUser);
router.post("/pedido",postPedido);
router.post("/delete",deleteFav)
router.post("/ingrediente",postIngrediente)
router.post("/promo",postPromo)
router.post("/precio", postPrecio)
router.put("/info",putInfoUser)
module.exports=router;