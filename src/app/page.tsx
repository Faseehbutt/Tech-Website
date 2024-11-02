
import Header from "@/app/header/header"
import Image from "next/image"
 

export default function Home() {
  return (

    <div className="body">
      <Header />
      <div className="promo-section">
        <div className="promo-text">
          <h4>Pro.Beyond.</h4>
          <h1>iPhone 14 <span>Pro</span></h1>
          <p>Created to change everything for the better. For everyone</p>
          <a href="#" className="promo-button">Shop Now</a>
        </div>
        <img className="img1" src="https://cdn.discordapp.com/attachments/1190584636854771802/1297448120891736134/iphone.png?ex=6715f639&is=6714a4b9&hm=ed75c1c58be8a0de6b3089fec845dfc9866dd2a825666b1cb2ac915b655e1fb2&" alt="" />

      </div>
      <div className="productlist">
        <img className="psimg" src="https://cdn.discordapp.com/attachments/1297553960084701204/1297983937905168525/PlayStation.png?ex=6717e93e&is=671697be&hm=4a22514fecb989491685194075c58fc6dc2f1352923d04cfb14f82029559e306&" alt="" />
        <div className="playstation-info">
          <h1>Playstation 5</h1>
          <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p></div>
      </div>
      <div className="macspace"><img className="macimg" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298199584564314134/MacBook_Pro_14.png?ex=6718b214&is=67176094&hm=5baf1c8191bb4c436d1217b60745b767b249db8bd6d0fdec3857a69852e623b0&" alt="" /></div>


      <div className="macbook">
        <div className="macbooktext">
          <h1>Macbook <br /><span>Air</span></h1>
          <p>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <a href="#" className="shopbutton">Shop Now</a>
        </div>
      </div>
      <div className="airpodsmax">
        <img className="airpodsimg" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298318017851166739/hero__gnfk5g59t0qe_xlarge_2x_1.png?ex=67192061&is=6717cee1&hm=6ac6fb5cd053dd5a53063ae03fdbdfd1ef0364e65ce2756a03b904a2d00de7f4&" alt="" />
      </div>
      <div className="airpodstext">
        <h1>Apple AirPods<br /><span>Max</span></h1>
        <p>Computational audio. Listen, it's powerful</p></div>
      <div className="visionpro"><img className="visionproimg" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298587313122705488/image_36_1.png?ex=671a1b2e&is=6718c9ae&hm=eb60a8aaeedb92918a6ed61d158f4b7110d0679b96885e902b7a781167db47fe&" alt="" /></div>

      <div className="visionprotext">
        <h1>Apple Vision<br /><span>Pro</span></h1>
        <p>An immersive way to experience <br /> entertainment</p></div>
      <div className="categories">
        <h1>Browse By Category</h1>
        <img className="phones" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298964556470554684/Category_Card.png?ex=671b7a83&is=671a2903&hm=a88d39f3bd49f3af10da8c18ff6ecf83f0d253de9f40cb5959c7fc1033b5fe7e&" alt="" />
        <img className="smartwatch" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298964631741530246/Category_Card_1.png?ex=671b7a95&is=671a2915&hm=fdd264e86ea7680809b05a6dfb8203f87018f7bbe7665834b828031f59a14e34&" alt="" />
        <img className="cameras" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298964745532997663/Group_16.png?ex=671b7ab0&is=671a2930&hm=277f70cda3ae79ea455e2422619f14cab31342866690d88b4686a3d28c671258&" alt="" />
        <img className="headphones" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298964673001160755/Category_Card_2.png?ex=671b7a9f&is=671a291f&hm=d2bff9392d16ccbb32112b36cb7ade76561d5ae6489db0c243aa207b4d3f679a&" alt="" />
        <img className="computer" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298964710670204928/Category_Card_3.png?ex=671b7aa8&is=671a2928&hm=edfbb9baa1cb194fcb7b14b411fad13ccefe2c1991efa3d45224a62ce8ae0528&" alt="" />
        <img className="gaming" src="https://cdn.discordapp.com/attachments/1297553960084701204/1298964775765545002/Category_Card_4.png?ex=671b7ab8&is=671a2938&hm=66d75d737b98e62e4a30f1b02875e9c1f775248022abf8903f10872e3fc4d807&" alt="" />
      </div>
     
      <div className="products">
        <i className="heart-icon"></i>
        <div className="iphone14">
        <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301590037183598643/Iphone_14_pro_1_1.png?ex=672507af&is=6723b62f&hm=ffe0dc327f2d9a8e72b6d4278c0f59d237f20371aaf9ed3955b60651c2df9166&" alt="iPhone 14 Pro Max" />
            <h1>
              Blackmagic Cinema Camera
              <span>6k Pocket</span>
            </h1>
            <h2>$2535</h2>
            <button>Buy Now</button>

        </div>
          <div className="iphone14">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301590004073627800/Iphone_14_pro_1_2.png?ex=672507a7&is=6723b627&hm=f63ecf52480e09632c649f25da858c4bf3fdc0cae9208825d80cb1bf31110667&" alt="iPhone 14 Pro Max" />
            <h1>
              Apple Watch Series 9
              <span>41mm Starlight</span>
            </h1>
            <h2>$399</h2>
            <button>Buy Now</button>
          </div>

          <div className="iphone14">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301589962835099760/Iphone_14_pro_1_3.png?ex=6725079d&is=6723b61d&hm=fdbde2864674413862325d8b0e9764a1d5c59c40c83bd408fbc72452b60d8f10&" alt="Blackmagic Cinema Camera" />
            <h1>
              AirPods Max
              <span>Silver Starlight</span>
            </h1>
            <h2>$549</h2>
            <button>Buy Now</button>
          </div>

          <div className="iphone14">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301589933588480110/Iphone_14_pro_1_4.png?ex=67250796&is=6723b616&hm=372900626c9eeccd2c9ca85a5205b1ebb796b97cdcb69cedde053423d8c2eff4&" alt="Apple Watch Series 9" />
            <h1>
            Samsung Galaxy Watch6 
              <span>Classic 47mm Black</span>
            </h1>
            <h2>$369</h2>
            <button>Buy Now</button>
            </div>
          <div className="iphone14">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301590346026975315/Iphone_14_pro_1_7.png?ex=672507f8&is=6723b678&hm=a1d2b8cda93b7e93eb9d41b8feb28a7792e606340182a1d1d5baac362a877ed0&" alt="AirPods Max" />
            <h1>
            Galaxy Z Fold5 Unlocked 
              <span>256GB | Phantom Black</span>
            </h1>
            <h2>$1799</h2>
            <button>Buy Now</button>
          </div>
        

      
      <div className="iphone14">
        <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301589910360424458/Iphone_14_pro_1_5.png?ex=67250791&is=6723b611&hm=53af8eecdf5857fba3859c3b24262cef5bac67ae44e843d1e74c4b4d3420a049&" alt="" />
        <h1>Galaxy Buds FE<span>Graphite</span></h1>
        <h2>$99.99</h2>
        <button>Buy Now</button>
      </div>

      <div className="iphone14">
        <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1301589880769351700/Iphone_14_pro_1_6.png?ex=6725b049&is=67245ec9&hm=854a5a23f19ce0b51a1fe4cf7360173acfe7859a57c6128b72359f050f4df0a6&" alt="" />
        <h1>Apple iPad 9 10.2" 64GB Wi-Fi <span>Silver (MK2L3) 2021</span></h1>
        <h2>$398</h2>
        <button> Buy Now</button>
      </div>
      </div>
      <div className="iphone1">
      <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1299313783487074324/Iphone_14_pro_1.png?ex=671cbfc2&is=671b6e42&hm=b6698a61fdc652fd956cd89239171b5a503cd7873beb615d9c1d749d578d8437&" alt="" />
          <h1>Apple iPhone 14 Pro Max <br /><span>128GB Deep Purple</span></h1>
          <h2>$900</h2>
          <button>Buy Now</button>
      </div>
      <div className="pages">
<h1>New Arrivals</h1>
<h1>Best Seller</h1>
<h1>Featured Products</h1>
</div>

<div className="otherproducts">
  <img className="earbuds" src="https://cdn.discordapp.com/attachments/1297553960084701204/1301977758385311754/image_39.png?ex=672670c7&is=67251f47&hm=dca7a900e6976d85d4ab7b1867781c36e59b4c0d2f981fe13d74cd7ca1c25f7d&" alt="" />
  <img className="watch" src="https://cdn.discordapp.com/attachments/1297553960084701204/1301977975750791258/image_12.png?ex=672670fb&is=67251f7b&hm=8309b49fc58bcbeee88f2d221a72f2dd88a44d9d88d146975cbd652b71bd4d02&" alt="" />
  <h1>Popular Products</h1>
  <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  <button>Shop Now</button>
</div>
  <div className="ipad">
  <img className="watch" src="https://cdn.discordapp.com/attachments/1297553960084701204/1301978205950836826/image_64.png?ex=67267131&is=67251fb1&hm=4321d01fe5bc46460d729054e42c738e1ac086af91e467e90d94887e93846915&" alt="" />
  <h1>Ipad pro</h1>
  <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  <button>Shop Now</button>
  </div>
  <div className="fold">
  <img className="watch" src="https://cdn.discordapp.com/attachments/1297553960084701204/1301978047414534214/image_41.png?ex=6726710c&is=67251f8c&hm=e1881d4887136ce14aa3c3f9aa04c75add57321d7c5fe9afb888816a43d9c6f7&" alt="" />
  <h1>Samsung Galaxy</h1>
  <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  <button>Shop Now</button>
  </div>
  <div className="mac">
  <img className="watch" src="https://cdn.discordapp.com/attachments/1297553960084701204/1301978111864209428/Macbook_1.png?ex=6726711b&is=67251f9b&hm=6b9c340b642351b7b4c484c61211b11c897af42e39c727120e933b5904f5951f&" alt="" />
  <h1>Macbook Pro</h1>
  <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
  <button>Shop Now</button>
</div>
<div className="iphone2">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302369541858394172/Iphone_14_pro_1_8.png?ex=6727dda7&is=67268c27&hm=b6dfe0980ecd926a8a2d683800be7ed96fac56a76fec817f4d6b7715919a08d1&" alt="" />
            <h1>
            Apple iPhone 14 Pro
              <br />
              <span> 512GB Gold (MQ233)</span>
            </h1>
            <h2>$1473</h2>
            <button>Buy Now</button>
          </div>
          <div className="airmax">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302369515929206815/Iphone_14_pro_1_9.png?ex=6727dda1&is=67268c21&hm=bc33c5eea2a9e1918bc8913312ab5db250bdcec7f5356ba041ce6e0efb4251a1&" alt="Blackmagic Cinema Camera" />
            <h1>
              AirPods Max
              <br />
              <span>Silver Starlight Aluminium</span>
            </h1>
            <h2>$549</h2>
            <button>Buy Now</button>
          </div>
          <div className="airmax1">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302369477312381048/Iphone_14_pro_1_10.png?ex=6727dd98&is=67268c18&hm=b064dfa7327343d38ce0686aaf171decde3c5bbe1f56487571a35868ad2054a0&" alt="Blackmagic Cinema Camera" />
            <h1>
              Apple Watch Series 9 GPS
              <br />
              <span>41mm Starlight Aluminium</span>
            </h1>
            <h2>$399</h2>
            <button>Buy Now</button>
          </div>
          <div className="airmax2">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302369446517670059/Iphone_14_pro_1_11.png?ex=6727dd90&is=67268c10&hm=ac1ce7011111afdf9460d6e99a6f47b25d3406eb8ef8da101e376e12aaa0b2cf&" alt="Blackmagic Cinema Camera" />
            <h1>
              Apple iphone 14 Pro 1TB Gold
              <br />
              <span>(MQ2V3)</span>
            </h1>
            <h2>$1499</h2>
            <button>Buy Now</button>
          </div>
          <br /><br /><br /><br />
          <div className="banner">
            <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302382564924981288/Banner_2_4.png?ex=6727e9c8&is=67269848&hm=e02ac37f15ce6d878092f30d9c4b2348b27a24ded391278fdbe4d46ba1111dd8&" alt="" />
          </div>
          <div className="bannertxt">
          <h1>Big Summer <span>Sale</span></h1>
            <p>Commodo fames vitae vitae liou moris in. Eu consequat.</p>
            <button>Shop Now</button>
            </div>
          
            
            <div className="footer">
              
              <footer>
              
                <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302386826924789841/Logo_1.png?ex=6727edc0&is=67269c40&hm=a01bd7085595dca9a7664b243bad4b3c25dc641619f02ee149086407a284a402&" alt="" />
                <br />
                <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                <div className="footertext1">
                  <p>
                  Bonus program <br /> <br />
                  Gift cards <br /> <br />
                  Credit and payment <br /><br />
                  Service contracts <br /> <br />
                  Non-cash account <br /><br />
                  Payment <br />
                  </p>
                  </div>
                  <div className="footertext2">
                  <p>
                     Find an order <br /> <br />
                  Terms of Delivery <br /> <br />
                  Exchange and returns of goods <br /><br />
                  Guarantee<br /> <br />
                  Frequently asked questions <br /><br />
                  Terms of use of the site<br />
                  </p>
                  </div>
                  <h1 className="footerheadings">Assistance to the buyer</h1>
                  
                  <h1 className="footerheadings2">Services</h1>
                  <div className="emenem">
                    <img src="https://cdn.discordapp.com/attachments/1297553960084701204/1302402496320372857/Social_Icons.png?ex=6727fc58&is=6726aad8&hm=1a816a237020267f0a53e86517acb22676caceb83d7514546431c91da4ff3860&" alt="" />
                  </div>
                 
              </footer>
              
            </div>
      </div>
      
  )
}
