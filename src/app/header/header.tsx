import Link from "next/link"
export default function Header (){
return (
   

    <div className="header">
         <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
         <div className="search-container">
  <form action="/search" method="GET">
    <input type="text" placeholder="Search..." name="query" className="search-input"/>
    
  </form>
</div>
    <ul className="header-button">
        <li>
            Home
        </li>
        <Link href="/about-us">

            <li>
                About us
            </li>
        </Link>
        <Link href="/contact-us">
            <li>
                Contact us
            </li>
        </Link>
        <Link href="jobs">
            <li>Products</li>
        </Link>
    </ul>
    <img className="imglogo" src="https://cdn.discordapp.com/attachments/1297553960084701204/1297554025646129225/Logo.png?ex=671658db&is=6715075b&hm=232ce339443dba36ae4cf3af1c9287a3ac57708ee648f5cf9ae58e25a9bdcdd9&" alt="" />

    <img className="imgicons" src="https://cdn.discordapp.com/attachments/1297553960084701204/1297560394692562964/Icons.png?ex=67165ec9&is=67150d49&hm=fcf0cea82f09692dc09e9dc5db058c7e24990d7c2277419c7ea30b765fad535f&" alt="" />

</div>
)
}







