import Phones from '../models/phone.model.js'

const phoneDAO = {}

phoneDAO.getAll = async() => {
    const phones = await Phones.find()
    return phones
}

phoneDAO.phoneAll = async() => {
    const phones = await Phones.find()
    return phones
}

phoneDAO.getOne = async(bc) => {
    const phone = await Phones.findOne({barcode:bc})
    return phone
}

phoneDAO.insertPhone = async(phone) => {
    const phoneSaved = new Phones(phone)
    phoneSaved.save()
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