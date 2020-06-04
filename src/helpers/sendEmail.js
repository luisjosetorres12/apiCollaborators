const nodemailer = require('nodemailer')
const transporter  = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth:{
    type:'login',
    user:'collaboratorsApp@gmail.com',
    pass:'ljtorres12'
  }
})
class SendEmail{
  
  associateToOrder(){
    let mailOptions = {
      from: 'Remitente',
      to:'luis.torres784@gmail.com',
      subject:'Correo de Prueba',
      text:'<h2>Has sido asociado a una orden</h2>'
    }
    transporter.sendMail(mailOptions,function(err,info){
      if(err){
        console.log(err)
      }else{
        return true
      }
    })
  }
  createAccount(user){
    let mailOptions = {
      from: 'Remitente',
      to:user.email,
      subject:'Correo de Prueba',
      text:`<h2>Hola ${user.name} tu registro en Collaborators ha sido exitoso</h2>`
    }
    transporter.sendMail(mailOptions,function(err,info){
      if(err){
        console.log(err)
      }else{
        return true
      }
    })
  }
}

module.exports = SendEmail