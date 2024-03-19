import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare } from "react-icons/fa";

export default function SocialShareBtns({url, title}) {
  return (
    <div className="w-full flex gap-3">
        <a 
            href={`https://www.facebook.com/dialog/share?app_id=1753359791821410&display=popup&href=${url}`} 
            target="_blank" 
            rel="noreferrer"
        >
            <FaFacebookSquare className="text-[#3b5998] w-10 h-auto" />
        </a>
        <a 
            href={`https://www.twitter.com/intent/tweet?url=${url}`} 
            target="_blank" 
            rel="noreferrer"
        >
            <FaTwitterSquare className="text-[#00acee] w-10 h-auto" />
        </a>
        <a 
            href={`https://www.reddit.com/submit?url=${url}$title=${title}`} 
            target="_blank" 
            rel="noreferrer"
        >
            <FaRedditSquare className="text-[#ff4500] w-10 h-auto" />
        </a>
        <a 
            href={`https://www.api.whatsapp.com/send/?text=${url}`}  
            target="_blank" 
            rel="noreferrer"
        >
            <FaWhatsappSquare className="text-[#25d366] w-10 h-auto" />
        </a>
    </div>
  )
}
