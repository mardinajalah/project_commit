import { FontAwesomeIcon, faAngleDown, faBars } from "@/lib/FontAwesome"

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] h-20 shadow-md flex justify-between px-10 items-center">
      <div className="w-12 h-12 rounded-xl border-2 flex items-center justify-center text-2xl border-[#464646] text-[#464646] cursor-pointer">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full w-10 h-10 overflow-hidden">
          <img className="w-full h-full" src="https://cdn0-production-images-kly.akamaized.net/IngvimdI_xv6ePAuBzJ7GjHWUIM=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3914908/original/017294300_1643170592-OPPO_Indonesia__69_.jpg" alt="profile" />
        </div>
        <p>Muhammad Rizky</p>
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  )
}

export default Navbar