import Link from "next/link";
import {FaGithub,FaLinkedin,FaSkype,FaFacebook} from "react-icons/fa"

const socialLinks=[
 {icons:<FaGithub/>,path:"https://github.com/deshanivanmali"},
 {icons:<FaLinkedin/>,path:"https://www.linkedin.com/in/deshani-vanmali-36013159"},
 {icons:<FaSkype/>,path:"skype:live:.cid.8a7641d0fc52dbf8?userinfo"},
 {icons:<FaFacebook/>,path:"https://www.facebook.com/deshani.vanmali?mibextid=ZbWKwL"}
]

const Socials = ({containerStyle,iconStyle}) => {
  return (
    <div className={containerStyle}>
      {
      socialLinks.map((item,index)=>{
       return <Link key={index} href={item.path} className={iconStyle}>{item.icons}</Link>
      })
      }
    </div>
  )
}

export default Socials
