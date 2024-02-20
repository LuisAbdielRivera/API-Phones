import { Router } from "express"
import { deletePhone, getAll, getOne, insertPhone, updatePhone } from "../controllers/phones.controller.js"
const router= Router()

router.get('/', getAll)
router.get('/:bc', getOne)
router.post('/', insertPhone)
router.post('/:bc', updatePhone)
router.get('/delete/:bc', deletePhone)

export default router;