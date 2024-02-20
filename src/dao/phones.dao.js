import Phones from '../models/phone.model.js'

const phoneDAO = {}

phoneDAO.getAll = async() => {
    const products = await Phones.find()
    return products
}

phoneDAO.getOne = async(bc) => {
    const product = await Phones.findOne({barcode:bc})
    return product
}

phoneDAO.insertPhone = async(product) => {
    const productSaved = new Phones(product)
    productSaved.save()
    return true
}

phoneDAO.updatePhone = async(bc, phone) =>{
    const phoneUpdated = await Phones.findOneAndUpdate({barcode:bc}, phone)
    if(phoneUpdated != null){
        return true
    }else
        return false
}

phoneDAO.deletePhone = async (bc) => {
    const phoneDeleted = await Phones.findOneAndDelete({barcode:bc})
    console.log(phoneDeleted)
    if(phoneDeleted!= null){
        return true
    }else
        return false
}

export default phoneDAO