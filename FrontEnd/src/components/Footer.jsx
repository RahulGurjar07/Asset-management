import LogoCarousel from "./LogoCurser";

export default function Footer() {
  return (<>
    <footer>
      <div className="flex justify-between mx-10 text-gray-600">
        {/* <div>Privacy policy</div>
        <div>Term & condition</div> */}
        <LogoCarousel />
      </div>
    </footer>
  </>)
}