import { Router } from "express"
import { deletePhone, getAll, getOne, insertPhone, updatePhone, phoneAll } from "../controllers/phones.controller.js"
const router= Router()

router.get('/', getAll)
router.get('/:bc', getOne)
router.post('/', insertPhone)
router.post('/:bc', updatePhone)
router.get('/delete/:bc', deletePhone)
router.get('/products', phoneAll)

export default router;