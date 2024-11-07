import Link from "next/link";
import {FaGithub,FaLinkedin,FaSkype,FaFacebook,FaWhatsapp} from "react-icons/fa"

const socialLinks=[
 {icons:<FaGithub/>,path:"https://github.com/deshanivanmali"},
 {icons:<FaLinkedin/>,path:"https://www.linkedin.com/in/deshani-vanmali-36013159"},
 {icons:<FaSkype/>,path:"skype:live:.cid.8a7641d0fc52dbf8?userinfo"},
 {icons:<FaFacebook/>,path:"https://www.facebook.com/deshani.vanmali?mibextid=ZbWKwL"},
 {icons:<FaWhatsapp/>,path:"https://api.whatsapp.com/send?phone=919408316491&text=I%20have%20Requiement"}
]

const Socials = ({containerStyle,iconStyle}) => {
  return (
    <div className={containerStyle}>
      {
      socialLinks.map((item,index)=>{
       return <Link target="_blank" key={index} href={item.path} className={iconStyle}>{item.icons}</Link>
      })
      }
    </div>
  )
}

export default Socials
